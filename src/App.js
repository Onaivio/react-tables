import React from 'react'
import Footer from '../old/components/Footer';
import Navbar from '../old/components/Navbar';
import Content from '../old/components/Content';
import Sidebar from '../old/components/Sidebar';
// import Table from './components/Table';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const getCustomersData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/customers")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };
   getCustomersData();
  return (
    <div className='bg-gray-100'>
        <Navbar />
        <Sidebar />
        <Content />
         <Footer />
    </div>
  );
}

export default App;
