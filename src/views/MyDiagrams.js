import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography';

import DiagramCard from '../components/DiagramCard'
import {mydiagrams} from '../request/mydiagrams'

import app from '../base';
class MyDiagrams extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            diagrams: [],
            users: []
        }
    }

    componentWillMount() {
        var user = app.auth().currentUser
        app.database().ref(user.uid+'/diagrams').once('value').then(diagrams=>{
          diagrams.forEach(diagram => {
            this.setState({
                diagrams:[...this.state.diagrams, diagram]
            })
          });
        })
    }

    renderDiagrams(){
        return mydiagrams.map((diagram, index)=>{
            return <DiagramCard name={diagram.name} date={diagram.date} description={diagram.description} image={diagram.image}/> 
        })    
    }

    render(){
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <Button onClick={()=>{window.location.href = '/newdiagram'}} variant="fab" color="primary" aria-label="add" >
                    <AddIcon />
                </Button>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    {this.state.diagrams.map((diagram, index)=>{
                        return <DiagramCard key={index} diagramid={diagram.key} name={diagram.val().name} date={diagram.val().date} description={diagram.val().description} image="http://backgroundcheckall.com/wp-content/uploads/2017/12/background-material-design-10.jpg" />
                    })}
                </div>
            </div>
        )
    }
}

export default MyDiagrams