import { useAppSelector } from '@/app/lib/hooks';
import { RootState } from '@/app/state/store/store';
import React from 'react'

const ResolutionPreview = () => {
    const canvasState = useAppSelector((state: RootState) => state.Canvas);

    return (
        <div style={{ width: '50%' }}>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                aspectRatio: `${canvasState.exportWidth}/${canvasState.exportHeight}`, backgroundColor: "#f76707", borderRadius: '8px'
            }}>
                <h1 style={{ textAlign: 'center', }}>Preview</h1>
            </div>
        </div>
    )
}

export default ResolutionPreview