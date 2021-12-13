import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import ProductListing from "./ProductListing"
import ProductDetail from "./ProductDetail"
function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
          <Route path="/" exact={true} element={<ProductListing />} />
          <Route path="/details/:productid" exact={true} element= {<ProductDetail />} />
          <Route path="*" element={<div className='notFound'>Page Not Found</div>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
