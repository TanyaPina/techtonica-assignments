import {decode} from 'html-entities';
import { useState} from "react";
import Scoreboard from "./scoreboard";

const QuestionCard = (props) => {
    const [answered, setAnswered] = useState(false)
    const [score,setScore] = useState(0);
    
    const handleAnswerOptionClick = (userAnswer) => {
    if (userAnswer === props.question.correct_answer) {
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
        <div>Question {props.questions}</div>
        <div className='question-text'>{decode(props.question.question)}</div>
        <div className='answer-section'>
		<button disabled={answered} onClick= {() => handleAnswerOptionClick("True")}>True</button>
		<button disabled={answered} onClick= {() => handleAnswerOptionClick("False")}>False</button>
   {/* {question.correct_answer.map((answerOption)=>
      <button onClick={() =>}
   )}*/}
        </div>
        <div><Scoreboard score={props.score}/></div>
      </div>
    );
  };

export default QuestionCard;
