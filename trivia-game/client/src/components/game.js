import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
import Scoreboard from "./scoreboard";
const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [score,setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const loadData = () => {
        fetch('http://localhost:5050/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
                setIsLoading(false);
            })
    }
//after loading the components, call the api and load data 
    useEffect(() => {
        loadData();
    }, [])

    return isLoading ? <div> Loading.... </div> :(
        <div className="Container">
            {/*<div className='question-count'>
                <span>Question 1</span>/{questions.length}
    </div>*/}
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} score={score} setScore={setScore}/>
            })}
            <div><Scoreboard score={score} /></div>
        </div>
        
    )

}

export default Game;
