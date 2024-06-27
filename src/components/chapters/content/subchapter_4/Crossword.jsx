"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword4() {
  const data = {
    "across": {
      "1": {
        "clue": "Rojo",
        "answer": "RED",
        "row": 0,
        "col": 0
      },
      "4": {
        "clue": "Verde",
        "answer": "GREEN",
        "row": 2,
        "col": 0
      },
      "7": {
        "clue": "Amarillo",
        "answer": "YELLOW",
        "row": 4,
        "col": 0
      }
    },
    "down": {
      "2": {
        "clue": "Azul",
        "answer": "BLUE",
        "row": 0,
        "col": 2
      },
      "3": {
        "clue": "Negro",
        "answer": "BLACK",
        "row": 0,
        "col": 4
      },
      "5": {
        "clue": "Blanco",
        "answer": "WHITE",
        "row": 2,
        "col": 2
      },
      "6": {
        "clue": "Naranja",
        "answer": "ORANGE",
        "row": 2,
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

export default Crossword4
