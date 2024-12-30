import React, { useState } from 'react';
import { Button, ColorInput, ColorPicker, Flex, Popover } from '@mantine/core';
import classes from './Background.module.css'

const Gradient = () => {
    const [firstColor, setFirstColor] = useState('#f12711');
    const [secondColor, setSecondColor] = useState('#f5af19');
    const [thirdColor, setThirdColor] = useState('#2836c9');
    const [fourthColor, setFourthColor] = useState('#f52cb2');
    const [fifthColor, setFifthColor] = useState('#fcbe49');
    const [sixthColor, setSixthColor] = useState('#2836c9');
    const [addThirdColor, setAddThirdColor] = useState(false);

    const gradientStyle = {
        height: '25px',
        background: `${addThirdColor ? `linear-gradient(to right, ${firstColor}, ${secondColor}, ${thirdColor})` : `linear-gradient(to right, ${firstColor}, ${secondColor})`}`,
        borderRadius: '8px',
        marginTop: '20px',
    };
    const gradientStyle2 = {
        height: '50px',
        background: `linear-gradient(to right, ${fourthColor}, ${fifthColor}, ${sixthColor})`,
        borderRadius: '8px',
        marginTop: '20px',
    };
    const [openFourthColor, setOpenFourthColor] = useState(false);
    const handleClick = (event) => {
        const bgColor = window.getComputedStyle(event.target).backgroundColor;
        console.log(bgColor);
    };

    return (
        <div>
            <Flex direction="row" gap={12} justify={'center'} align={'center'}>
                <Button disabled={addThirdColor ? true : false} onClick={() =>
                    setAddThirdColor(true)

                }>Add New Color</Button>
            </Flex>
            <ColorInput placeholder="Pick a color" value={firstColor} onChange={setFirstColor} />
            <ColorInput placeholder="Pick a color" value={secondColor} onChange={setSecondColor} />
            {addThirdColor && <ColorInput placeholder="Pick a color" value={thirdColor} onChange={setThirdColor} />}
            <div style={gradientStyle} >
            </div>


        </div>
    );
};

export default Gradient;
