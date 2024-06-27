"use client"
import React from 'react'
import Quiz from 'react-quiz-component'

function Quizz2() {
  const quizz = {
    "quizTitle": "Quiz sobre Números y Alfabeto",
    "quizSynopsis": "Este quiz evalúa tu conocimiento sobre los números y el alfabeto en inglés.",
    "nrOfQuestions": "4",
    "questions": [
      {
        "question": "¿Cómo se dice '1' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Two",
          "Three",
          "One",
          "Four"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de '1' en inglés es 'One'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es la letra 'B' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A",
          "C",
          "B",
          "D"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La letra 'B' en inglés es 'B'.",
        "point": "20"
      },
      {
        "question": "¿Cómo se dice '2' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Two",
          "Three",
          "One",
          "Four"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de '2' en inglés es 'Two'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es la letra 'D' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A",
          "D",
          "B",
          "C"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La letra 'D' en inglés es 'D'.",
        "point": "20"
      }
    ]
  }

  return (
    <div className='h-full w-full flex justify-center items-center'>
        <Quiz quiz={quizz}/>
    </div>
  )
}

export default Quizz2
