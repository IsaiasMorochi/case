import React from 'react'
import DiagramCard from '../components/DiagramCard'
import MenuItem from '../components/MenuItem'
import app from '../base'
class Colaborations extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collaborations: [],
        }
    }

    
    componentWillMount() {
        const currentuser = app.auth().currentUser
        console.log(currentuser.uid)
        app.database().ref('/collaborator_diagram').once('value').then((elements)=>{
            elements.forEach(element=>{
                if(element.val().collaborator==currentuser.uid){
                    this.setState({
                        collaborations:[...this.state.collaborations, element.val()]
                    })
                }
            })
        })
        // .then(()=>{
        //     if(this.state.collaborations.length>0){
        //         this.state.collaborations.forEach(element=>{
        //             app.database().ref(element.owner+'/diagrams/'+element.diagram).once('value').then(element=>{
        //                 console.log(element)
        //                 this.setState({
        //                     diagrams: [...this.state.diagrams,element]
        //                 })
        //             })
        //         })
        //     }
        // })
        
    }
    
    render(){
        return (
            <div className="row">
                {this.state.collaborations.map((coll, index)=>{
                    return <DiagramCard key={index} collaboration={coll} image="http://backgroundcheckall.com/wp-content/uploads/2017/12/background-material-design-10.jpg" />
                })}
            </div>
        )
    }
}

export default Colaborations