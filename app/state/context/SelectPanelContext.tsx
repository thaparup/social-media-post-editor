'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type SelectPanelContext = {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
};
export const SelectPanelContext = createContext<SelectPanelContext | null>(null);

export const SelectPanelContextProvider = ({ children }: { children: ReactNode }) => {
    const [selected, setSelected] = useState('Background');

    return (
        <SelectPanelContext.Provider value={{ selected, setSelected }}>
            {children}
        </SelectPanelContext.Provider>
    );
};

export const useSelectPanelContext = () => {
    const context = useContext(SelectPanelContext);

    if (!context) {
        throw new Error('useSelectPanelContext  must be used within a SelectPanelContextProvider');
    }
    return context;
};
