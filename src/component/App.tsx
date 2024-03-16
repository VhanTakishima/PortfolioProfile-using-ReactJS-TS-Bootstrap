import "../styling/Nav.css";

import Nav from "./Nav.tsx";
import Body from "./Body.tsx";
import Footer from "./Footer.tsx";
// import Calculathor from "./Calculathor.tsx";

function App() {
  return (
    // <div className="text-bg-secondary-emphasis bg-gradient">
    <div>
      <Nav />
      <Body />
      {/* <Calculathor /> */}
      <Footer />
    </div>
  );
}

export default App;
