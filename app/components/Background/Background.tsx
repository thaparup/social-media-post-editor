import React, { useState } from 'react'
import { Button, ColorPicker, Flex, Menu, Text, } from '@mantine/core'
import { useBackgroundPanelContext } from '@/app/state/context/BackgroundPanelContext'
import Gradient from './Gradient'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { RootState } from '@/app/state/store/store'
import {
    setCanvasBgTypeAsSolid,
    setCanvasBgTypeAsGradient,
    setCanvasBgTypeAsImage,
} from '@/app/state/store/Slicer/CanvasSlicer'

const Background = () => {

    const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
    const canvasState = useAppSelector((state: RootState) => state.Canvas);
    const dispatch = useAppDispatch();
    console.log(canvasState.canvasBgType)


    return (
        <Flex direction="column" gap={12} justify={'center'} align={'center'}>
            <Menu shadow="md" >
                <Menu.Target>
                    <Button w='90%' styles={{}}>{canvasState.canvasBgType.toUpperCase()}</Button>
                </Menu.Target>

                <Menu.Dropdown style={{ width: '200px' }}>
                    <Menu.Item component="a" onClick={() => {
                        console.log("Dispatching setCanvasBgTyAsSolid");
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
                <>
                    <ColorPicker style={{ marginTop: '2rem', width: '80%' }} format="rgba" value={value} onChange={onChange} swatchesPerRow={9} swatches={[
                        "#25262b",
                        "#868e96",
                        "#fa5252",
                        "#e64980",
                        "#be4bdb",
                        "#7950f2",
                        "#4c6ef5",
                        "#228be6",
                        "#15aabf",
                        "#12b886",
                        "#40c057",
                        "#82c91e",
                        "#fab005",
                        "#fd7e14",
                    ]} />
                    <Text >{value}</Text>

                </>

                : null}
            {canvasState.canvasBgType === 'Gradient' ? <Gradient /> : null}
        </Flex>
    )
}

export default Background