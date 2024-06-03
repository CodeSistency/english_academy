"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function RoutineCards() {
    const cards = [
        {
          id: 36,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>wake up</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>despertarse</p></div>,
        },
        {
          id: 37,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>have breakfast</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>desayunar</p></div>,
        },
        {
          id: 38,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>go to work</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>ir al trabajo</p></div>,
        },
        {
          id: 39,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>eat lunch</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>almorzar</p></div>,
        },
        {
          id: 40,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>come home</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>volver a casa</p></div>,
        },
        {
          id: 41,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>have dinner</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>cenar</p></div>,
        },
        {
          id: 42,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>watch TV</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>ver televisión</p></div>,
        },
        {
          id: 43,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>read</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>leer</p></div>,
        },
        {
          id: 44,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>go to bed</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>irse a la cama</p></div>,
        },
        {
          id: 45,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>brush teeth</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>cepillarse los dientes</p></div>,
        },
        {
          id: 46,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>take a shower</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>ducharse</p></div>,
        },
      ];
      
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <FlashcardArray cards={cards} />
    </div>
  )
}

export default RoutineCards