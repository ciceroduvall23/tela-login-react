import React,{ Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './dashboard.css'

const ColorB = withStyles(theme => ({

    root: {
        color:'#000',
        background:green[600],
        '&:hover' : {
                background:green[700]
        }
        
      }
    }))(Button)

const Login = lazy(() => import('./view/Login.js'))

const Routes = () => (
   <Router>
    <Suspense fallback={<div></div>}>
      <Switch>

      <Container component="main" maxWidth="xs"> 
      <div className="mt-3 mt-md-5">
               <div className="text-center">
                   <img src="img.png" width="400" />
                   <Typography className="mt-3 font-weigth-normal" color="#000" component="h1" variant="h6">Acessar Contar
           </Typography>


      <div className="mt-4" color="#fff ">
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

            <div className="teste">
            <Link href="/register">
            <ColorB
            type="button"
            fullWidth
            size="large"
            variant="contained"
            className="mt-md-4"
            >
            Cadastrar
            </ColorB>
            </Link>
            </div>

            </div>
            </div>
            </Container> 
      </Switch>
   </Suspense>
   </Router>

)

 
export default Routes;