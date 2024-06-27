"use client"
import React from 'react'
import Quiz from 'react-quiz-component'

function Quizz5() {
  const quizz = {
    "quizTitle": "Quiz sobre los Animales",
    "quizSynopsis": "Este quiz evalúa tu conocimiento sobre los animales en inglés.",
    "nrOfQuestions": "4",
    "questions": [
      {
        "question": "¿Cómo se dice 'Gato' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Cat",
          "Dog",
          "Bird",
          "Fish"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Gato' en inglés es 'Cat'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es el animal 'Perro' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Cat",
          "Dog",
          "Bird",
          "Fish"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "El animal 'Perro' en inglés es 'Dog'.",
        "point": "20"
      },
      {
        "question": "¿Cómo se dice 'Pájaro' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Cat",
          "Dog",
          "Bird",
          "Fish"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "La traducción de 'Pájaro' en inglés es 'Bird'.",
        "point": "20"
      },
      {
        "question": "¿Cuál es el animal 'Pez' en inglés?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Cat",
          "Dog",
          "Bird",
          "Fish"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
        "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
        "explanation": "El animal 'Pez' en inglés es 'Fish'.",
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

export default Quizz5
