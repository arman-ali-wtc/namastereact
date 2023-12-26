import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";


export default function App() {
    return (
        <React.Fragment>
            <Header />
            <div className="body">
            <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    )
}
