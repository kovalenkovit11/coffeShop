import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Catalog from './pages/Catalog/Catalog';
// import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import OpenCard from './components/OpenCard/OpenCard';
// import NotFound from './pages/NotFound/NotFound';

const PathWay = ()=> {
  const [selected, setSelected] = useState('')
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/catalog" element={<Catalog selected={selected} setSelected={setSelected}/>} />
        <Route exact path="/openCard" element={<OpenCard/>} />
        {/* <Route path="/catalog/:productId" component={Product} />
        <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default PathWay;
