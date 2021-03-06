import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import classes from './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile posts={props.posts} /> }/>
          <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} /> }/>
          <Route path='/news' render={ () => <News /> }/>
          <Route path='/music' render={ () => <Music /> }/>
          <Route path='/settings' render={ () => <Settings /> }/>
        </div>
        <div className='app-wrapper-footer'>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;