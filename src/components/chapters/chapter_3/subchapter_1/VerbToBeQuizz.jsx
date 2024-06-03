"use client"
import React from 'react'
import Quiz from 'react-quiz-component';


function VerbToBeQuizz() {
    const quizz = {
        "quizTitle": "Quiz sobre el Verbo To Be",
        "quizSynopsis": "Este quiz evalúa tu conocimiento sobre el verbo 'to be' y conceptos relacionados.",
        "nrOfQuestions": "4",
        "questions": [
          {
            "question": "¿Cuál es la forma afirmativa del verbo 'to be' en presente simple para la tercera persona del singular (he/she/it)?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "is",
              "am",
              "are",
              "be"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
            "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
            "explanation": "La forma afirmativa del verbo 'to be' para la tercera persona del singular en presente simple es 'is'. Por ejemplo: He is happy.",
            "point": "20"
          },
          {
            "question": "¿Cuál es la forma negativa del verbo 'to be' en presente simple para la primera persona del singular (I)?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "isn't",
              "am not",
              "aren't",
              "be not"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
            "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
            "explanation": "La forma negativa del verbo 'to be' para la primera persona del singular en presente simple es 'am not'. Por ejemplo: I am not tired.",
            "point": "20"
          },
          {
            "question": "¿Cuál es la forma interrogativa del verbo 'to be' en pasado simple para la segunda persona del singular (you)?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Was",
              "Were",
              "Did",
              "Are"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
            "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
            "explanation": "La forma interrogativa del verbo 'to be' en pasado simple para la segunda persona del singular es 'Were'. Por ejemplo: Were you at home yesterday?",
            "point": "20"
          },
          {
            "question": "¿Cuál es la forma abreviada de la frase 'I am not'?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "I'mn't",
              "I'm not",
              "I'mn't",
              "I'm"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Bien hecho!",
            "messageForIncorrectAnswer": "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
            "explanation": "La forma abreviada de la frase 'I am not' es 'I'm not'. Por ejemplo: I'm not going to the party.",
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

export default VerbToBeQuizz