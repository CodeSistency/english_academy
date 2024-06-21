"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FamilyCards() {
  const cards = [
    {
      id: 1,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Mother</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Madre</p></div>,
    },
    {
      id: 2,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl'><p>Father</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Padre</p></div>,
    },
    {
      id: 3,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Brother</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Hermano</p></div>,
    },
    {
      id: 4,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Sister</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Hermana</p></div>,
    },
    {
      id: 5,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Friend</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Amigo/Amiga</p></div>,
    },
    {
      id: 6,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Neighbor</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Vecino/Vecina</p></div>,
    },
    {
      id: 7,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Uncle</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Tío</p></div>,
    },
    {
      id: 8,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Aunt</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Tía</p></div>,
    },
    {
      id: 9,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Cousin</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Primo/Prima</p></div>,
    },
    {
      id: 10,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Grandfather</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Abuelo</p></div>,
    },
    {
      id: 11,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Grandmother</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Abuela</p></div>,
    },
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default FamilyCards