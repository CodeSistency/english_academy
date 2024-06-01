import React, { useContext } from 'react'
import contextInstance from './Context';

function HomeContent() {
    const {selectedId} = useContext(contextInstance);

    switch (selectedId) {
        case 1:
            return <div>Content for Chapter 1</div>;
        case 1.1:
            return <div>Content for Subchapter 1.1</div>;
        case 2:
            return <div>Content for Chapter 2</div>;
        case 2.1:
            return <div>Content for Subchapter 2.1</div>;
        case 3:
            return <div>Content for Chapter 3</div>;
        case 3.1:
            return <div>Content for Subchapter 3.1</div>;
        default:
            return <div>Select a chapter or subchapter</div>;
    }
}

export default HomeContent