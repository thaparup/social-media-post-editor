'use client'
import React from 'react'
import Background from '../Background/Background'
import classes from './LeftHandPanel.module.css'
import { RootState } from '@/app/state/store/store'
import { useSelector } from 'react-redux'
import { useSelectPanelContext } from '@/app/state/context/SelectPanelContext'
import { useAppSelector } from '@/app/lib/hooks'
import Shapes from '../Shapes/Shapes'
import TextSection from '../TextSection/TextSection'
import Image from '../Image/Image'

const LeftHandPanel = () => {

    const { selected
    } = useSelectPanelContext()

    return (
        <div className={classes.container}>
            {selected === 'Background' ? <Background /> : null}
            {selected === 'Text' ? <TextSection /> : null}
            {selected === 'Image' ? <Image /> : null}

        </div>
    )
}

export default LeftHandPanel