'use client';

import React from 'react';
import { useSelectPanelContext } from '@/app/state/context/SelectPanelContext';
import Background from '../Background/Background';
import Image from '../Image/Image';
import TextSection from '../TextSection/TextSection';
import classes from './LeftHandPanel.module.css';

const LeftHandPanel = () => {
    const { selected } = useSelectPanelContext();

    return (
        <div className={classes.container}>
            {selected === 'Background' ? <Background /> : null}
            {selected === 'Text' ? <TextSection /> : null}
            {selected === 'Background Image' ? <Image /> : null}
            {selected === 'Shapes' ? null : null}
        </div>
    );
};

export default LeftHandPanel;
