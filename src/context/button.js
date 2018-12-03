import React from 'react';
import { ThemeContext } from './context';

class Button extends React.Component {
    render = () => {
        const theme = this.context;
        return <button style={{backgroundColor: theme.background, color: theme.color}}>{this.props.value}</button>
    }
}
Button.contextType = ThemeContext;

  export default Button;