'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
    ColorInput,
    Flex,
    Radio,
    ScrollArea,
    Select,
    Slider,
    Text,
    Textarea,
} from '@mantine/core';
import { FONTFAMILIES } from '@/app/constants/FontFamilylist';
import { useCanvas } from '@/app/state/context/CanvasContext';
import { FontStyleType } from '@/app/state/context/types/FontStyle';

const TextSection = () => {
    const { addText, textArray, fabricCanvasRef, setTextArray, deleteText } = useCanvas();
    const [copy, setCopy] = useState<fabric.Textbox>();
    const [fontSize, setFontSize] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [textAllignment, setTextAllignment] = useState<string | null>(null);
    const [fontWeight, setFontWeight] = useState<string | null>(null);
    const [textColor, setTextColor] = useState<string>('rgb(0,0,0)');
    const [fontFamily, setFontFamily] = useState<string | null>('Poppins');
    const [fontStyle, setFontStyle] = useState<string | null>(null);
    const [underline, setUnderline] = useState<string | null>(null);
    const selectedIndexRef = useRef<number | null>(null);

    useEffect(() => {
        textArray.forEach((textbox, index) => {
            textbox.on('mousedown', (e) => {
                selectedIndexRef.current = index;
                setCopy(textArray[index]);
                setFontSize(textArray[index].fontSize!);
                setText(textArray[index].text!);
                setTextAllignment(textArray[index].textAlign!);

                setFontWeight(
                    typeof textArray[index].fontWeight === 'string' ? textArray[index].fontWeight : ''
                );
                setTextColor(typeof textArray[index].fill === 'string' ? textArray[index].fill : '');
                setFontFamily(textArray[index].fontFamily!);
                setFontStyle(textArray[index].fontStyle!);
                setUnderline(textArray[index].underline === true ? 'yes' : 'no');
            });
        });
    }, [textArray]);

    const handleFontFamily = (value: string | null) => {
        console.log('from ff', selectedIndexRef.current);
        if (value) {
            setFontFamily(value);
            textArray[selectedIndexRef.current!].set('fontFamily', value!);
            textArray[selectedIndexRef.current!].canvas?.renderAll();
        }
    };
    const handleFontStyle = (value: string | null) => {
        let fs: FontStyleType = '';

        if (value === 'italic') {
            fs = 'italic';
        } else if (value === 'normal') {
            fs = 'normal';
        } else if (value === 'oblique') {
            fs = 'oblique';
        } else {
            fs = '';
        }

        if (fs) {
            setFontStyle(fs);
            textArray[selectedIndexRef.current!].set('fontStyle', fs);
            textArray[selectedIndexRef.current!].canvas?.renderAll();
        }
    };

    const fontWeightToWord = (weight: number): string => {
        if (weight <= 300) {
            return 'lighter';
        } else if (weight === 400) {
            return 'normal';
        } else if (weight >= 700) {
            return 'bold';
        } else {
            return 'normal';
        }
    };
    const handleAddText = () => {
        addText('New Text ');
    };
    const fontWeightToNumber = (weight: string): number => {
        switch (weight) {
            case 'lighter':
                return 200;
            case 'normal':
                return 400;
            case 'bold':
                return 700;
            case 'bolder':
                return 800;
            default:
                return 400;
        }
    };

    const handleUnderline = (value: string | null) => {
        setUnderline(value);

        if (value === 'yes') {
            textArray[selectedIndexRef.current!].set('underline', true);
            textArray[selectedIndexRef.current!].canvas?.renderAll();
        } else {
            textArray[selectedIndexRef.current!].set('underline', false);
            textArray[selectedIndexRef.current!].canvas?.renderAll();
        }
    };
    const handleTextColor = (value: string) => {
        setTextColor(value);
        textArray[selectedIndexRef.current!].set('fill', value!);
        textArray[selectedIndexRef.current!].canvas?.renderAll();
    };
    const handleAlignment = (value: string | null) => {
        setTextAllignment(value);
        textArray[selectedIndexRef.current!].set('textAlign', value!);
        textArray[selectedIndexRef.current!].canvas?.renderAll();
    };

    const handleFontWeight = (value: string | null) => {
        if (value) {
            setFontWeight(value);

            const numericFontWeight = fontWeightToNumber(value);

            textArray[selectedIndexRef.current!].set('fontWeight', numericFontWeight);
            textArray[selectedIndexRef.current!].canvas?.renderAll();
        }
    };

    const handleFontSize = (value: number) => {
        setFontSize(value);

        textArray[selectedIndexRef.current!].set('fontSize', value);
        textArray[selectedIndexRef.current!].canvas?.renderAll();
    };
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        textArray[selectedIndexRef.current!].set('text', e.target.value);
        textArray[selectedIndexRef.current!].canvas?.renderAll();
    };

    return (
        <div>
            <Flex direction={'row'} align={'center'} justify={'center'} mt={30}>
                <Button w="90%" onClick={handleAddText}>
                    Add Text
                </Button>
            </Flex>
            {!copy ? (
                <Text fw={600} fz={18} style={{ textAlign: 'center', marginTop: '1rem' }}>
                    Please select the text field
                </Text>
            ) : (
                <ScrollArea
                    style={{ height: 500, width: '100%' }}
                    className="pb-10"
                    scrollbarSize={2}
                    scrollHideDelay={300}
                >
                    <Flex direction={'column'} gap={30}>
                        <div className="flexed-container ">
                            <Text>Text</Text>
                            <Textarea
                                variant="filled"
                                placeholder="Text"
                                className="w-full"
                                value={text}
                                onChange={(e) => handleText(e)}
                            />
                        </div>

                        <div className="">
                            <Text>Font Size</Text>
                            <Slider
                                radius="xl"
                                min={1}
                                max={200}
                                value={fontSize}
                                onChange={handleFontSize}
                                step={1}
                                marks={[
                                    { value: 10, label: '0%' },
                                    { value: 100, label: '100%' },
                                ]}
                            />
                            <Text fz="h3" style={{ translate: '0px 24px' }}>
                                {fontSize}
                            </Text>
                        </div>
                        <div className="flexed-container ">
                            <Text>Alignment</Text>
                            <Select
                                label=""
                                className="w-full"
                                placeholder=""
                                value={textAllignment}
                                onChange={handleAlignment}
                                data={[
                                    { value: 'left', label: 'LEFT' },
                                    { value: 'center', label: 'CENTER' },
                                    { value: 'right', label: 'RIGHT' },
                                ]}
                            />
                        </div>
                        <div className="">
                            <Text>Font Weight</Text>
                            <Select
                                label=""
                                className="w-full"
                                placeholder=""
                                value={fontWeight}
                                onChange={handleFontWeight}
                                data={[
                                    { value: 'lighter', label: 'LIGHT' },
                                    { value: 'normal', label: 'NORMAL' },
                                    { value: 'bold', label: 'BOLD' },
                                    { value: 'bolder', label: 'BOLDER' },
                                ]}
                            />
                        </div>

                        <Radio.Group
                            name="favoriteFramework"
                            label="Underline"
                            value={underline}
                            onChange={handleUnderline}
                        >
                            <Flex direction={'row'} gap={20} py={8}>
                                <Radio value="yes" label="Yes" />
                                <Radio value="no" label="No" />
                            </Flex>
                        </Radio.Group>

                        <div className="flexed-container ">
                            <Text>Color Picker</Text>
                            <ColorInput value={textColor} onChange={handleTextColor} />
                        </div>
                        <div className="flexed-container ">
                            <Select
                                label="Font Style"
                                value={fontStyle}
                                onChange={handleFontStyle}
                                data={[
                                    { value: 'normal', label: 'NORMAL' },
                                    { value: 'italic', label: 'ITALIC' },
                                    { value: 'oblique', label: 'OBLIQUE' },
                                ]}
                            />
                        </div>

                        <Select
                            label="Font Family"
                            value={fontFamily}
                            onChange={handleFontFamily}
                            data={FONTFAMILIES.map((font) => ({ value: font, label: font }))}
                        />

                        <Button
                            variant="filled"
                            className=""
                            justify="center"
                            onClick={() => deleteText(selectedIndexRef.current!)}
                        >
                            Delete
                        </Button>
                    </Flex>
                </ScrollArea>
            )}
        </div>
    );
};

export default TextSection;
