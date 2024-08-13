import { useState } from 'react'
import Greeting from './components/function';
import Product from './components/product';
import Hookslearn from './components/hookslearn';
import UseEffectLearn from './components/useEffectLearn';
import Fetch from './components/fetch';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import TopicList from './components/listtodo';
import Navbar from './components/navbar';
import AddTopic from './toplist';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<TopicList />} />
          <Route path='/add-topic' element={<AddTopic />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
