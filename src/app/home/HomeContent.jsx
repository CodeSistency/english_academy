import React, { useContext } from 'react';
import contextInstance from './Context';
import CompletedButton from './CompletedButton';

import Flashcard1 from "@/components/chapters/content/subchapter_1/Flashcard";
import Flashcard2 from "@/components/chapters/content/subchapter_2/Flashcard";
import Flashcard3 from "@/components/chapters/content/subchapter_3/Flashcard";
import Flashcard4 from "@/components/chapters/content/subchapter_4/Flashcard";
import Flashcard5 from "@/components/chapters/content/subchapter_5/Flashcard";
import Flashcard6 from "@/components/chapters/content/subchapter_6/Flashcard";

import Crossword1 from "@/components/chapters/content/subchapter_1/Crossword";
import Crossword2 from "@/components/chapters/content/subchapter_2/Crossword";
import Crossword3 from "@/components/chapters/content/subchapter_3/Crossword";
import Crossword4 from "@/components/chapters/content/subchapter_4/Crossword";
import Crossword5 from "@/components/chapters/content/subchapter_5/Crossword";
import Crossword6 from "@/components/chapters/content/subchapter_6/Crossword";


import Quizz1 from "@/components/chapters/content/subchapter_1/Quizz";
import Quizz2 from "@/components/chapters/content/subchapter_2/Quizz";
import Quizz3 from "@/components/chapters/content/subchapter_3/Quizz";
import Quizz4 from "@/components/chapters/content/subchapter_4/Quizz";
import Quizz5 from "@/components/chapters/content/subchapter_5/Quizz";
import Quizz6 from "@/components/chapters/content/subchapter_6/Quizz";

import Video1 from "@/components/chapters/content/subchapter_1/Video";
import Video2 from "@/components/chapters/content/subchapter_2/Video";
import Video3 from "@/components/chapters/content/subchapter_3/Video";
import Video4 from "@/components/chapters/content/subchapter_4/Video";
import Video5 from "@/components/chapters/content/subchapter_5/Video";
import Video6 from "@/components/chapters/content/subchapter_6/Video";


