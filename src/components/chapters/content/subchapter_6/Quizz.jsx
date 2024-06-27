"use client"
import React from 'react'
import Quiz from 'react-quiz-component'

function Quizz6() {
  const quizz = {
    "quizTitle": "Quiz sobre el Verbo To Be",
    "quizSynopsis": "Este quiz evalúa tu conocimiento sobre el verbo To Be en inglés.",
    "nrOfQuestions": "4",
    "questions": [
      {
        "question": "¿Cómo se dice 'Yo soy' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "I am",
          "You are",
          "He is",
          "She is"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Yo soy' en inglés es 'I am'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es la forma correcta para 'Tú eres' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "I am",
          "You are",
          "He is",
          "She is"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La forma correcta para 'Tú eres' en inglés es 'You are'.",
        "point": "20"
      },
      {
        "question": "¿Cómo se dice 'Él es' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "I am",
          "You are",
          "He is",
          "She is"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Él es' en inglés es 'He is'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es la forma correcta para 'Nosotros somos' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "I am",
          "You are",
          "He is",
          "We are"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La forma correcta para 'Nosotros somos' en inglés es 'We are'.",
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

export default Quizz6
