'use client'

import { Text } from '@mantine/core'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import classes from './Header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <Text className={classes.title}>Social Media Post Editor</Text>
            <ThemeSwitcher />

        </header>
    )
}

export default Header