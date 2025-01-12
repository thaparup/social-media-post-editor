'use client'
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { Flex } from '@mantine/core';
import { useAppSelector } from '@/app/lib/hooks';
import { useCanvas } from '@/app/state/context/CanvasContext';

const RightHandPanel = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasState = useAppSelector((state) => state.Canvas);
    const { textArray, fabricCanvasRef, filePath } = useCanvas();



    useEffect(() => {
        if (canvasRef.current) {
            fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
                width: 550,
                height: 550,
                backgroundColor: canvasState.canvasBgColor,
            });
        }

        return () => {
            fabricCanvasRef.current?.dispose();
        };
    }, []);

    useEffect(() => {
        if (fabricCanvasRef.current) {
            textArray.forEach((textbox) => {
                textbox.editable = false;
                fabricCanvasRef.current?.add(textbox);
            });
        }
    }, [textArray]);

    useEffect(() => {
        if (fabricCanvasRef.current) {
            fabricCanvasRef.current.setBackgroundColor(
                canvasState.canvasBgColor,
                fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current)
            );
        }
    }, [canvasState.canvasBgColor]);

    useEffect(() => {
        if (fabricCanvasRef.current) {
            fabric.Image.fromURL(filePath, (img) => {
                img.set({
                    left: 0,
                    top: 0,
                    scaleX: fabricCanvasRef.current?.width! / img.width!,
                    scaleY: fabricCanvasRef.current?.height! / img.height!,
                    originX: 'left',
                    originY: 'top',


                });

                fabricCanvasRef.current?.setBackgroundImage(
                    img,
                    fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current),
                    {
                        // backgroundImageStretch: true,
                    }
                );
            });
        }

        return () => {
            URL.revokeObjectURL(filePath);
        };
    }, [filePath]);

    return (
        <Flex
            direction={'row'}
            align={'center'}
            justify={'center'}
            style={{ width: '100%', height: '100%' }}
        >
            <canvas ref={canvasRef} style={{ borderRadius: '8px' }} />
        </Flex>
    );
};

export default RightHandPanel;
