import { useState} from "react";


const Scoreboard = (props) => {
//const [showScore, setShowScore] = useState(false);
//const [score,setScore] = useState(0);


    return (
        <div className={"scoreboard-section"}>
          <div className='scoreboard-text'>You got {props.score} out of 10!</div>
        </div>
      );
    };
  
  export default Scoreboard;