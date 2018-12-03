import React from 'react';
import Button from './button';

class Toolbar extends React.Component {
    render = () => {

        return <>
            <Button value='First'/>
            <Button value='second'/>
            <Button value='third'/>
            <div onClick={this.props.toggleContext}>
                Toggle Theme
            </div>
        </>
    }
  }

  export default Toolbar;