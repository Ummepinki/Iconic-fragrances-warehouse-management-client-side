
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout/Checkout';
import Home from './pages/Home/Home/Home';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequiredAuth from './pages/Login/RequiredAuth/RequiredAuth';
import Manage from './pages/Manage/Manage';
import MyItems from './pages/MyItems/MyItems';
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
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/checkout/:itemId" element={<RequiredAuth>
          <Checkout></Checkout>
        </RequiredAuth>
        }></Route>
        <Route path="/additem" element={<RequiredAuth>
          <AddItem></AddItem>
        </RequiredAuth>
        }></Route>

        <Route path="/manage" element={<RequiredAuth>
          <Manage></Manage>
        </RequiredAuth>
        }></Route>

        <Route path="/myitems" element={<RequiredAuth>
          <MyItems></MyItems>
        </RequiredAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
