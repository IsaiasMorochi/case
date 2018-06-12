import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import app from '../base';
class Diagram extends Component {
  render() {
    return (
      <div  id="umldiagram">
           <Button id="downXML" variant="outlined" color="secondary">
                XML
            </Button>
            <Button id="downImage" variant="outlined" color="secondary">
                Imagen
            </Button>
      </div>
    );
  }
}

export default Diagram;
