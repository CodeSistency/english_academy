"use client"
import { useEffect, useState } from 'react';
import contextInstance from './Context';
const ContextProvider = ({children}) =>{

    const [selectedId, setSelectedId] = useState(null);

    let chapters = [
        {
            id: 1,
            title: "Vocabulario",
            isFinished: false,
            sub_chapters: [
                {
                    id: 1.1,
                    title: "Familia y Amigos",
                    isFinished: false,
                },
                {
                    id: 1.2,
                    title: "Partes del Cuerpo y Salud",
                    isFinished: false,
                },
                {
                    id: 1.3,
                    title: "Comida y Bebida",
                    isFinished: false,
                },
                {
                    id: 1.4,
                    title: "Vida Diaria y Rutinas",
                    isFinished: false,
                },
                {
                    id: 1.5,
                    title: "Hogar y Muebles",
                    isFinished: false,
                },
                {
                    id: 1.6,
                    title: "Tiempo, Clima y Estaciones",
                    isFinished: false,
                },
                {
                    id: 1.7,
                    title: "Viajes y Vacaciones",
                    isFinished: false,
                }
            ]
        },
        {
            id: 2,
            title: "Crucigramas",
            isFinished: false,
            sub_chapters: [
                {
                    id: 2.1,
                    title: "Ejercicio 1",
                    isFinished: false,
                },
                {
                    id: 2.2,
                    title: "Ejercicio 2",
                    isFinished: false,
                },
                {
                    id: 2.3,
                    title: "Ejercicio 3",
                    isFinished: false,
                }
            ]
        },
        {
            id: 3,
            title: "Quizz",
            isFinished: false,
            sub_chapters: [
                {
                    id: 3.1,
                    title: "Verbo To be",
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