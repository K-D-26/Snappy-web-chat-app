import React, { useState, useEffect } from "react";
import styles from './Welcome.module.css';
import Robot from "../../assets/robot.gif";
import Logout from "../Logout/Logout";

function Welcome() {

  const [userName, setUserName] = useState("");
  // useEffect(async () => {
  //   setUserName(
  //     await JSON.parse(
  //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //     ).username
  //   );
  // }, []);

  const myFunction = async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }
  useEffect(() => {
    myFunction();
  }, []);

  return (
    <div>
      <div className={styles.logout}>
        Logout <Logout />
      </div>
      <div className={styles.welcome}>
        <img src={Robot} alt="" />
        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>
    </div>
  )
}

export default Welcome
