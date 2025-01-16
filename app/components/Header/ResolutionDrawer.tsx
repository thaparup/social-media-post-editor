'use client'
import { useAppSelector } from '@/app/lib/hooks';
import { RootState } from '@/app/state/store/store';
import { Button, Drawer, Flex, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect } from 'react'
import ResolutionPreview from './ResolutionPreview';
import Resolutions from './Resolutions';

const ResolutionDrawer = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const canvasState = useAppSelector((state: RootState) => state.Canvas);


    return (
        <div >

            <Drawer opened={opened} onClose={close} position='right' size='60%' >
                <Flex direction='row' gap={20}>
                    <ResolutionPreview />
                    <Resolutions />
                </Flex>
            </Drawer>
            <Tooltip label="Pick a resolution">
                <Button variant="default" onClick={open}>
                    {canvasState.exportHeight} x {canvasState.exportWidth}
                </Button>
            </Tooltip>
        </div>
    )
}

export default ResolutionDrawer