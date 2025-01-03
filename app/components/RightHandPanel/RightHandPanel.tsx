import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { Flex } from '@mantine/core';
import { useAppSelector } from '@/app/lib/hooks';

const RightHandPanel = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasState = useAppSelector((state) => state.Canvas);
    const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

    const textRef = useRef<fabric.Textbox | null>(null)
    const [text, setText] = useState<string>('Hello world')


    useEffect(() => {
        if (canvasRef.current) {
            fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
                width: 500,
                height: 500,
                backgroundColor: canvasState.canvasBgColor,
            });
            textRef.current = new fabric.Textbox(text, {
                width: 200
            })
            fabricCanvasRef.current.add(textRef.current)

        }

        return () => {
            fabricCanvasRef.current?.dispose();
        };
    }, []);
    useEffect(() => {
        if (textRef.current) {

            textRef.current.on('mousedown', (e) => {
                console.log(e.target)
            })

        }
    }, [textRef.current])

    useEffect(() => {
        if (fabricCanvasRef.current) {
            fabricCanvasRef.current.setBackgroundColor(canvasState.canvasBgColor, fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current));
        }
    }, [canvasState.canvasBgColor]);

    return (
        <Flex direction={'row'} align={'center'} justify={'center'} style={{ width: '100%', height: '100%' }}>
            <canvas ref={canvasRef} style={{ borderRadius: '8px' }}> </canvas>
        </Flex>
    );
};

export default RightHandPanel;
