'use client'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import React from 'react'
import '@mantine/dropzone/styles.css';
import { Group, Text } from '@mantine/core';

import { useCanvas } from '@/app/state/context/CanvasContext';
const Image = () => {
    const { filePath, setFilePath } = useCanvas()



    const handleDrop = (files: File[]) => {
        const file = files[0];
        const fileUrl = URL.createObjectURL(file);
        console.log('Selected file:', fileUrl);
        setFilePath(fileUrl);
    };

    return (
        <div>
            Images

            <Group >
                <Text size="lg" >Upload an Image</Text>

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
        </div>
    )
}

export default Image