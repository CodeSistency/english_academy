"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword2() {
    const data = {
        "across": {
          "1": {
            "clue": "acción de hacer",
            "answer": "DO",
            "row": 0,
            "col": 0
          },
          "4": {
            "clue": "acción de ir",
            "answer": "GO",
            "row": 2,
            "col": 0
          },
          "7": {
            "clue": "acción de venir",
            "answer": "COME",
            "row": 4,
            "col": 0
          }
        },
        "down": {
          "2": {
            "clue": "acción de tener",
            "answer": "HAVE",
            "row": 0,
            "col": 2
          },
          "3": {
            "clue": "acción de decir",
            "answer": "SAY",
            "row": 0,
            "col": 4
          },
          "5": {
            "clue": "acción de conocer",
            "answer": "KNOW",
            "row": 2,
            "col": 2
          },
          "6": {
            "clue": "acción de querer",
            "answer": "WANT",
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

export default Crossword2