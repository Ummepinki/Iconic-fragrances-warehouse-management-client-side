

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={<ItemDetails></ItemDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
