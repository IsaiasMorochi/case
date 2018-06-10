import React from 'react'
import Diagram from '../components/Diagram'
import MenuItem from '../components/MenuItem'
class Colaborations extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <MenuItem />
                <Diagram />
            </div>
        )
    }
}

export default Colaborations