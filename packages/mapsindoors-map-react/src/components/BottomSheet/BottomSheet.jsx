import React from "react";
import { useState, useRef } from 'react';
import './BottomSheet.css';
import Sheet from 'react-modal-sheet';

function BottomSheet() {
    const [activeBottomSheetIndex, setActiveBottomSheetIndex] = useState();

    const snapPoints = [-10, 0.5, 0.2];
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();
    const snapTo = (index) => {
        firstRef.current?.snapTo(index)
        secondRef.current?.snapTo(index)
        thirdRef.current?.snapTo(index)
        fourthRef.current?.snapTo(index)
    };

    const bottomSheets = [
        <Sheet
            className={activeBottomSheetIndex === 0 ? "active" : ""}
            isOpen={true}
            ref={firstRef}
            key='first'
            onClose={() => snapTo(2)}
            snapPoints={snapPoints}
            initialSnap={2}>
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <div style={{ display: 'grid', gap: 10, margin: 20 }}>
                        <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr min-content', alignItems: 'center' }}>
                            <h3 style={{ justifySelf: 'center' }}>This the main screen</h3>
                            <div style={{ width: 'fit-content', justifySelf: 'end', cursor: 'pointer' }} onClick={() => snapTo(2)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6L18 18" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 6L6 18" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <button style={{ width: 'fit-content' }} onClick={() => { setActiveBottomSheetIndex(1); }}>
                            Navigate to details screen
                        </button>
                        {/* <mi-search></mi-search> */}
                    </div>
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>,
        <Sheet
            className={activeBottomSheetIndex === 1 ? "active" : ""}
            ref={secondRef}
            isOpen={activeBottomSheetIndex === 1}
            key='second'
            onClose={() => snapTo(2)}
            snapPoints={snapPoints}
            initialSnap={1}>
            <Sheet.Container>
                <Sheet.Header></Sheet.Header>
                <Sheet.Content>
                    <div style={{ display: 'grid', gap: 10, margin: 20 }}>
                        <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: 'min-content 1fr', alignItems: 'center' }}>
                            <div style={{ width: 'fit-content', justifySelf: 'start', cursor: 'pointer' }} onClick={() => setActiveBottomSheetIndex(0)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12.2743L19.25 12.2743" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 style={{ justifySelf: 'center' }}>This is the details screen</h3>
                        </div>
                        <button style={{ width: 'fit-content' }} onClick={() => { setActiveBottomSheetIndex(2) }}>
                            Navigate to the to/from screen
                        </button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>,
        <Sheet
            className={activeBottomSheetIndex === 2 ? "active" : ""}
            ref={thirdRef}
            isOpen={activeBottomSheetIndex === 2}
            key='third'
            onClose={() => snapTo(2)}
            snapPoints={snapPoints}
            initialSnap={0}>
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <div style={{ display: 'grid', gap: 10, margin: 20 }}>
                        <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: 'min-content 1fr', alignItems: 'center' }}>
                            <div style={{ width: 'fit-content', justifySelf: 'start', cursor: 'pointer' }} onClick={() => setActiveBottomSheetIndex(1)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12.2743L19.25 12.2743" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 style={{ justifySelf: 'center' }}>This is the to/from screen</h3>
                        </div>
                        <button style={{ width: 'fit-content' }} onClick={() => { setActiveBottomSheetIndex(3) }}>
                            Navigate to directions screen
                        </button>
                    </div>
                    {/* <div style={{ display: 'grid', gap: 10, margin: 20 }}>
                        <button onClick={() => snapTo(0)}>Snap to index 0</button>
                        <button onClick={() => snapTo(1)}>Snap to index 1</button>
                        <button onClick={() => snapTo(2)}>Snap to index 2</button>
                    </div> */}
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>,
        <Sheet
            className={activeBottomSheetIndex === 3 ? "active" : ""}
            ref={fourthRef}
            isOpen={activeBottomSheetIndex === 3}
            key='fourth'
            onClose={() => snapTo(2)}
            snapPoints={snapPoints}
            initialSnap={1}>
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <div style={{ display: 'grid', gap: 10, margin: 20 }}>
                        <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: 'min-content 1fr', alignItems: 'center' }}>
                            <div style={{ width: 'fit-content', justifySelf: 'start', cursor: 'pointer' }} onClick={() => setActiveBottomSheetIndex(2)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12.2743L19.25 12.2743" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 style={{ justifySelf: 'center' }}>This is the directions screen</h3>
                        </div>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>
    ]
    return (
        <>
            {/* <button onClick={() => { setActiveBottomSheetIndex(0); }}>
                Open bottom sheet
            </button> */}
            <div> {bottomSheets.map((bottomSheet) => (bottomSheet))} </div>
        </>
    )
}

export default BottomSheet;