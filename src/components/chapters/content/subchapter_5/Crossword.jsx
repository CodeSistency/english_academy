"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword5() {
  const data = {
    "across": {
      "1": {
        "clue": "Gato",
        "answer": "CAT",
        "row": 0,
        "col": 0
      },
      "4": {
        "clue": "Pájaro",
        "answer": "BIRD",
        "row": 2,
        "col": 0
      },
      "7": {
        "clue": "Vaca",
        "answer": "COW",
        "row": 4,
        "col": 0
      }
    },
    "down": {
      "2": {
        "clue": "Perro",
        "answer": "DOG",
        "row": 0,
        "col": 2
      },
      "3": {
        "clue": "Pez",
        "answer": "FISH",
        "row": 0,
        "col": 4
      },
      "5": {
        "clue": "Caballo",
        "answer": "HORSE",
        "row": 2,
        "col": 2
      },
      "6": {
        "clue": "León",
        "answer": "LION",
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

export default Crossword5
