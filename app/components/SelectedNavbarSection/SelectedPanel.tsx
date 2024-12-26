'use client'
import { useSelectPanelContext } from '@/app/state/context/SelectPanelContext'
import React from 'react'
import Background from '../Background/Background'
import classes from './SelectedPanel.module.css'
const SelectedPanel = () => {
    const { selected } = useSelectPanelContext()
    return (
        <div className={classes.container}>
            {selected}
            {selected === 'Background' ? <Background /> : null}
        </div>
    )
}

export default SelectedPanel