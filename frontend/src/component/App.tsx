/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styling/Nav.css";
import { useState } from "react";
import Nav from "./Nav.tsx";
import Body from "./Body.tsx";
import Footer from "./Footer.tsx";
import Miniproject from "./Miniproject.tsx";
import Calculathor from "./Calculathor.tsx";
import ToDoList from "./ToDoList.tsx";

function App() {
  const [isCalculathorVisible, setIsCalculathorVisible] = useState(false);
  const [isToDoListVisible, setToDoListVisible] = useState(false);

  const toggleCalculathorVisibility = () => {
    setIsCalculathorVisible(!isCalculathorVisible);
  };

  const toggleToDoListVisibility = () => {
    setToDoListVisible(!isToDoListVisible);
  };

  return (
    // <div className="text-bg-secondary-emphasis bg-gradient">
    <div>
      <Nav />
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
