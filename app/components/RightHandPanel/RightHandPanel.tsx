'use client';

import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useAppSelector } from '@/app/lib/hooks';
import { useCanvas } from '@/app/state/context/CanvasContext';

const RightHandPanel = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasState = useAppSelector((state) => state.Canvas);
    const {
        textArray,
        fabricCanvasRef,
        filePath,
        bgImagePositionX,
        bgImagePositionY,
        bgImageRotationDegree,
        bgImageSkewY,
        bgImageSkewX,
    } = useCanvas();
    const [skewX, setSkewX] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState<fabric.Image | null>(null);
    const [blur, setBlur] = useState(40); //

    const getCanvasDimensions = (width: number, height: number) => {
        const maxWidth = 900;
        const maxHeight = 600;
        const aspectRatio = width / height;

        let newWidth = width;
        let newHeight = height;

        if (width > maxWidth || height > maxHeight) {
            if (aspectRatio > 1) {
                // Scale width down if width is larger than maxWidth
                newWidth = Math.min(width, maxWidth);
                newHeight = newWidth / aspectRatio;
            } else {
                // Scale height down if height is larger than maxHeight
                newHeight = Math.min(height, maxHeight);
                newWidth = newHeight * aspectRatio;
            }
        }

        return { width: newWidth, height: newHeight };
    };

    useEffect(() => {
        if (canvasRef.current) {
            const { width, height } = getCanvasDimensions(
                canvasState.exportWidth,
                canvasState.exportHeight
            );
            fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
                width: width,
                height: height,
            });


            canvasRef.current.style.background = canvasState.canvasBgColor;
        }

        return () => {
            fabricCanvasRef.current?.dispose();
        };
    }, [canvasState.exportWidth, canvasState.exportHeight]);

    useEffect(() => {
        if (fabricCanvasRef.current) {
            textArray.forEach((textbox) => {
                textbox.editable = false;
                fabricCanvasRef.current?.add(textbox);
            });
        }
    }, [textArray]);

    useEffect(() => {
        if (canvasRef.current) {

            // fabricCanvasRef.current.setBackgroundColor(
            //   fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current)
            // );
            canvasRef.current.style.background = canvasState.canvasBgColor
        }
    }, [canvasState.canvasBgColor]);

    useEffect(() => {
        if (fabricCanvasRef.current && filePath) {
            fabric.Image.fromURL(filePath, (img) => {
                img.set({
                    left: (bgImagePositionX * canvasState.exportWidth) / 100,
                    top: (bgImagePositionY * canvasState.exportHeight) / 100,
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
                left: (bgImagePositionX * canvasState.exportWidth) / 100,
                top: (bgImagePositionY * canvasState.exportHeight) / 100,
                skewY: bgImageSkewY,
                skewX: bgImageSkewX,
                angle: bgImageRotationDegree,
            });

            fabricCanvasRef.current?.renderAll();
        }
    }, [
        backgroundImage,
        bgImagePositionX,
        bgImagePositionY,
        bgImageRotationDegree,
        bgImageSkewY,
        bgImageSkewX,
    ]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <canvas ref={canvasRef} style={{ borderRadius: '8px' }} />
        </div>
    );
};

export default RightHandPanel;
