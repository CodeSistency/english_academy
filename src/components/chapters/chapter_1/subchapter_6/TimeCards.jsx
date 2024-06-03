"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function TimeCards() {
    const cards = [
        {
          id: 58,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>Monday</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>lunes</p></div>,
        },
        {
          id: 59,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>Tuesday</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>martes</p></div>,
        },
        {
          id: 60,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>Wednesday</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>miércoles</p></div>,
        },
        {
          id: 61,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>Thursday</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>jueves</p></div>,
        },
        {
          id: 62,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>Friday</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>viernes</p></div>,
        },
        {
          id: 63,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>Saturday</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>sábado</p></div>,
        },
        {
          id: 64,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>Sunday</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>domingo</p></div>,
        },
        {
          id: 65,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>January</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>enero</p></div>,
        },
        {
          id: 66,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>February</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>febrero</p></div>,
        },
        {
          id: 67,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>March</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>marzo</p></div>,
        },
        {
          id: 68,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>April</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>abril</p></div>,
        },
        {
          id: 69,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>May</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>mayo</p></div>,
        },
        {
          id: 70,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>June</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>junio</p></div>,
        },
        {
          id: 71,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>July</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>julio</p></div>,
        },
        {
          id: 72,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>August</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>agosto</p></div>,
        },
        {
          id: 73,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>September</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>septiembre</p></div>,
        },
        {
          id: 74,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>October</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>octubre</p></div>,
        },
        {
          id: 75,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>November</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>noviembre</p></div>,
        },
        {
          id: 76,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>December</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>diciembre</p></div>,
        },
        {
          id: 77,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>spring</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>primavera</p></div>,
        },
        {
          id: 78,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>summer</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>verano</p></div>,
        },
        {
          id: 79,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>fall</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>otoño</p></div>,
        },
        {
          id: 80,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>winter</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>invierno</p></div>,
        },
        {
          id: 81,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>sunny</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>soleado</p></div>,
        },
        {
          id: 82,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>rainy</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>lluvioso</p></div>,
        },
        {
          id: 83,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>cold</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>frío</p></div>,
        },
        {
          id: 84,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>hot</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>caliente</p></div>,
        },
      ];      
      
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <FlashcardArray cards={cards} />
    </div>
  )
}

export default TimeCards