"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FoodCards() {
  const cards = [
    {
      id: 25,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Bread</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Pan</p></div>,
    },
    {
      id: 26,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Milk</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Leche</p></div>,
    },
    {
      id: 27,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Coffee</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Café</p></div>,
    },
    {
      id: 28,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Water</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Agua</p></div>,
    },
    {
      id: 29,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Apple</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Manzana</p></div>,
    },
    {
      id: 30,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Orange</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Naranja</p></div>,
    },
    {
      id: 31,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Chicken</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Pollo</p></div>,
    },
    {
      id: 32,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Rice</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Arroz</p></div>,
    },
    {
      id: 33,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Breakfast</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Desayuno</p></div>,
    },
    {
      id: 34,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Lunch</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Almuerzo</p></div>,
    },
    {
      id: 35,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Dinner</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Cena</p></div>,
    },
  ];


  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default FoodCards