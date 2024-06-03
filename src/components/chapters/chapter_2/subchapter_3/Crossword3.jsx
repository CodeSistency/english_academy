"use client"
import React from 'react'
import Crossword from '@jaredreisinger/react-crossword'

function Crossword3() {
    const data = {
        "across": {
          "1": {
            "clue": "acción de comer",
            "answer": "EAT",
            "row": 0,
            "col": 0
          },
          "4": {
            "clue": "acción de beber",
            "answer": "DRINK",
            "row": 2,
            "col": 0
          },
          "7": {
            "clue": "acción de dormir",
            "answer": "SLEEP",
            "row": 4,
            "col": 0
          }
        },
        "down": {
          "2": {
            "clue": "acción de ver",
            "answer": "SEE",
            "row": 0,
            "col": 2
          },
          "3": {
            "clue": "acción de oír",
            "answer": "HEAR",
            "row": 0,
            "col": 4
          },
          "5": {
            "clue": "acción de sentir",
            "answer": "FEEL",
            "row": 2,
            "col": 2
          },
          "6": {
            "clue": "acción de hablar",
            "answer": "TALK",
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