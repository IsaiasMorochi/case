import React from 'react'
import DiagramCard from '../components/DiagramCard'
import {mydiagrams} from '../request/mydiagrams'
class MyDiagrams extends React.Component {
    constructor(props){
        super(props)
    }

    renderDiagrams(){
        return mydiagrams.map((diagram, index)=>{
            return <DiagramCard name={diagram.name} date={diagram.date} description={diagram.description} image={diagram.image}/> 
        })    
    }

    render(){
        return (
            <div className="row">
                {this.renderDiagrams()}
            </div>
        )
    }
}

export default MyDiagrams