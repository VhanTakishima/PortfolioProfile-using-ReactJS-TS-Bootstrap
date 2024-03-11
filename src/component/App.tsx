import "../styling/Nav.css";

import Nav from "./Nav.tsx";
import Body from "./Body.tsx";
// import Calculathor from "./Calculathor.tsx";

function App() {
  return (
    <div className=" text-bg-secondary-emphasis bg-gradient">
      <Nav />
      <Body />
      {/* <Calculathor /> */}
    </div>
  );
}

export default App;
