import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// import Post from './Components/Post';
// import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import PostIndex from './Components/Post/PostIndex';
import Logout from './Components/Logout/Logout';
import {useState, useEffect} from 'react';
import Footer from './Components/Footer/Footer';


function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  // const [postToUpdate, setPostToUpdate] = useState({});
  // const [commentToUpdate, setCommentToUpdate] = useState(''); 
  
  useEffect(() => {
    if(localStorage.getItem(!undefined)) {
      setSessionToken(localStorage.getItem('token'))
      console.log(sessionToken);
    };
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const viewConductor = () => {
    return sessionToken === localStorage.getItem('token') ?
    <Home sessionToken={sessionToken} /> : <Auth updateToken={updateToken} />
  }

  // const updatePost = (post) =>{
  //   setPostToUpdate(post)
  // }

  // const updateComment = (comment) =>{
  //   setCommentToUpdate(comment)
  // }

  
  return (

    // <div className="App">
    // <Header clearSession={clearToken} />
    //   
    // </div>

    <div>
     <BrowserRouter >
    <>
    <Route component={Auth} updateToken={updateToken} sessionToken={sessionToken} clearSession={clearToken}/>
    {/* <Route component={Login} /> */}
    {/* <Route component={Signup} /> */}
    <Route component={Header} updateToken={updateToken} sessionToken={sessionToken} clearSession={clearToken}/>
    <Switch>
    <Route path='/' component={Home} updateToken={updateToken} sessionToken={sessionToken} clearSession={clearToken}/>
    </Switch>
    {viewConductor()}
    </>
    < Footer />
    </BrowserRouter>
    </div>

  );
}

export default App;