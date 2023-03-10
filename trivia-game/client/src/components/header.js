const Header = (props) => {

  let message1;
  let message2;
  if (props.user) {
    message1 = `WELCOME TO TANYA'S GAMEBOI`;
    message2=  `Game on, ${props.user}!`;
  } else {
    message1 = `WELCOME TO TANYA'S GAMEBOI`;
  }
  
  return (
    <div className={"textHeader"}>
      <h2>{message1}</h2>
      <h4>{message2}</h4>
    </div>
  );
};

export default Header;