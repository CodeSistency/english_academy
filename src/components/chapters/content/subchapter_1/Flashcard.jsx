"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FlashCard1() {
  const cards = [
    {
      id: 1,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Hello</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Hola</p></div>,
    },
    {
      id: 2,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl'><p>Goodbye</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Adiós</p></div>,
    },
    {
      id: 3,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Please</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Por favor</p></div>,
    },
    {
      id: 4,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Thank you</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Gracias</p></div>,
    },
    {
      id: 5,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>What's your name?</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>¿Cómo te llamas?</p></div>,
    },
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default FlashCard1
