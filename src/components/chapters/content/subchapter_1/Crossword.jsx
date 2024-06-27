"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword1() {
  const data = {
    "across": {
      "1": {
        "clue": "Hola",
        "answer": "HELLO",
        "row": 0,
        "col": 0
      },
      "4": {
        "clue": "Adiós",
        "answer": "GOODBYE",
        "row": 2,
        "col": 0
      }
    },
    "down": {
      "2": {
        "clue": "Por favor",
        "answer": "PLEASE",
        "row": 0,
        "col": 2
      },
      "3": {
        "clue": "Gracias",
        "answer": "THANKYOU",
        "row": 0,
        "col": 4
      }
    }
  }

  return (
    <div className='h-full w-full flex justify-center items-center'>
        <div className='h-[500px]'>
            <Crossword data={data} />
        </div>
    </div>
  )
}

export default Crossword1
