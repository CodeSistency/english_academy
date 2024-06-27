"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword2() {
  const data = {
    "across": {
      "1": {
        "clue": "1 en inglés",
        "answer": "ONE",
        "row": 0,
        "col": 0
      },
      "4": {
        "clue": "3 en inglés",
        "answer": "THREE",
        "row": 2,
        "col": 0
      },
      "7": {
        "clue": "A en el alfabeto",
        "answer": "A",
        "row": 4,
        "col": 0
      }
    },
    "down": {
      "2": {
        "clue": "2 en inglés",
        "answer": "TWO",
        "row": 0,
        "col": 2
      },
      "3": {
        "clue": "B en el alfabeto",
        "answer": "B",
        "row": 0,
        "col": 4
      },
      "5": {
        "clue": "D en el alfabeto",
        "answer": "D",
        "row": 2,
        "col": 2
      },
      "6": {
        "clue": "4 en inglés",
        "answer": "FOUR",
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
