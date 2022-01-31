import React from "react";
import Homepage from "./pages/Homepage";
// dnd
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

// components
import Header from "./components/Header";


const App = () => {
    return (
        <DndProvider backend={Backend}>
            <Header />
            <Homepage />
        </DndProvider>
    );
};

export default App;