import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//build provider
export const StateProvider = ({reducer, initialState, childern})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {childern}
    </StateContext.Provider>
);

//we will use this inside the component
export const useStateValue = () => useContext(StateContext);