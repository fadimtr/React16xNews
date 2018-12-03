import React from 'react';
import { ThemeContext , themes} from './context';
import Toolbar from './toolbar';

class TryContext extends React.Component {

    state = {
        theme : themes.dark
    }

    toggleContext = () => {
        this.setState({ theme: this.state.theme == themes.dark ? themes.light : themes.dark })
    }

    render = () => {
        return <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar toggleContext={this.toggleContext}/>
               </ThemeContext.Provider>
    }
}

  export default TryContext;