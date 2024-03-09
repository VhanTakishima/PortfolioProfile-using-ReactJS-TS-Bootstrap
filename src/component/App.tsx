import "../styling/Nav.css";

import Nav from "./Nav.tsx";
import Body from "./Body.tsx";

function App() {
  return (
    <div className=" text-bg-secondary-emphasis bg-gradient">
      <Nav />
      <Body />
    </div>
  );
}

export default App;
