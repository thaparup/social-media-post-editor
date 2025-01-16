'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ColorInput, Flex, Slider, Text } from '@mantine/core';
import { useAppSelector } from '@/app/lib/hooks';
import { setCanvasBgColor } from '@/app/state/store/Slicer/CanvasSlicer';
import Suggestion from './Suggestion';
import classes from './Background.module.css';

const Gradient = () => {
    const [firstColor, setFirstColor] = useState('#f12711');
    const [secondColor, setSecondColor] = useState('#f5af19');
    const [thirdColor, setThirdColor] = useState('#2836c9');
    const [addThirdColor, setAddThirdColor] = useState(false);
    const [degree, setDegree] = useState(0);

    const canvasState = useAppSelector((state) => state.Canvas);
    const dispatch = useDispatch();
    const bgLinear = `${addThirdColor ? `linear-gradient(${degree}deg, ${firstColor}, ${secondColor}, ${thirdColor})` : `linear-gradient(${degree}deg, ${firstColor}, ${secondColor})`}`;

    useEffect(() => {
        dispatch(setCanvasBgColor(bgLinear));
    }, [degree, canvasState.canvasBgColor, addThirdColor, firstColor, secondColor, thirdColor]);

    return (
        <div style={{ width: '100%', height: '100%' }} className={classes.container}>
            <Flex direction="column" gap={12} justify={'center'} align={'center'} mt={20}>
                <ColorInput
                    placeholder="Pick a color"
                    value={firstColor}
                    onChange={setFirstColor}
                    w="70%"
                    style={{ margin: 'auto' }}
                />
                <ColorInput
                    placeholder="Pick a color"
                    value={secondColor}
                    onChange={setSecondColor}
                    w="70%"
                    style={{
                        margin: 'auto',
                        marginBottom: !addThirdColor ? '14px' : undefined,
                    }}
                />
                {addThirdColor && (
                    <ColorInput
                        placeholder="Pick a color"
                        value={thirdColor}
                        onChange={setThirdColor}
                        w="70%"
                        style={{ margin: 'auto', marginBottom: '10px' }}
                    />
                )}
            </Flex>

            <Flex direction="row" gap={12} justify={'center'} align={'center'}>
                <Button
                    disabled={addThirdColor ? true : false}
                    onClick={() => {
                        setAddThirdColor(true);
                        dispatch(setCanvasBgColor(bgLinear));
                    }}
                >
                    Add New Color
                </Button>
            </Flex>
            <Slider
                color="orange"
                w="90%"
                value={degree}
                onChange={setDegree}
                max={360}
                style={{ margin: 'auto', marginTop: '2rem' }}
            />
            <Text fz={30} fw={700} style={{ textAlign: 'center' }}>
                {degree}°
            </Text>
            <Suggestion
                degree={degree}
                setFirstColor={setFirstColor}
                setSecondColor={setSecondColor}
                setThirdColor={setThirdColor}
                setAddThirdColor={setAddThirdColor}
            />
        </div>
    );
};

export default Gradient;
