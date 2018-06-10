import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import UserProfile from '../components/UserProfile'

// import avatar from "https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png"
class Profile extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <UserProfile
                        nombre="Fernando Montero"
                        email="fmontero04@gmail.com"
                        profesion="Ing. Informatico"
                        especialidad="Ingenieria del Software"
                        ci="9796662 SC"
                        telefono="73604997"
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