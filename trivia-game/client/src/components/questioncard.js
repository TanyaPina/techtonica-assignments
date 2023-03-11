import {decode} from 'html-entities';
import { useState} from "react";
import Scoreboard from "./scoreboard";

const QuestionCard = (props) => {
    const [answered, setAnswered] = useState(false)
    const [score,setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState();
    
    const handleAnswerOptionClick = (userAnswerParam) => {
      setUserAnswer(userAnswerParam);
    if (userAnswerParam === props.question.correct_answer) {
      props.setScore(props.score + 1);
      setAnswered(true);
      console.log(props.score)
    } else {
      setAnswered(true);
      console.log(props.score)
    }
  }

    return (
      <div className={"question-section"}>
        {/*<div>Question {props.questions}</div>*/}
        <div className='question-text'>{decode(props.question.question)}</div>
        <div className='answer-section'>
		<button className={`answerbuttons ${userAnswer === "True" ? "disabledbutton" : ""}`} disabled={answered} onClick= {() => handleAnswerOptionClick("True")}>True</button>
		<button className={`answerbuttons ${userAnswer === "False" ? "disabledbutton" : ""}`} disabled={answered} onClick= {() => handleAnswerOptionClick("False")}>False</button>
   {/* {question.correct_answer.map((answerOption)=>
      <button onClick={() =>}
   )}*/}
        </div>
      </div>
    );
  };

export default QuestionCard;
