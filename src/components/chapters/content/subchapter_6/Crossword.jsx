"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword6() {
  const data = {
    "across": {
      "1": {
        "clue": "I ___ a teacher.",
        "answer": "AM",
        "row": 0,
        "col": 0
      },
      "4": {
        "clue": "They ___ students.",
        "answer": "ARE",
        "row": 2,
        "col": 0
      },
      "7": {
        "clue": "He ___ a doctor.",
        "answer": "IS",
        "row": 4,
        "col": 0
      }
    },
    "down": {
      "2": {
        "clue": "She ___ a nurse.",
        "answer": "IS",
        "row": 0,
        "col": 2
      },
      "3": {
        "clue": "We ___ happy.",
        "answer": "ARE",
        "row": 0,
        "col": 4
      },
      "5": {
        "clue": "You ___ welcome.",
        "answer": "ARE",
        "row": 2,
        "col": 2
      },
      "6": {
        "clue": "It ___ a cat.",
        "answer": "IS",
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

export default Crossword6

