"use client"
import React from 'react'
import Quiz from 'react-quiz-component'

function Quizz1() {
  const quizz = {
    "quizTitle": "Quiz sobre Saludos Básicos y Presentaciones",
    "quizSynopsis": "Este quiz evalúa tu conocimiento sobre los saludos básicos y presentaciones en inglés.",
    "nrOfQuestions": "4",
    "questions": [
      {
        "question": "¿Cómo se dice 'Hola' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Goodbye",
          "Hello",
          "Please",
          "Thank you"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Hola' en inglés es 'Hello'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es la palabra en inglés para 'Adiós'?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Hello",
          "Goodbye",
          "Please",
          "Thank you"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Adiós' en inglés es 'Goodbye'.",
        "point": "20"
      },
      {
        "question": "¿Cómo se dice 'Gracias' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Please",
          "Thank you",
          "Hello",
          "Goodbye"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Gracias' en inglés es 'Thank you'.",
        "point": "20"
      },
      {
        "question": "¿Cómo se dice 'Por favor' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Thank you",
          "Hello",
          "Please",
          "Goodbye"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Por favor' en inglés es 'Please'.",
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

export default Quizz1
