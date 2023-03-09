import {decode} from 'html-entities';
import { useState} from "react";

const QuestionCard = (props) => {
    const [answered, setAnswered] = useState(false)
    const [score,setScore] = useState(0);
    
const handleAnswerOptionClick = (correct_answer) => {
  if (correct_answer) {
    setScore(score + 1);
    setAnswered(true);
  } else {
    setAnswered(true);
  }
};
    return (
      <div className={"question-section"}>
        <div>Question {props.questions}</div>
        <div className='question-text'>{decode(props.question.question)}</div>
        <div className='answer-section'>
		<button disabled={answered} onClick= {() => handleAnswerOptionClick(props.question.question.correct_answer)} >True</button>
		<button disabled={answered} onClick= {() => handleAnswerOptionClick(props.question.question.correct_answer)}>False</button>
   {/* {question.correct_answer.map((answerOption)=>
      <button onClick={() =>}
   )}*/}
        </div>
      </div>
    );
  };

export default QuestionCard;