import React, { useContext } from 'react'
import contextInstance from './Context';
import FamilyCards from "@/components/chapters/chapter_1/subchapter_1/FamilyCards"
import BodyCards from "@/components/chapters/chapter_1/subchapter_2/BodyCards"
import FoodCards from "@/components/chapters/chapter_1/subchapter_3/FoodCards"
import RoutineCards from "@/components/chapters/chapter_1/subchapter_4/RoutineCards"
import HomeCards from "@/components/chapters/chapter_1/subchapter_5/HomeCards"
import TimeCards from "@/components/chapters/chapter_1/subchapter_6/TimeCards"
import TravelCards from "@/components/chapters/chapter_1/subchapter_7/TravelCards"
import Crossword1 from "@/components/chapters/chapter_2/subchapter_1/Crossword1"
import Crossword2 from "@/components/chapters/chapter_2/subchapter_2/Crossword2"
import Crossword3 from "@/components/chapters/chapter_2/subchapter_3/Crossword3"
import VerbToBeQuizz from "@/components/chapters/chapter_3/subchapter_1/VerbToBeQuizz"








function HomeContent() {
    const {selectedId} = useContext(contextInstance);

    switch (selectedId) {
        case 1:
            return <div>Content for Chapter 1</div>;
        case 1.1:
            return <FamilyCards/>;
        case 1.2:
            return <BodyCards />;
        case 1.3:
            return <FoodCards/>;
        case 1.4:
            return <RoutineCards/>;
        case 1.5:
            return <HomeCards />;
        case 1.6:
            return <TimeCards/>;
        case 1.7:
            return <TravelCards/>;
        case 2:
            return <div>Content for Chapter 2</div>;
        case 2.1:
            return <Crossword1 />;
        case 2.2:
            return <Crossword2 />;
        case 2.3:
            return <Crossword3 />;
        case 3:
            return <div>Content for Chapter 3</div>;
        case 3.1:
            return <VerbToBeQuizz/>;
        default:
            return <div>Select a chapter or subchapter</div>;
    }
}

export default HomeContent