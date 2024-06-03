"use client"
import Crossword from '@jaredreisinger/react-crossword'
import React from 'react'

function Crossword1() {
    const data = {
        "across": {
          "1": {
            "clue": "acción de caminar",
            "answer": "WALK",
            "row": 0,
            "col": 0
          },
          "4": {
            "clue": "acción de correr",
            "answer": "RUN",
            "row": 2,
            "col": 0
          },
          "7": {
            "clue": "acción de nadar",
            "answer": "SWIM",
            "row": 4,
            "col": 0
          }
        },
        "down": {
          "2": {
            "clue": "acción de leer",
            "answer": "READ",
            "row": 0,
            "col": 2
          },
          "3": {
            "clue": "acción de escribir",
            "answer": "WRITE",
            "row": 0,
            "col": 4
          },
          "5": {
            "clue": "acción de hablar",
            "answer": "SPEAK",
            "row": 2,
            "col": 2
          },
          "6": {
            "clue": "acción de escuchar",
            "answer": "LISTEN",
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

export default Crossword1