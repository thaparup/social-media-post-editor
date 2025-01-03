import { Button, ColorInput, ColorPicker, Flex, ScrollArea, Select, Slider, Text, Textarea } from '@mantine/core'
import React from 'react'

const TextSection = () => {
    return (
        <div>
            <Flex direction={'row'} align={'center'} justify={'center'} mt={30}>

                <Button w='90%'>Add Text</Button>
            </Flex>
            <Text fw={600} fz={18} style={{ textAlign: 'center', marginTop: '1rem' }}>Please select the text field</Text>

            {/* <Text>Text</Text> */}



            <ScrollArea style={{ height: 500, width: '100%' }} className="pb-10" scrollbarSize={2} scrollHideDelay={300}>

                <Flex direction={'column'} gap={20}>
                    <div className='flexed-container '>
                        <Text>Text</Text >
                        <Textarea
                            defaultValue=''
                            variant="filled"
                            placeholder="Text"
                            className='w-full'
                        // onChange={handleText}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text>Alignment</Text >
                        <Select
                            label=""
                            className='w-full'
                            placeholder=''
                            // onChange={handleAlignment}
                            data={[
                                { value: 'left', label: 'LEFT' },
                                { value: 'center', label: 'CENTER' },
                                { value: 'right', label: 'RIGHT' },
                            ]}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text >Font Weight</Text >
                        <Select
                            label=""
                            className='w-full'
                            placeholder=''
                            // onChange={handleFontWeight}
                            data={[
                                { value: 'lighter', label: 'LIGHT' },
                                { value: 'normal', label: 'NORMAL' },
                                { value: 'bold', label: 'BOLD' },
                                { value: 'bolder', label: 'BOLDER' },
                            ]}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text >Font Size</Text >
                        <Slider
                            radius="xl"
                            min={10}
                            max={100}
                            // onChange={handleFontSize}
                            step={1}
                            // defaultValue={parseInt(moveableTarget?.target?.style.fontSize.split('px')[0])}
                            marks={[
                                { value: 10, label: "0%" },
                                { value: 100, label: "100%" },
                            ]}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text>Color Picker</Text >
                        <ColorInput />
                    </div>
                    <div className='flexed-container '>
                        <Text >Font Family</Text >
                        {/* <GoogleFonts target={moveableTarget.target} /> */}
                    </div>
                    <div className='flexed-container '>
                        <Button variant='filled' className='bg-red-500 w-full hover:bg-red-400'>Delete</Button>
                    </div>
                </Flex>
            </ScrollArea>





        </div>
    )
}

export default TextSection