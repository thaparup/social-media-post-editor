'use client'
import { resolutions } from '@/app/constants/resolution'
import { setExportHeight, setExportWidth } from '@/app/state/store/Slicer/CanvasSlicer'
import { Button, Flex, Input } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Resolutions = () => {
    const [height, setHeight] = useState<number>()
    const [width, setWidth] = useState<number>()

    const dispatch = useDispatch()
    const handleWidth = (e: any) => {
        setWidth(e.target.value)

    }

    const handleHeight = (e: any) => {
        setHeight(e.target.value)

    }
    const handleApplyButton = () => {

        if (!height || !width) {
            return
        }
        else {
            dispatch(setExportWidth(width))
            dispatch(setExportHeight(height))

        }

    }
    return (
        <div >
            <h1 style={{ background: 'red', lineHeight: '0px', }}>Resolution Preview</h1>

            <Flex direction='row' gap={8}>
                <Input
                    variant="filled"
                    placeholder="width"
                    value={width}
                    onChange={handleWidth}
                    type='number'
                />
                <p style={{ fontWeight: '700', margin: 'auto' }}>X</p>
                <Input
                    variant="filled"
                    placeholder="height"
                    value={height}
                    type='number'
                    onChange={handleHeight}
                />
                <Button variant='filled' onClick={handleApplyButton} className='btn-primary ml-3'>Apply</Button>
            </Flex>
            {resolutions.map((resolution, index) => (
                <section >
                    <h2 >{resolution.site}</h2>
                    <div key={index}>
                        {resolution.res.map((r, index) => (
                            <Button
                                style={{ margin: '8px 8px', }}
                                data-size={r.size}
                                // onClick={(e) => console.log(e.currentTarget.dataset.size)}
                                onClick={() => {
                                    const [width, height] = r.size.split(' x ').map(Number);
                                    dispatch(setExportWidth(width))
                                    dispatch(setExportHeight(height))
                                }}

                            >
                                {r.name} {r.size}
                            </Button>
                        )
                        )}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Resolutions