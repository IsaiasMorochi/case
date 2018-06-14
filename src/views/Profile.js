import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import UserProfile from '../components/UserProfile'
import app from '../base'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profile: []
        }
    }
    
    componentWillMount() {
        const currentuser = app.auth().currentUser
        app.database().ref('/').once('value').then(users=>{
            users.forEach(user => {
                if(currentuser.uid==user.key){
                    this.setState({profile: user.val().userinfo})
                }
            });
        })
    }
    
    render(){
        return (
            <div>
                <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <UserProfile
                        nombre={this.state.name}
                        email={this.state.profile.email}
                        profesion={this.state.profile.preofesion}
                        ci={this.state.profile.ci}
                        telefono={this.state.profile.phone}
                        imagen="https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png"
                        footer={
                            <Button variant="outlined" color="secondary" >
                                Editar
                            </Button>
                        }
                    />
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default Profile