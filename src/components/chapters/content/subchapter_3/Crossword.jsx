"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword3() {
  const data = {
    "across": {
      "1": {
        "clue": "Lunes",
        "answer": "MONDAY",
        "row": 0,
        "col": 0
      },
      "4": {
        "clue": "Miércoles",
        "answer": "WEDNESDAY",
        "row": 2,
        "col": 0
      },
      "7": {
        "clue": "Viernes",
        "answer": "FRIDAY",
        "row": 4,
        "col": 0
      }
    },
    "down": {
      "2": {
        "clue": "Martes",
        "answer": "TUESDAY",
        "row": 0,
        "col": 2
      },
      "3": {
        "clue": "Jueves",
        "answer": "THURSDAY",
        "row": 0,
        "col": 4
      },
      "5": {
        "clue": "Sábado",
        "answer": "SATURDAY",
        "row": 2,
        "col": 2
      },
      "6": {
        "clue": "Domingo",
        "answer": "SUNDAY",
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

export default Crossword3
