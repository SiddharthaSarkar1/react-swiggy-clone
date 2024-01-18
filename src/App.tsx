import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div className="App">  
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
