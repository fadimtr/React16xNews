import React from 'react';


export const themes = {
    light: {
      backgorund: 'whitesmoke',
      color: 'black'
    },
    dark: {
      background: 'black',
      color: 'white'
    },
  };

  export const ThemeContext = React.createContext(
    themes.dark // default value
  );