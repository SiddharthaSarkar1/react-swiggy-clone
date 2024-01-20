import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">  
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        <Route path='/search' element={<Search />}/>
        <Route path='/details' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
