import MenuPage from './pages/MenuPage';
import CartPage from './pages/cartpage';
import DetailPage from './pages/detailspage';
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  return (
        <div>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<MenuPage/>}/>
                <Route exact path='/cart' element={<CartPage/>}/>
                <Route exact path='/item/:item' element={<DetailPage/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    
  );
}

export default App;
