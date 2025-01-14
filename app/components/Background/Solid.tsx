'use client'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { setCanvasBgColor } from '@/app/state/store/Slicer/CanvasSlicer';
import { ColorPicker, Text } from '@mantine/core'
import { on } from 'events';
import React, { useEffect, useState } from 'react'

const Solid = () => {
    const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
    const dispatch = useAppDispatch();

    const handleChange = (color: string) => {
        onChange(color)
        console.log(color)
        dispatch(setCanvasBgColor(color));

    }
    return (

        <ColorPicker style={{ marginTop: '2rem', width: '100%' }} format="rgba" value={value} onChange={(color: string) => { handleChange(color) }} swatchesPerRow={9} swatches={[
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

    )
}

export default Solid