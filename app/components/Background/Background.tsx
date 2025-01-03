import React, { useState } from 'react'
import { Button, ColorPicker, Flex, Menu, Text, } from '@mantine/core'
import { useBackgroundPanelContext } from '@/app/state/context/BackgroundPanelContext'
import Gradient from './Gradient'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { RootState } from '@/app/state/store/store'
import classes from './Background.module.css'
import {
    setCanvasBgTypeAsSolid,
    setCanvasBgTypeAsGradient,
    setCanvasBgTypeAsImage,
} from '@/app/state/store/Slicer/CanvasSlicer'
import Solid from './Solid'

const Background = () => {


    const canvasState = useAppSelector((state: RootState) => state.Canvas);
    const dispatch = useAppDispatch();


    return (
        <Flex direction="column" gap={12} justify={'center'} align={'center'} className={classes.container}>
            <Menu shadow="md" >
                <Menu.Target >
                    <Button w='80%' style={{ marginTop: '20px' }}>{canvasState.canvasBgType.toUpperCase()}</Button>
                </Menu.Target>

                <Menu.Dropdown style={{ width: '200px' }}>
                    <Menu.Item component="a" onClick={() => {
                        dispatch(setCanvasBgTypeAsSolid())
                    }}>
                        Solid
                    </Menu.Item>
                    <Menu.Item
                        component="a"

                        onClick={() => {
                            console.log("Dispatching setCanvasBgTyAsGradient");
                            dispatch(setCanvasBgTypeAsGradient())
                        }}
                    >
                        Gradient
                    </Menu.Item>
                    <Menu.Item
                        component="a"

                        onClick={() => dispatch(setCanvasBgTypeAsImage())}
                    >
                        Image
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            {canvasState.canvasBgType === 'Solid' ?
                <Solid />
                : null}
            {canvasState.canvasBgType === 'Gradient' ? <Gradient /> : null}
        </Flex>
    )
}

export default Background