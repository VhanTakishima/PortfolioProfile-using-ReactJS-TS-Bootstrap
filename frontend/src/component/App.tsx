/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styling/Nav.css";
import { useState } from "react";
import Nav from "./Nav.tsx";
import Body from "./Body.tsx";
import Footer from "./Footer.tsx";
import Miniproject from "./Miniproject.tsx";
import { User as UserModel } from "../models/user";
import Calculathor from "./Calculathor.tsx";
import ToDoList from "./ToDoList.tsx";

interface UserProps {
  user: UserModel;
}

function App({ user }: UserProps) {
  const [isCalculathorVisible, setIsCalculathorVisible] = useState(false);
  const [isToDoListVisible, setToDoListVisible] = useState(false);
  const [isMinesVisible, setMinesVisible] = useState(false);
  const [username, setUsername] = useState<UserModel | "Guest">("Guest");

  // const toggleCalculathorVisibility = () => {
  //   setIsCalculathorVisible(!isCalculathorVisible);
  // };

  // const toggleToDoListVisibility = () => {
  //   setToDoListVisible(!isToDoListVisible);
  // };
  // const toggleMinesVisibility = () => {
  //   setMinesVisible(!isMinesVisible);
  // };

  return (
    // <div className="text-bg-secondary-emphasis bg-gradient">
    <div>
      <Nav user={user} />
      <Body />
      <Miniproject />
      {/* {isCalculathorVisible && (
        <Calculathor
          isVisible={isCalculathorVisible}
          onClose={toggleCalculathorVisibility}
        />
      )}
      {isToDoListVisible && (
        <ToDoList
          isVisible={isToDoListVisible}
          onClose={toggleToDoListVisibility}
        />
      )} */}

      <Footer />
    </div>
  );
}

export default App;
