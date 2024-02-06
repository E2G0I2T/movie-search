// 라우터 활용한 영화 사이트 제작
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './comp/Home';
import Welcome from './comp/Welcome';
import MovieHome from './comp/MovieHome';
import MovieHome2 from './comp/MovieHome2';



function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> |&nbsp;
          <Link to="/wel">Welcome</Link> |&nbsp;
          <Link to="/moviehome">영화</Link> |&nbsp;
          <Link to="/moviehome2">영화</Link> |&nbsp;
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/wel" element={<Welcome />}/>
          <Route path="/moviehome" element={<MovieHome />}/>
          <Route path="/moviehome2" element={<MovieHome2 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
