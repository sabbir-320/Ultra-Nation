import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/country/Country';
import Cart from './components/cart/Cart';

function App() {
  //  all state hook
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  // get API hook
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  // event Handler
  const countryHandler = (x) => {
    // const { name, capital, region, population, borders, flag } = x;
    const newCart = [...cart, x];
    setCart(newCart);
  }

  // main return
  return (
    <div className="App">
      <h1>countries: {countries.length}</h1>
      <Cart cart={cart}></Cart>
      {countries.map(x => <Country country={x} key={x.alpha3Code} countryHandler={countryHandler} ></Country>)}
    </div>
  );
}

export default App;
