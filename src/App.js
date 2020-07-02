import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotMatch from './pages/NotMatch/NotMatch';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './helpers/PrivateRoute/PrivateRoute';

import './App.css';

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>

                <PrivateRoute>
                    <Profile />
                </PrivateRoute>

                {/* Ini kalau url tidak ditemukan */}
                <Route path='*'>
                    <NotMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