function HomeContent() {
    const { selectedId } = useContext(contextInstance);

    switch (selectedId) {
        case 1:
            return <div>Content for Chapter 1</div>;
        case 1.1:
            return <div className='w-full h-full relative'>
                        <Video1 videoUrl="https://www.youtube.com/watch?v=8M8Wamg__bY&pp=ygUodHV0b3JpYWwgc2FsdWRvcyB5IHByZXNlbnRhY2lvbmVzIGluZ2xlcw%3D%3D" />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.1} nextChapterId={1.2}/>
                    </div>;
        case 1.2:
            return <div className='w-full h-full relative'>
                        <Flashcard1 />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.2} nextChapterId={1.3}/>
                    </div>;
        case 1.3:
            return <div className='w-full h-full relative'>
                        <Crossword1 />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.3} nextChapterId={1.4}/>
                    </div>;
        case 1.4:
            return <div className='w-full h-full relative'>
                        <Quizz1 />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.4} nextChapterId={1.5}/>
                    </div>;
        case 2:
            return <div>Content for Chapter 2</div>;
        case 2.1:
            return <div className='w-full h-full relative'>
                        <Video2 videoUrl="https://www.youtube.com/watch?v=PNIsfZ62E9Q&pp=ygUidHV0b3JpYWwgbnVtZXJvcyB5IGFsZmFiZXRvIGluZ2xlcw%3D%3D" />
                        <CompletedButton isDisabled={false} chapterId={2} subChapterId={2.1} nextChapterId={2.2}/>
                    </div>;
        case 2.2:
            return <div className='w-full h-full relative'>
                        <Flashcard2 />
                        <CompletedButton isDisabled={false} chapterId={2} subChapterId={2.2} nextChapterId={2.3}/>
                    </div>;
        case 2.3:
            return <div className='w-full h-full relative'>
                        <Crossword2 />
                        <CompletedButton isDisabled={false} chapterId={2} subChapterId={2.3} nextChapterId={2.4}/>
                    </div>;
        case 2.4:
            return <div className='w-full h-full relative'>
                        <Quizz2 />
                        <CompletedButton isDisabled={false} chapterId={2} subChapterId={2.4} nextChapterId={3.1}/>
                    </div>;
        case 3:
            return <div>Content for Chapter 3</div>;
        case 3.1:
            return <div className='w-full h-full relative'>
                        <Video3 videoUrl="https://www.youtube.com/watch?v=wnbOWa3XaQ0&pp=ygUgdHV0b3JpYWwgZmFtaWxpYSB5IGFtaWdvcyBpbmdsZXM%3D" />
                        <CompletedButton isDisabled={false} chapterId={3} subChapterId={3.1} nextChapterId={3.2}/>
                    </div>;
        case 3.2:
            return <div className='w-full h-full relative'>
                        <Flashcard3 />
                        <CompletedButton isDisabled={false} chapterId={3} subChapterId={3.2} nextChapterId={3.3}/>
                    </div>;
        case 3.3:
            return <div className='w-full h-full relative'>
                        <Crossword3 />
                        <CompletedButton isDisabled={false} chapterId={3} subChapterId={3.3} nextChapterId={3.4}/>
                    </div>;
        case 3.4:
            return <div className='w-full h-full relative'>
                        <Quizz3 />
                        <CompletedButton isDisabled={false} chapterId={3} subChapterId={3.4} nextChapterId={4.1}/>
                    </div>;
        case 4:
            return <div>Content for Chapter 4</div>;
        case 4.1:
            return <div className='w-full h-full relative'>
                        <Video4 videoUrl="https://www.youtube.com/watch?v=sAW4EH25Eew&pp=ygUfdHV0b3JpYWwgcnV0aW5hcyBkaWFyaWFzIGluZ2xlcw%3D%3D" />
                        <CompletedButton isDisabled={false} chapterId={4} subChapterId={4.1} nextChapterId={4.2}/>
                    </div>;
        case 4.2:
            return <div className='w-full h-full relative'>
                        <Flashcard4 />
                        <CompletedButton isDisabled={false} chapterId={4} subChapterId={4.2} nextChapterId={4.3}/>
                    </div>;
        case 4.3:
            return <div className='w-full h-full relative'>
                        <Crossword4 />
                        <CompletedButton isDisabled={false} chapterId={4} subChapterId={4.3} nextChapterId={4.4}/>
                    </div>;
        case 4.4:
            return <div className='w-full h-full relative'>
                        <Quizz4 />
                        <CompletedButton isDisabled={false} chapterId={4} subChapterId={4.4} nextChapterId={5.1}/>
                    </div>;
        case 5:
            return <div>Content for Chapter 5</div>;
        case 5.1:
            return <div className='w-full h-full relative'>
                        <Video5 videoUrl="https://www.youtube.com/watch?v=_PlW5hexEdw&pp=ygUfdHV0b3JpYWwgY29taWRhIHkgYmViaWRhIGluZ2xlcw%3D%3D" />
                        <CompletedButton isDisabled={false} chapterId={5} subChapterId={5.1} nextChapterId={5.2}/>
                    </div>;
        case 5.2:
            return <div className='w-full h-full relative'>
                        <Flashcard5 />
                        <CompletedButton isDisabled={false} chapterId={5} subChapterId={5.2} nextChapterId={5.3}/>
                    </div>;
        case 5.3:
            return <div className='w-full h-full relative'>
                        <Crossword5 />
                        <CompletedButton isDisabled={false} chapterId={5} subChapterId={5.3} nextChapterId={5.4}/>
                    </div>;
        case 5.4:
            return <div className='w-full h-full relative'>
                        <Quizz5 />
                        <CompletedButton isDisabled={false} chapterId={5} subChapterId={5.4} nextChapterId={null}/> {/* Assuming 5.4 is the last subchapter */}
                    </div>;
        case 6:
            return <div>Content for Chapter 5</div>;
        case 6.1:
            return <div className='w-full h-full relative'>
                        <Video6 videoUrl="https://www.youtube.com/watch?v=8iLPYo9p3I0&pp=ygUUdHV0b3JpYWwgdmVyYm8gdG8gYmU%3D" />
                        <CompletedButton isDisabled={false} chapterId={6} subChapterId={6.1} nextChapterId={6.2}/>
                    </div>;
        case 6.2:
            return <div className='w-full h-full relative'>
                        <Flashcard6 />
                        <CompletedButton isDisabled={false} chapterId={6} subChapterId={6.2} nextChapterId={6.3}/>
                    </div>;
        case 6.3:
            return <div className='w-full h-full relative'>
                        <Crossword6 />
                        <CompletedButton isDisabled={false} chapterId={6} subChapterId={6.3} nextChapterId={6.4}/>
                    </div>;
        case 6.4:
            return <div className='w-full h-full relative'>
                        <Quizz6 />
                        <CompletedButton isDisabled={false} chapterId={6} subChapterId={6.4} nextChapterId={null}/> {/* Assuming 5.4 is the last subchapter */}
                    </div>;
        default:
            return <div>Select a chapter or subchapter</div>;
    }
}

export default HomeContent;
