import "./App.css";

import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Characters from "./components/characters/Characters";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <Header />
      {pathname === "/" ? <Characters /> : ""}
      <Outlet />
    </div>
  );
}

export default App;
