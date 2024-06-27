"use client"
import React from 'react'
import Quiz from 'react-quiz-component'

function Quizz4() {
  const quizz = {
    "quizTitle": "Quiz sobre los Colores",
    "quizSynopsis": "Este quiz evalúa tu conocimiento sobre los colores en inglés.",
    "nrOfQuestions": "4",
    "questions": [
      {
        "question": "¿Cómo se dice 'Rojo' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Red",
          "Blue",
          "Green",
          "Yellow"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Rojo' en inglés es 'Red'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es el color 'Azul' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Red",
          "Blue",
          "Green",
          "Yellow"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "El color 'Azul' en inglés es 'Blue'.",
        "point": "20"
      },
      {
        "question": "¿Cómo se dice 'Verde' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Red",
          "Blue",
          "Green",
          "Yellow"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Verde' en inglés es 'Green'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es el color 'Amarillo' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Red",
          "Blue",
          "Green",
          "Yellow"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "El color 'Amarillo' en inglés es 'Yellow'.",
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

export default Quizz4
