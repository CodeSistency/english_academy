"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function HomeCards() {
  const cards = [
    {
      id: 47,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Kitchen</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Cocina</p></div>,
    },
    {
      id: 48,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Bathroom</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Baño</p></div>,
    },
    {
      id: 49,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Bedroom</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Dormitorio</p></div>,
    },
    {
      id: 50,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Living room</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Sala de estar</p></div>,
    },
    {
      id: 51,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Table</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Mesa</p></div>,
    },
    {
      id: 52,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Chair</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Silla</p></div>,
    },
    {
      id: 53,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Bed</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Cama</p></div>,
    },
    {
      id: 54,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Sofa</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Sofá</p></div>,
    },
    {
      id: 55,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Refrigerator</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Refrigerador</p></div>,
    },
    {
      id: 56,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Oven</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Horno</p></div>,
    },
    {
      id: 57,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium '><p>Washing machine</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Lavadora</p></div>,
    },
  ];


  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default HomeCards