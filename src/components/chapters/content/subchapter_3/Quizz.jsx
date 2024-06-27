"use client"
import React from 'react'
import Quiz from 'react-quiz-component'

function Quizz3() {
  const quizz = {
    "quizTitle": "Quiz sobre los Días de la Semana",
    "quizSynopsis": "Este quiz evalúa tu conocimiento sobre los días de la semana en inglés.",
    "nrOfQuestions": "4",
    "questions": [
      {
        "question": "¿Cómo se dice 'Lunes' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Lunes' en inglés es 'Monday'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es el día 'Domingo' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "El día 'Domingo' en inglés es 'Sunday'.",
        "point": "20"
      },
      {
        "question": "¿Cómo se dice 'Miércoles' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Miércoles' en inglés es 'Wednesday'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es el día 'Viernes' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "El día 'Viernes' en inglés es 'Friday'.",
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

export default Quizz3
