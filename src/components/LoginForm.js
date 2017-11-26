import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {validateUser} from '../api/login'
import { Route } from 'react-router-dom'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          rememberMe: false
        };

        if(localStorage["userName"] !="undefined" && localStorage["userName"] != "null"){
            this.state.rememberMe = true;
            this.state.username = localStorage.getItem('userName');
        }        
    }
    
    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        if(e.target.name==="rememberMe"){
            state[e.target.name] = !state[e.target.name];
        }else{
            state[e.target.name] = e.target.value;
        }

        this.setState(state);
        if(state.rememberMe){
            localStorage.setItem('userName',state.username);
        }else{
            localStorage.removeItem('userName')
        }
    }

    onReset(){
        const state = this.state
        state.username='';
        state.password='';
        state.rememberMe=false;
        this.setState(state);
        localStorage['userName'] = null;
    }

     onSubmit = (e, history) => {
        e.preventDefault();
        // get our form data out of state
        const {username, password} = this.state;

        validateUser(username, password)
          .then(response => {
            if (response.data.status === 'success') {
                localStorage.setItem('user', JSON.stringify({
                    name: username,
                    token: response.data.token
                }));
                history.push('\home');
            } else {
                return Promise.reject(response.data.status)
                }
            })
            .catch(function (error) {
                alert(`Error occurred. Message: ${error}`)
            })
      } 
    
    render() {
        const {username, password, rememberMe} = this.state;
        return (
             <Route render={({ history }) => (
                <Form className='form-horizontal' onSubmit={(e)=>(this.onSubmit(e, history))}>
                    <FormGroup row>
                        <Label style={{fontWeight: 'bold'}} htmlFor="username" lg={2} >Email</Label>
                        <Col lg={10}>
                            <Input name="username" required='true' placeholder="Email" value={username} onChange={this.onChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label style={{fontWeight: 'bold'}} htmlFor="password" lg={2}>Password</Label>
                        <Col lg={10}>
                            <Input type="password" name="password" required='true' placeholder="Password" value={password} onChange={this.onChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Label check>
                                <Input type="checkbox" name="rememberMe" checked={rememberMe} onChange={this.onChange} />{' '}
                                Remember me
                        </Label>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Button type="submit" color="primary">Sign in</Button>
                            <Button onClick={this.onReset.bind(this)} className="ml-3">Reset</Button>
                        </Col>
                    </FormGroup>
            </Form>)} />
        );
    }
}