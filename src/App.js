import React from "react"
import { hot } from "react-hot-loader"
import Home from "./pages/Home"
import Header from "./organisms/Header"
import './styles/global.css'


const App = () => (
    <>
            <Home />
    </>
)

export default hot(module)(App)
