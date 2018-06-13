import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import Diagram from '../components/Diagram'
import MenuItem from '../components/MenuItem'

class NewDiagram extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div className="row">
                <div style={{paddingTop:'2em'}}>
                    <Diagram />
                </div>
            </div>
        )
    }
}

export default NewDiagram