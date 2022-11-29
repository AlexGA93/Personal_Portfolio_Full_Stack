import React, { useState, useContext, createContext } from 'react';

// create react context
const StateContext = createContext();

// useContext Provider
export const ContextProvider = ({ children }) => {
    // states
    const [isLoaded, setIsLoaded]     = useState(false);
    const [loopNum, setLoopNum]       = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText]             = useState('');
    const [delta, setDelta]           = useState(300 - Math.random() * 100);
    const [index, setIndex]           = useState(1);
    const [githubRepos, setGithubRepos] = useState([]);
    // methods
    // return provider
    return (
        <StateContext.Provider
            value={{
                isLoaded, 
                setIsLoaded,

                loopNum, 
                setLoopNum,

                isDeleting, 
                setIsDeleting,

                text, 
                setText,

                delta, 
                setDelta,

                index, 
                setIndex,

                githubRepos, 
                setGithubRepos
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);