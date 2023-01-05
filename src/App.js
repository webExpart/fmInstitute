
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/blog/Blog';
import BookShop from './pages/bookShop/BookShop';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Gallery from './pages/gallery/Gallery';
import Result from './pages/result/Result';
import NoPage from './pages/noPage/NoPage'
import SingelPost from "./pages/singelPost/SingelPost";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="blogs" element={<Blog/> } />
        <Route path="bookShop" element={<BookShop />} />
        <Route path="coursedetails/:id" element={<CourseDetails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="result" element={<Result />} />
        <Route path="Posts/:id" element={<SingelPost/>} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
