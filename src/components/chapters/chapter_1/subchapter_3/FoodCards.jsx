"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FoodCards() {
    const cards = [
        {
          id: 25,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>bread</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>pan</p></div>,
        },
        {
          id: 26,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>milk</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>leche</p></div>,
        },
        {
          id: 27,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>coffee</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>café</p></div>,
        },
        {
          id: 28,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>water</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>agua</p></div>,
        },
        {
          id: 29,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>apple</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>manzana</p></div>,
        },
        {
          id: 30,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>orange</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>naranja</p></div>,
        },
        {
          id: 31,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>chicken</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>pollo</p></div>,
        },
        {
          id: 32,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>rice</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>arroz</p></div>,
        },
        {
          id: 33,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>breakfast</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>desayuno</p></div>,
        },
        {
          id: 34,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>lunch</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>almuerzo</p></div>,
        },
        {
          id: 35,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>dinner</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>cena</p></div>,
        },
      ];
      
      
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <FlashcardArray cards={cards} />
    </div>
  )
}

export default FoodCards