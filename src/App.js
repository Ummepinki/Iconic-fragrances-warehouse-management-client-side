
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
