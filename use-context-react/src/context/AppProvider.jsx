/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState } from "react";

export default function AppProvider({ children }) {

    const [name, setName] = useState('Front Beginners')

    const numero = 10

    return(
        <AppContext.Provider value={{ name, setName, numero }}>{children}</AppContext.Provider>
    )
}