import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { ProductContextProvider } from './contexts/ProductContext';
import Content from './pages/Content/Content';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Header />
        <Navbar />
        <Content />
      </ProductContextProvider>
    </div>
  );
}

export default App;
