'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const [mounted, setMounted] = useState(false)

    // Only show the UI after first render on the client
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div>Loading...</div> // Optional loading placeholder
    }

    return (
        <ActionIcon onClick={toggleColorScheme} mr={24}>
            {colorScheme === 'dark' ? <IconSun /> : <IconMoon />}
        </ActionIcon>
    )
}

export default ThemeSwitcher
