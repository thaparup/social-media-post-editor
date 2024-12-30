'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type BackgroundPanelContext = {
    background: string;
    setBackground: Dispatch<SetStateAction<string>>;
};
export const BackgroundPanelContext = createContext<BackgroundPanelContext | null>(null);

export const BackgroundPanelContextProvider = ({ children }: { children: ReactNode }) => {
    const [background, setBackground] = useState('Solid');

    return (
        <BackgroundPanelContext.Provider value={{ background, setBackground }}>
            {children}
        </BackgroundPanelContext.Provider>
    );
};

export const useBackgroundPanelContext = () => {
    const context = useContext(BackgroundPanelContext);

    if (!context) {
        throw new Error('useBackgroundPanelContext  must be used within a BackgroundPanelContextProvider');
    }
    return context;
};
