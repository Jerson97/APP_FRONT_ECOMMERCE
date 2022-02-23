import React, { createContext, useContext, useReducer} from "react";


export const StateContext = createContext();

export const Satateprovider = ( { reducer, initialSatate, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialSatate)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);