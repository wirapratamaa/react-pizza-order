import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feature from './components/Feature';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your Pizza" data={productData}/>
      <Feature />
      <Products heading="Choose your Deserts" data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
