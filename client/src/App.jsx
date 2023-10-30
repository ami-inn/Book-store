import React from 'react'

import './App.css';
import Page from '../page/Page';
import axios from 'axios'

const App = () => {
  axios.defaults.baseURL = "http://localhost:8000/";
  axios.defaults.withCredentials = true;

  return (
    <Page/>
  )
}

export default App
