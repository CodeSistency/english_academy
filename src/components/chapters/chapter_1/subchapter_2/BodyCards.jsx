"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function BodyCards() {
    const cards = [
        {
          id: 12,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>head</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>cabeza</p></div>,
        },
        {
          id: 13,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>arm</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>brazo</p></div>,
        },
        {
          id: 14,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>leg</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>pierna</p></div>,
        },
        {
          id: 15,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>hand</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>mano</p></div>,
        },
        {
          id: 16,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>foot</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>pie</p></div>,
        },
        {
          id: 17,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>eye</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>ojo</p></div>,
        },
        {
          id: 18,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>ear</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>oreja</p></div>,
        },
        {
          id: 19,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>mouth</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>boca</p></div>,
        },
        {
          id: 20,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>nose</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>nariz</p></div>,
        },
        {
          id: 21,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>headache</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>dolor de cabeza</p></div>,
        },
        {
          id: 22,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>cold</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>resfriado</p></div>,
        },
        {
          id: 23,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>flu</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>gripe</p></div>,
        },
        {
          id: 24,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>fever</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>fiebre</p></div>,
        },
      ];
      
      
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <FlashcardArray cards={cards} />
    </div>
  )
}

export default BodyCards