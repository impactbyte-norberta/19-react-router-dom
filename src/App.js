import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotMatch from "./pages/NotMatch/NotMatch";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";

import PrivateRoute from "./helpers/PrivateRoute/PrivateRoute";

// import "./App.css";

const Main = styled.main`
    font-family: "Yellowtail", cursive;
`;

function App() {
    let userLogin = localStorage.getItem("user");

    return (
        <Router>
            <Main>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    {/* Kalau kita ke /login, dia ngecek apakah sudah login atau belum. Kalau sudah, akan diarahkan ke profile, tapi jika di back, akan diarahkan ke contact*/}
                    <Route exact path="/login">
                        {userLogin === null ? (
                            <Login />
                        ) : (
                            <Redirect to="/contact" />
                        )}
                    </Route>

                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>

                    {/* Ini kalau url tidak ditemukan */}
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </Main>
        </Router>
    );
}

export default App;
