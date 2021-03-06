import React from 'react';
// eslint-disable-next-line
import { Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Post from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
// import PostIndex from '../Post/PostIndex';
// eslint-disable-next-line
import Footer from '../Footer/Footer';


const Home = (props) => (
  <div>
    <BrowserRouter>

    <Route component={Header} />

    <Route component={Post} />
      
    <Route component={Sidebar} />

    </BrowserRouter>
  </div>
);

export default Home;