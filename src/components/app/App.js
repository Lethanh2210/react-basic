import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import ProductDetail from "../Home/productDetail/ProductDetail";

function App() {
  return (
    <div className={"container"}>
        <BrowserRouter>
            <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/:id'} element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
