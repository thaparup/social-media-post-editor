import React, { useState } from 'react';
import { Button, ColorInput, ColorPicker, Flex, Popover, ScrollArea, Slider, Text } from '@mantine/core';
import classes from './Background.module.css'
import { suggestionColors } from '@/app/constants/SuggestionColors';
import Suggestion from './Suggestion';

const Gradient = () => {
    const [firstColor, setFirstColor] = useState('#f12711');
    const [secondColor, setSecondColor] = useState('#f5af19');
    const [thirdColor, setThirdColor] = useState('#2836c9');
    const [fourthColor, setFourthColor] = useState('#f52cb2');
    const [fifthColor, setFifthColor] = useState('#fcbe49');
    const [sixthColor, setSixthColor] = useState('#2836c9');
    const [addThirdColor, setAddThirdColor] = useState(false);
    const [degree, setDegree] = useState(0);

    const gradientStyle = {
        height: '25px',
        background: `${addThirdColor ? `linear-gradient(${degree}deg, ${firstColor}, ${secondColor}, ${thirdColor})` : `linear-gradient(${degree}deg, ${firstColor}, ${secondColor})`}`,
        borderRadius: '8px',
        marginTop: '20px',
    };
    const gradientStyle2 = {
        height: '50px',
        background: `linear-gradient(, ${fourthColor}, ${fifthColor}, ${sixthColor})`,
        borderRadius: '8px',
        marginTop: '20px',
    };
    const [openFourthColor, setOpenFourthColor] = useState(false);


    return (
        <div style={{ width: '100%', height: '100%' }} className={classes.container}>
            <Flex direction="column" gap={12} justify={'center'} align={'center'} mt={20}>

                <ColorInput placeholder="Pick a color" value={firstColor} onChange={setFirstColor} w='70%' style={{ margin: 'auto', }} />
                <ColorInput placeholder="Pick a color" value={secondColor} onChange={setSecondColor} w='70%' style={{
                    margin: 'auto',
                    marginBottom: !addThirdColor ? '14px' : undefined
                }}
                />
                {addThirdColor && <ColorInput placeholder="Pick a color" value={thirdColor} onChange={setThirdColor} w='70%' style={{ margin: 'auto', marginBottom: '10px' }} />}
            </Flex>

            <Flex direction="row" gap={12} justify={'center'} align={'center'}>

                <Button disabled={addThirdColor ? true : false} onClick={() =>
                    setAddThirdColor(true)

                }>Add New Color</Button>
            </Flex>
            <Slider
                color="orange"
                w='90%'
                value={degree} onChange={setDegree}
                max={360}
                style={{ margin: 'auto', marginTop: '2rem' }}
            />
            <Text fz={30} fw={700} style={{ textAlign: 'center' }} >{degree}°</Text>
            <Suggestion degree={degree} />
        </div>
    );
};

export default Gradient;
