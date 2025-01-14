'use client'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import React, { useRef, useState } from 'react'
import '@mantine/dropzone/styles.css';
import { Flex, Group, Slider, Text } from '@mantine/core';

import { useCanvas } from '@/app/state/context/CanvasContext';
const Image = () => {
    const sliderRef = useRef<number>(0)
    const { filePath, setFilePath, bgImagePositionX, setBgImagePositionX, bgImageRotationDegree, setBgImageRotationDegree, bgImagePositionY, setBgImagePositionY, bgImageSkewX, setBgImageSkewX, bgImageSkewY, setBgImageSkewY } = useCanvas()

    const handleDrop = (files: File[]) => {
        const file = files[0];
        const fileUrl = URL.createObjectURL(file);
        setFilePath(fileUrl);
    };
    const marks = [
        { value: -100, label: '-100%' },
        { value: 0, label: '0%' },
        { value: 100, label: '100%' }

    ];
    const marks2 = [
        { value: -90, label: '-100%' },
        { value: 0, label: '0%' },
        { value: 90, label: '100%' }

    ];

    return (
        <div >


            <Group >

                <Dropzone
                    onDrop={handleDrop}
                    accept={IMAGE_MIME_TYPE}
                    maxFiles={1}
                    multiple={false}
                    maxSize={5 * 1024 ** 2}
                    style={{ border: '2px dashed #C1C2C5', padding: '50px' }}
                >
                    <Text >Drag & Drop an image or click to select one</Text>
                </Dropzone>


            </Group>
            <Text mt={16} fz={20} style={{ textAlign: 'center' }} >Position</Text>
            <Flex direction='row' gap={20} style={{ width: '100%', marginTop: '8px' }}>
                <Text>X</Text>
                <Slider mt={8} marks={marks} defaultValue={0} min={-100}
                    max={100} w='100%' value={bgImagePositionX} onChange={setBgImagePositionX} />

            </Flex>
            <Flex direction='row' gap={20} style={{ width: '100%', marginTop: '30px' }}>
                <Text>Y</Text>
                <Slider mt={8} marks={marks} defaultValue={0} min={-100}
                    max={100} w='100%' value={bgImagePositionY} onChange={setBgImagePositionY} />

            </Flex>
            <Flex direction='row' gap={20} style={{ width: '100%', marginTop: '30px' }}>
                <Text>Rotate</Text>
                <Slider mt={8} marks={marks2} defaultValue={0} min={-90}
                    max={100} w='100%' value={bgImageRotationDegree} onChange={setBgImageRotationDegree} />

            </Flex>
            <Flex direction='row' gap={20} style={{ width: '100%', marginTop: '30px' }}>
                <Text>Skew X</Text>
                <Slider mt={8} marks={marks2} defaultValue={0} min={-90}
                    max={100} w='100%' value={bgImageSkewX} onChange={setBgImageSkewX} />

            </Flex>
            <Flex direction='row' gap={20} style={{ width: '100%', marginTop: '30px' }}>
                <Text>Skew Y</Text>
                <Slider mt={8} marks={marks2} defaultValue={0} min={-90}
                    max={100} w='100%' value={bgImageSkewY} onChange={setBgImageSkewY} />

            </Flex>

        </div>
    )
}

export default Image