import React, { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import contextInstance from './Context';


function CompletedButton({
    isDisabled,
    chapterId,
    nextChapterId,
    subChapterId
}) {
    const { toggleSubChapter, setSelectedId } = useContext(contextInstance);

    function completeChapter(chapId, subChapId, goToId){
        toggleSubChapter(chapId, subChapId)
        setSelectedId(goToId)
    }

  return (
        <button disabled={isDisabled} onClick={() => completeChapter(chapterId, subChapterId, nextChapterId)}
         className='z-50 px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 flex items-center justify-space-around fixed bottom-3 right-3 rounded-md'>
            Marcar como completado
            <BsArrowRight/>
        </button>
    
  )
}

export default CompletedButton