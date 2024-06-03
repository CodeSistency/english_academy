"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FamilyCards() {
    const cards = [
        {
          id: 1,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>mother</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>madre</p></div>,
        },
        {
          id: 2,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>father</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>padre</p></div>,
        },
        {
          id: 3,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>brother</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>hermano</p></div>,
        },
        {
          id: 4,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>sister</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>hermana</p></div>,
        },
        {
          id: 5,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>friend</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>amigo/amiga</p></div>,
        },
        {
          id: 6,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>neighbor</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>vecino/vecina</p></div>,
        },
        {
          id: 7,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>uncle</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>tío</p></div>,
        },
        {
          id: 8,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>aunt</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>tía</p></div>,
        },
        {
          id: 9,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>cousin</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>primo/prima</p></div>,
        },
        {
          id: 10,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>grandfather</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>abuelo</p></div>,
        },
        {
          id: 11,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>grandmother</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>abuela</p></div>,
        },
      ];
      
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <FlashcardArray cards={cards} />
    </div>
  )
}

export default FamilyCards