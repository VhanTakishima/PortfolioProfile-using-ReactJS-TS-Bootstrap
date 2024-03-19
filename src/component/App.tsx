import "../styling/Nav.css";

import "../styling/Mmp.css";
import Nav from "./Nav.tsx";
import Body from "./Body.tsx";
import Footer from "./Footer.tsx";
import Mmp from "./Mmp.tsx";

// import Calculathor from "./Calculathor.tsx";

function App() {
  return (
    // <div className="text-bg-secondary-emphasis bg-gradient">
    <div>
      <Nav />
      <Body />
      <Mmp />
      {/* <Calculathor /> */}
      <Footer />
    </div>
  );
}

export default App;
