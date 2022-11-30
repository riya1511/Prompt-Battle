import Homepage from './Pages/Home/Homepage';
import { Route, Routes } from "react-router-dom";
import Leaderboard from './Pages/Leaderboard';
import GenerateImg from './Pages/GenerateImg/GenerateImg';
import Polling from './Pages/Polling';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Prompt-Battle' element={<Homepage />}></Route>
        <Route path='/Leaderboard' element={<Leaderboard />}></Route>
        <Route path='/Generateimg' element={<GenerateImg />}></Route>
        <Route path='/Polling' element={<Polling />}></Route>
      </Routes>
    </div>
  );
}

export default App;
