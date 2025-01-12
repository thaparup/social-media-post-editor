'use client';

import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useRef,
    useState,
} from 'react';
import { fabric } from 'fabric';

interface CanvasContextType {
    textArray: fabric.Textbox[];
    setTextArray: Dispatch<SetStateAction<fabric.Textbox[]>>;
    addText: (text: string) => void;
    deleteText: (index: number) => void;
    fabricCanvasRef: React.MutableRefObject<fabric.Canvas | null>;
    filePath: string;
    setFilePath: Dispatch<SetStateAction<string>>;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [textArray, setTextArray] = useState<fabric.Textbox[]>([]);
    const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
    const [filePath, setFilePath] = useState<string>('')
    const addText = (text: string) => {
        const newText = new fabric.Textbox(text, {
            left: 50,
            top: 50,
            fontSize: 20,
            dirty: false
        });
        setTextArray((prevTextArray) => [...prevTextArray, newText]);
    };

    const deleteText = (index: number) => {
        const textToDelete = textArray[index];

        if (fabricCanvasRef.current) {
            fabricCanvasRef.current.remove(textToDelete);

            fabricCanvasRef.current.renderAll();
        }
    };

    return (
        <CanvasContext.Provider
            value={{ fabricCanvasRef, textArray, addText, setTextArray, deleteText, filePath, setFilePath }}
        >
            {children}
        </CanvasContext.Provider>
    );
};

export const useCanvas = () => {
    const context = useContext(CanvasContext);
    if (!context) {
        throw new Error('useCanvas must be used within a CanvasProvider');
    }
    return context;
};
