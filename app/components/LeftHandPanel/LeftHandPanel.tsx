'use client'
import React from 'react'
import Background from '../Background/Background'
import classes from './LeftHandPanel.module.css'
import { RootState } from '@/app/state/store/store'
import { useSelector } from 'react-redux'
import { useSelectPanelContext } from '@/app/state/context/SelectPanelContext'
import { useAppSelector } from '@/app/lib/hooks'

const LeftHandPanel = () => {
    const canvasState = useAppSelector((state) => state.Canvas);
    console.log(canvasState)
    const { selected
    } = useSelectPanelContext()
    return (
        <div className={classes.container}>
            {selected === 'Background' ? <Background /> : null}
        </div>
    )
}

export default LeftHandPanel