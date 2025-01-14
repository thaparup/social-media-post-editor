'use client'
import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { Flex } from '@mantine/core';
import { useAppSelector } from '@/app/lib/hooks';
import { useCanvas } from '@/app/state/context/CanvasContext';

const RightHandPanel = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasState = useAppSelector((state) => state.Canvas);
    const { textArray, fabricCanvasRef, filePath, bgImagePositionX, bgImagePositionY, bgImageRotationDegree, bgImageSkewY, bgImageSkewX } = useCanvas();
    const [skewX, setSkewX] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState<fabric.Image | null>(null);
    const [blur, setBlur] = useState(40); //
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
        if (fabricCanvasRef.current && filePath) {
            fabric.Image.fromURL(filePath, (img) => {
                img.set({
                    left: ((bgImagePositionX * 550) / 100),
                    top: ((bgImagePositionY * 550) / 100),
                    scaleX: fabricCanvasRef.current?.width! / img.width!,
                    scaleY: fabricCanvasRef.current?.height! / img.height!,
                    originX: 'left',
                    originY: 'top',
                    skewY: bgImageSkewY,
                    skewX: bgImageSkewX,
                    angle: bgImageRotationDegree,
                    centeredRotation: true,

                });

                fabricCanvasRef.current?.setBackgroundImage(
                    img,
                    fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current)
                );

                setBackgroundImage(img);
            });
        }

        return () => {
            URL.revokeObjectURL(filePath);
        };
    }, [filePath]);

    useEffect(() => {
        if (backgroundImage) {
            backgroundImage.set({
                left: ((bgImagePositionX * 550) / 100),
                top: ((bgImagePositionY * 550) / 100),
                skewY: bgImageSkewY,
                skewX: bgImageSkewX,
                angle: bgImageRotationDegree,

            });

            fabricCanvasRef.current?.renderAll();
        }
    }, [backgroundImage, , bgImagePositionX, bgImagePositionY, bgImageRotationDegree, bgImageSkewY, bgImageSkewX]);



    return (
        <>

            <Flex
                direction={'row'}
                align={'center'}
                justify={'center'}
                style={{ width: '100%', height: '100%' }}
            >
                <canvas ref={canvasRef} style={{ borderRadius: '8px' }} />
            </Flex>
        </>
    );
};

export default RightHandPanel;
