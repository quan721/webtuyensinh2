import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Join from './Pages/Join';
import ANM from './Pages/ANM';
import PTPM from './Pages/PTPM';
import TKĐH from './Pages/TKĐH';
import AWH from './Pages/AWH';
import CEH from './Pages/CEH';
import Errorpage from './Component/Errorpage';


import Dasdboard from './Pages/Dasdboard';


function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/*' element={<Errorpage />}></Route>
            <Route path='/join' element={<Join />}></Route>
            <Route path='/anm' element={<ANM />}></Route>
            <Route path='/ptpm' element={<PTPM />}></Route>
            <Route path='/tkdh' element={<TKĐH />}></Route>
            <Route path='/awh' element={<AWH />}></Route>
            <Route path='/ceh' element={<CEH />}></Route>
            <Route path='/dasdboard' element={<Dasdboard />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
