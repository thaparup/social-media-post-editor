'use client'

import { Text } from '@mantine/core'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import classes from './Header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <Text size='lg' fw={600} pl={24}>Social Media Post Editor</Text>
            <ThemeSwitcher />

        </header>
    )
}

export default Header