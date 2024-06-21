"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function BodyCards() {
  const cards = [
    {
      id: 12,
      frontHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium'><p>Head</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center  text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white '><p>Cabeza</p></div>,
    },
    {
      id: 13,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Arm</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Brazo</p></div>,
    },
    {
      id: 14,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Leg</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Pierna</p></div>,
    },
    {
      id: 15,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Hand</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Mano</p></div>,
    },
    {
      id: 16,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Foot</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Pie</p></div>,
    },
    {
      id: 17,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Eye</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ojo</p></div>,
    },
    {
      id: 18,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Ear</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Oreja</p></div>,
    },
    {
      id: 19,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Mouth</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Boca</p></div>,
    },
    {
      id: 20,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Nose</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Nariz</p></div>,
    },
    {
      id: 21,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Headache</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Dolor de cabeza</p></div>,
    },
    {
      id: 22,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Cold</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Resfriado</p></div>,
    },
    {
      id: 23,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Flu</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Gripe</p></div>,
    },
    {
      id: 24,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Fever</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Fiebre</p></div>,
    },
  ];


  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default BodyCards