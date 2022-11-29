import React, { useState, useContext, createContext } from "react";

// create react context
const StateContext = createContext();

// useContext Provider
export const ContextProvider = ({ children }) => {
  const contactOptions = [
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/alejandro-gimeno-ataz-3741a013b/",
        text: "Linkedin Profile",
        description: "Linkedin personal profile"
    },
    {
        name: "Github",
        url: "https://github.com/AlexGA93",
        text: "Github Profile",
        description: "View all my repositories and meet my work!"
    },
    {
        name: "Email",
        url: "alexgimat@hotmail.com",
        text: "Email",
        description: "You can send me a professional contact email"
    },
  ];

  // states
  const [isLoaded, setIsLoaded] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [githubRepos, setGithubRepos] = useState([]);
  const [contact, setContact] = useState(contactOptions);

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
        setGithubRepos,

        contact, 
        setContact
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
