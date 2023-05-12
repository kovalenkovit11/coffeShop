
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Catalog from './pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState('')
  return (
    <div className="App">
   <Header/>
   {/* <Main/> */}
   <Catalog selected={selected} setSelected={setSelected}/>
   <Footer/>
    </div>
  );
}

export default App;
