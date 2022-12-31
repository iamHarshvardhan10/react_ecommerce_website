import './App.css'
import Footer from './components/Footer/Footer';
import Head from './components/Head/Head';
import Header from './components/Header/Header';
import Product from './components/Products/Product';
import Slider from './components/Slider/Slider';
import Testimonials from './components/Testimonials/Testimonials';
import Virtual from './components/Virtual/Virtual';

function App() {
  return (
    <div className="App">
     <Header/>
     <Head/>
     <Slider/>
     <Virtual/>
     <Product/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
