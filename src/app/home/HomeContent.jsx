import React, { useContext } from 'react';
import contextInstance from './Context';
import CompletedButton from './CompletedButton';

import FamilyCards from "@/components/chapters/chapter_1/subchapter_1/FamilyCards";
import BodyCards from "@/components/chapters/chapter_1/subchapter_2/BodyCards";
import FoodCards from "@/components/chapters/chapter_1/subchapter_3/FoodCards";
import RoutineCards from "@/components/chapters/chapter_1/subchapter_4/RoutineCards";
import HomeCards from "@/components/chapters/chapter_1/subchapter_5/HomeCards";
import TimeCards from "@/components/chapters/chapter_1/subchapter_6/TimeCards";
import TravelCards from "@/components/chapters/chapter_1/subchapter_7/TravelCards";
import Crossword1 from "@/components/chapters/chapter_2/subchapter_1/Crossword1";
import Crossword2 from "@/components/chapters/chapter_2/subchapter_2/Crossword2";
import Crossword3 from "@/components/chapters/chapter_2/subchapter_3/Crossword3";
import VerbToBeQuizz from "@/components/chapters/chapter_3/subchapter_1/VerbToBeQuizz";

function HomeContent() {
    const { selectedId } = useContext(contextInstance);

    switch (selectedId) {
        case 1:
            return <div>Content for Chapter 1</div>;
        case 1.1:
            return <div className='w-full h-full relative'>
                        <FamilyCards />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.1} nextChapterId={1.2}/>
                    </div>;
        case 1.2:
            return <div className='w-full h-full relative'>
                        <BodyCards />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.2} nextChapterId={1.3}/>
                    </div>;
        case 1.3:
            return <div className='w-full h-full relative'>
                        <FoodCards />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.3} nextChapterId={1.4}/>
                    </div>;
        case 1.4:
            return <div className='w-full h-full relative'>
                        <RoutineCards />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.4} nextChapterId={1.5}/>
                    </div>;
        case 1.5:
            return <div className='w-full h-full relative'>
                        <HomeCards />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.5} nextChapterId={1.6}/>
                    </div>;
        case 1.6:
            return <div className='w-full h-full relative'>
                        <TimeCards />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.6} nextChapterId={1.7}/>
                    </div>;
        case 1.7:
            return <div className='w-full h-full relative'>
                        <TravelCards />
                        <CompletedButton isDisabled={false} chapterId={1} subChapterId={1.7} nextChapterId={2.1}/>
                    </div>;
        case 2:
            return <div>Content for Chapter 2</div>;
        case 2.1:
            return <div className='w-full h-full relative'>
                        <Crossword1 />
                        <CompletedButton isDisabled={false} chapterId={2} subChapterId={2.1} nextChapterId={2.2}/>
                    </div>;
        case 2.2:
            return <div className='w-full h-full relative'>
                        <Crossword2 />
                        <CompletedButton isDisabled={false} chapterId={2} subChapterId={2.2} nextChapterId={2.3}/>
                    </div>;
        case 2.3:
            return <div className='w-full h-full relative'>
                        <Crossword3 />
                        <CompletedButton isDisabled={false} chapterId={2} subChapterId={2.3} nextChapterId={3.1}/>
                    </div>;
        case 3:
            return <div>Content for Chapter 3</div>;
        case 3.1:
            return <div className='w-full h-full relative'>
                        <VerbToBeQuizz />
                        <CompletedButton isDisabled={false} chapterId={3} subChapterId={3.1} nextChapterId={null}/> {/* Assuming 3.1 is the last subchapter */}
                    </div>;
        default:
            return <div>Select a chapter or subchapter</div>;
    }
}

export default HomeContent;