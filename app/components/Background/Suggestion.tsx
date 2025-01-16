import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollArea, SimpleGrid, Text } from '@mantine/core';
import { suggestionColors } from '@/app/constants/SuggestionColors';
import { setCanvasBgColor } from '@/app/state/store/Slicer/CanvasSlicer';
import classes from './Background.module.css';

type SuggestionProps = {
    degree: number;
    setFirstColor: Dispatch<SetStateAction<string>>;
    setSecondColor: Dispatch<SetStateAction<string>>;
    setThirdColor: Dispatch<SetStateAction<string>>;
    setAddThirdColor: Dispatch<SetStateAction<boolean>>;
};
const Suggestion = ({
    degree,
    setFirstColor,
    setThirdColor,
    setSecondColor,
    setAddThirdColor,
}: SuggestionProps) => {
    const dispatch = useDispatch();

    return (
        <div>
            <Text className={classes.suggestionTitle}>Suggestions</Text>

            <ScrollArea
                style={{ height: 300, width: '100%', marginRight: '0px' }}
                type="scroll"
                scrollbarSize={4}
                scrollHideDelay={200}
            >
                <SimpleGrid cols={5} spacing="md">
                    {suggestionColors.map((suggestion, index) => (
                        <div
                            key={index}
                            style={{
                                height: '35px',
                                width: '35px',
                                background: `linear-gradient(${degree}deg, ${suggestion.points})`,
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                dispatch(setCanvasBgColor(`linear-gradient(${degree}deg, ${suggestion.points})`));
                                if (suggestion.points.length == 2) {
                                    setFirstColor(suggestion.points[0]);
                                    setSecondColor(suggestion.points[1]);
                                    setAddThirdColor(false);
                                } else {
                                    setFirstColor(suggestion.points[0]);
                                    setSecondColor(suggestion.points[1]);
                                    setThirdColor(suggestion.points[2]);
                                    setAddThirdColor(true);
                                }
                            }}
                        />
                    ))}
                </SimpleGrid>
            </ScrollArea>
        </div>
    );
};

export default Suggestion;
