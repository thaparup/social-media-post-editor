'use client'

import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import classes from './Header.module.css'
import ResolutionDrawer from './ResolutionDrawer'
import { useCanvas } from '@/app/state/context/CanvasContext'
import { useAppSelector } from '@/app/lib/hooks'

const Header = () => {
    const { fabricCanvasRef } = useCanvas();

    const { exportWidth, exportHeight } = useAppSelector((state) => state.Canvas);

    const exportCanvasAsImage = () => {
        if (fabricCanvasRef.current) {
            const dataURL = fabricCanvasRef.current.toDataURL({
                format: 'png',
                quality: 1,
                width: exportWidth,
                height: exportHeight,
            });

            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'canvas-image.png';
            link.click();
        }
    };

    return (
        <header className={classes.header}>
            <Text className={classes.title}>Social Media Post Editor</Text>
            <Flex gap={14}>
                <ThemeSwitcher />
                <Button onClick={exportCanvasAsImage}>Export png</Button>
                <ResolutionDrawer />
            </Flex>
        </header>
    )
}

export default Header;
