import "../styling/Nav.css";
import { useState } from "react";
import Nav from "./Nav.tsx";
import Body from "./Body.tsx";
import Footer from "./Footer.tsx";
import Miniproject from "./Miniproject.tsx";
import Calculathor from "./Calculathor.tsx";

function App() {
  const [isCalculathorVisible, setIsCalculathorVisible] = useState(false);

  const toggleCalculathorVisibility = () => {
    setIsCalculathorVisible(!isCalculathorVisible);
  };

  return (
    // <div className="text-bg-secondary-emphasis bg-gradient">
    <div>
      <Nav />
      <Body />
      <Miniproject />
      {isCalculathorVisible && (
        <Calculathor
          isVisible={isCalculathorVisible}
          onClose={toggleCalculathorVisibility}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
