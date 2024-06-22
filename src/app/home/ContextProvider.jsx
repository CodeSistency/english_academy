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
        title: "Vocabulario",
        isFinished: false,
        sub_chapters: [
          {
            id: 1.1,
            title: "Familia y Amigos",
            isFinished: false,
          },
          {
            id: 1.2,
            title: "Partes del Cuerpo y Salud",
            isFinished: false,
          },
          {
            id: 1.3,
            title: "Comida y Bebida",
            isFinished: false,
          },
          {
            id: 1.4,
            title: "Vida Diaria y Rutinas",
            isFinished: false,
          },
          {
            id: 1.5,
            title: "Hogar y Muebles",
            isFinished: false,
          },
          {
            id: 1.6,
            title: "Tiempo, Clima y Estaciones",
            isFinished: false,
          },
          {
            id: 1.7,
            title: "Viajes y Vacaciones",
            isFinished: false,
          },
        ],
      },
      {
        id: 2,
        title: "Crucigramas",
        isFinished: false,
        sub_chapters: [
          {
            id: 2.1,
            title: "Ejercicio 1",
            isFinished: false,
          },
          {
            id: 2.2,
            title: "Ejercicio 2",
            isFinished: false,
          },
          {
            id: 2.3,
            title: "Ejercicio 3",
            isFinished: false,
          },
        ],
      },
      {
        id: 3,
        title: "Quizz",
        isFinished: false,
        sub_chapters: [
          {
            id: 3.1,
            title: "Verbo To be",
            isActive: false,
          },
        ],
      },
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