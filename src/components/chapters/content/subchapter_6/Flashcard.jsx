"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FlashCard6() {
  const cards = [
    {
      id: 1,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>I am</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Yo soy</p></div>,
    },
    {
      id: 2,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl'><p>You are</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Tú eres</p></div>,
    },
    {
      id: 3,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>He is</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Él es</p></div>,
    },
    {
      id: 4,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>She is</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ella es</p></div>,
    },
    {
      id: 5,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>It is</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Eso es</p></div>,
    },
    {
      id: 6,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>We are</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Nosotros somos</p></div>,
    },
    {
      id: 7,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>You are (plural)</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ustedes son</p></div>,
    },
    {
      id: 8,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>They are</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ellos son</p></div>,
    }
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default FlashCard6
