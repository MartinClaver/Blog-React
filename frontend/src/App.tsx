import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Post from "./Routes/Post";
import NeedAuth from "./Routes/NeedAuth";
import Connect from "./Routes/Connect";
import Protection from "./Routes/Protection";

function App() {
    const [username, setUsername] = useState<string>("")

    return (
        <BrowserRouter>
            <div>
                <h1>Coucou les enfants</h1>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/protected"}>Protected</NavLink></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home/>
                    }/>
                    <Route path={'/protected'} element={
                        <NeedAuth username={username}>
                            <Protection/>
                        </NeedAuth>
                    }/>
                    
                        
                    <Route path={"/login"} element={<Connect setUsername={setUsername}/>}/>
                </Routes>
                <NeedAuth username={username}>
                            <Post/>
                </NeedAuth>
            </div>
        </BrowserRouter>

    );
}

export default App;
