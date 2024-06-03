"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function HomeCards() {
    const cards = [
        {
          id: 47,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>kitchen</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>cocina</p></div>,
        },
        {
          id: 48,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>bathroom</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>baño</p></div>,
        },
        {
          id: 49,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>bedroom</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>dormitorio</p></div>,
        },
        {
          id: 50,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>living room</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>sala de estar</p></div>,
        },
        {
          id: 51,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>table</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>mesa</p></div>,
        },
        {
          id: 52,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>chair</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>silla</p></div>,
        },
        {
          id: 53,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>bed</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>cama</p></div>,
        },
        {
          id: 54,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>sofa</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>sofá</p></div>,
        },
        {
          id: 55,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>refrigerator</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>refrigerador</p></div>,
        },
        {
          id: 56,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>oven</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>horno</p></div>,
        },
        {
          id: 57,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>washing machine</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>lavadora</p></div>,
        },
      ];
      
      
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <FlashcardArray cards={cards} />
    </div>
  )
}

export default HomeCards