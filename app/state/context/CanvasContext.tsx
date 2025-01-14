'use client';

import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
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
    bgImagePositionX: number,
    setBgImagePositionX: Dispatch<SetStateAction<number>>;
    bgImagePositionY: number,
    setBgImagePositionY: Dispatch<SetStateAction<number>>,
    bgImageRotationDegree: number,
    setBgImageRotationDegree: Dispatch<SetStateAction<number>>
    bgImageSkewX: number,
    setBgImageSkewX: Dispatch<SetStateAction<number>>
    bgImageSkewY: number,
    setBgImageSkewY: Dispatch<SetStateAction<number>>


}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [textArray, setTextArray] = useState<fabric.Textbox[]>([]);
    const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
    const [bgImagePositionX, setBgImagePositionX] = useState<number>(0)
    const [bgImagePositionY, setBgImagePositionY] = useState<number>(0)
    const [filePath, setFilePath] = useState<string>('')
    const [bgImageRotationDegree, setBgImageRotationDegree] = useState<number>(0)
    const [bgImageSkewX, setBgImageSkewX] = useState<number>(0)
    const [bgImageSkewY, setBgImageSkewY] = useState<number>(0)



    useEffect(() => {
        setBgImagePositionX(0);
        setBgImagePositionY(0);
        setFilePath('');
        setBgImageRotationDegree(0)
        setBgImageSkewX(0)
        setBgImageSkewY(0)
    }, []);
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
            value={{ fabricCanvasRef, textArray, addText, setTextArray, deleteText, filePath, setFilePath, bgImagePositionX, setBgImagePositionX, bgImagePositionY, setBgImagePositionY, bgImageRotationDegree, setBgImageRotationDegree, bgImageSkewX, setBgImageSkewX, bgImageSkewY, setBgImageSkewY }}
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
