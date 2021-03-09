import React, {Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  WithStyles  from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export class Login extends Component{
    render() {
        return(
        <div>
        <Container component="main" maxWidth="xs">
            <div className="mt-3 mt-md-5">
               <div className="text-center">
                   <Typography className="mt-3 font-weigth-normal" component="h1" variant="h6">skdpvosdv
           </Typography>

           <div className="mt-4">
               <TextField 
               variant="outlined"
               margim="normal"
               required
               fullWidth
               id="email"
               label="email"
               name="username"
               type="email"
               />
           </div>
           <div className="mt-4">
               <TextField 
               variant="outlined"
               margim="normal"
               required
               fullWidth
               id="password"
               label="senha"
               name="password"
               type="password "
               />
           </div>
             <Button
            type="button"
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            className="mb-3 mb-md-4 mt-4"
            >
                Entrar
            </Button>
                 </div>
                </div>  
            </Container> 
     </div>
    )
  };
}



 