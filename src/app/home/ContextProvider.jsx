"use client"
import { useEffect, useState } from 'react';
import  useLocalStorage  from "../../utils/useLocalStorage"
import contextInstance from './Context';
const ContextProvider = ({ children }) => {

  const [selectedId, setSelectedId] = useState(null);

  // const chapters = [
  //   {
  //     id: 1,
  //     title: "Vocabulario",
  //     isFinished: false,
  //     sub_chapters: [
  //       {
  //         id: 1.1,
  //         title: "Familia y Amigos",
  //         isFinished: true,
  //       },
  //       {
  //         id: 1.2,
  //         title: "Partes del Cuerpo y Salud",
  //         isFinished: true,
  //       },
  //       {
  //         id: 1.3,
  //         title: "Comida y Bebida",
  //         isFinished: true,
  //       },
  //       {
  //         id: 1.4,
  //         title: "Vida Diaria y Rutinas",
  //         isFinished: true,
  //       },
  //       {
  //         id: 1.5,
  //         title: "Hogar y Muebles",
  //         isFinished: true,
  //       },
  //       {
  //         id: 1.6,
  //         title: "Tiempo, Clima y Estaciones",
  //         isFinished: true,
  //       },
  //       {
  //         id: 1.7,
  //         title: "Viajes y Vacaciones",
  //         isFinished: true,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Crucigramas",
  //     isFinished: false,
  //     sub_chapters: [
  //       {
  //         id: 2.1,
  //         title: "Ejercicio 1",
  //         isFinished: false,
  //       },
  //       {
  //         id: 2.2,
  //         title: "Ejercicio 2",
  //         isFinished: false,
  //       },
  //       {
  //         id: 2.3,
  //         title: "Ejercicio 3",
  //         isFinished: false,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Quizz",
  //     isFinished: false,
  //     sub_chapters: [
  //       {
  //         id: 3.1,
  //         title: "Verbo To be",
  //         isActive: false,
  //       },
  //     ],
  //   },
  // ];

  const initialChapters = [
    {
      id: 1,
      title: "Saludos Básicos y Presentaciones",
      isFinished: false,
      sub_chapters: [
        {
          id: 1.1,
          title: "Video: Aprender saludos básicos en inglés",
          isFinished: false,
        },
        {
          id: 1.2,
          title: "Flashcards: Hello, Goodbye, Please, Thank you, What's your name?",
          isFinished: false,
        },
        {
          id: 1.3,
          title: "Crucigrama: Saludos básicos",
          isFinished: false,
        },
        {
          id: 1.4,
          title: "Quiz: Saludos y Presentaciones",
          isFinished: false,
        }
      ],
    },
    {
      id: 2,
      title: "Números y Alfabeto",
      isFinished: false,
      sub_chapters: [
        {
          id: 2.1,
          title: "Video: Aprender el alfabeto y números en inglés",
          isFinished: false,
        },
        {
          id: 2.2,
          title: "Flashcards: Numbers 1-20, A-Z alphabet",
          isFinished: false,
        },
        {
          id: 2.3,
          title: "Crucigrama: Números y Alfabeto",
          isFinished: false,
        },
        {
          id: 2.4,
          title: "Quiz: Números y Alfabeto",
          isFinished: false,
        }
      ],
    },
    {
      id: 3,
      title: "Familia y Amigos",
      isFinished: false,
      sub_chapters: [
        {
          id: 3.1,
          title: "Video: Vocabulario de Familia y Amigos",
          isFinished: false,
        },
        {
          id: 3.2,
          title: "Flashcards: Mother, Father, Brother, Sister, Friend",
          isFinished: false,
        },
        {
          id: 3.3,
          title: "Crucigrama: Miembros de la Familia",
          isFinished: false,
        },
        {
          id: 3.4,
          title: "Quiz: Familia y Amigos",
          isFinished: false,
        }
      ],
    },
    {
      id: 4,
      title: "Rutinas Diarias",
      isFinished: false,
      sub_chapters: [
        {
          id: 4.1,
          title: "Video: Rutinas Diarias en Inglés",
          isFinished: false,
        },
        {
          id: 4.2,
          title: "Flashcards: Wake up, Eat breakfast, Go to work, Have lunch, Go to bed",
          isFinished: false,
        },
        {
          id: 4.3,
          title: "Crucigrama: Rutinas Diarias",
          isFinished: false,
        },
        {
          id: 4.4,
          title: "Quiz: Rutinas Diarias",
          isFinished: false,
        }
      ],
    },
    {
      id: 5,
      title: "Comida y Bebida",
      isFinished: false,
      sub_chapters: [
        {
          id: 5.1,
          title: "Video: Vocabulario de Comida y Bebida en Inglés",
          isFinished: false,
        },
        {
          id: 5.2,
          title: "Flashcards: Bread, Milk, Apple, Water, Coffee",
          isFinished: false,
        },
        {
          id: 5.3,
          title: "Crucigrama: Comida y Bebida",
          isFinished: false,
        },
        {
          id: 5.4,
          title: "Quiz: Comida y Bebida",
          isFinished: false,
        }
      ],
    },
    {
      id: 6,
      title: "El Verbo To Be",
      isFinished: false,
      sub_chapters: [
        {
          id: 6.1,
          title: "Video: Explicación del verbo To Be",
          isFinished: false,
        },
        {
          id: 6.2,
          title: "Flashcards: I am, You are, He is, She is, It is, We are, You are (plural), They are",
          isFinished: false,
        },
        {
          id: 6.3,
          title: "Crucigrama: El verbo To Be",
          isFinished: false,
        },
        {
          id: 6.4,
          title: "Quiz: El verbo To Be",
          isFinished: false,
        }
      ],
    }
  ];

  const [chapters, setChapters] = useLocalStorage('chapters', initialChapters);


  const toggleSubChapter = (chapterId, subChapterId) => {
    const updatedChapters = chapters.map(chapter => {
      if (chapter.id === chapterId) {
        const updatedSubChapters = chapter.sub_chapters.map(subChapter => {
          if (subChapter.id === subChapterId) {
            return { ...subChapter, isFinished: !subChapter.isFinished };
          }
          return subChapter;
        });

        const isChapterFinished = updatedSubChapters.every(subChapter => subChapter.isFinished);
        return { ...chapter, sub_chapters: updatedSubChapters, isFinished: isChapterFinished };
      }
      return chapter;
    });

    setChapters(updatedChapters);
  };

  const toggleChapter = (chapterId) => {
    const updatedChapters = chapters.map(chapter => {
      if (chapter.id === chapterId) {
        const updatedChapter = { ...chapter, isFinished: !chapter.isFinished };
        const updatedSubChapters = updatedChapter.sub_chapters.map(subChapter => ({
          ...subChapter,
          isFinished: updatedChapter.isFinished,
        }));
        return { ...updatedChapter, sub_chapters: updatedSubChapters };
      }
      return chapter;
    });

    setChapters(updatedChapters);
  };

  const handleItemFinishedClick = () => {
    // setSelectedId(id);

    // Automatically open subsequent chapters based on finished status
    const currentIndex = chapters.findIndex(chapter => chapter.id === selectedId);
    if (currentIndex > 0) {
      const previousChapter = chapters[currentIndex - 1];
      if (!previousChapter.isFinished) {
        toggleChapter(previousChapter.id);
      }
    }
  };

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <contextInstance.Provider value={{
      chapters, selectedId, setSelectedId, handleItemClick, toggleSubChapter, handleItemFinishedClick
    }}>
      {children}
    </contextInstance.Provider>
  )
}

export default ContextProvider;