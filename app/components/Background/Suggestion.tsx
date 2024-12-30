import { suggestionColors } from '@/app/constants/SuggestionColors'
import { theme } from '@/theme'
import { ScrollArea, SimpleGrid, Text } from '@mantine/core'
import React from 'react'

const Suggestion = ({ degree }: { degree: number }) => {



    return (
        <div >
            <Text fz='lg' fw={700} mb={20} mt={20} >Suggestions</Text>

            <ScrollArea style={{ height: 300, width: "100%", marginRight: '0px' }} type="scroll"
                scrollbarSize={4}
                scrollHideDelay={200}>

                <SimpleGrid cols={5} spacing="md">
                    {suggestionColors.map(suggestion => (

                        <div style={{ height: '35px', width: '35px', background: `linear-gradient(${degree}deg, ${suggestion.points})`, borderRadius: '8px' }}></div>
                    ))}
                </SimpleGrid>
            </ScrollArea>
        </div>
    )
}

export default Suggestion