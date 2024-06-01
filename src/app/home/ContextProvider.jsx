"use client"
import { useEffect, useState } from 'react';
import contextInstance from './Context';
const ContextProvider = ({children}) =>{

    const [selectedId, setSelectedId] = useState(null);

    let chapters = [
        {
            id: 1,
            title: "chapter 1",
            isFinished: false,
            sub_chapters: [
                {
                    id: 1.1,
                    title: "subchapter 1",
                    isFinished: false,
                }
            ]
        },
        {
            id: 2,
            title: "chapter 2",
            isFinished: false,
            sub_chapters: [
                {
                    id: 2.1,
                    title: "subchapter 2",
                }
            ]
        },
        {
            id: 3,
            title: "chapter 3",
            isFinished: false,
            sub_chapters: [
                {
                    id: 3.1,
                    title: "subchapter 3",
                    isActive: false
                }
            ]
        }
    ];

    const handleItemClick = (id) => {
        setSelectedId(id);
    };

    return (
       <contextInstance.Provider value={{
        chapters, selectedId, handleItemClick
       }}>
            {children}
       </contextInstance.Provider>
    )
}

export default ContextProvider;