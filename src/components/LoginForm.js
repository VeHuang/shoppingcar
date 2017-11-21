import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {validateUser} from '../api/login'
import { Route } from 'react-router-dom'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''
        };
    }
    
    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

     onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const test = this.props;
        const {username, password} = this.state;

        validateUser(username, password)
          .then(response => {
            if (response.data.status === 'success') {
                localStorage.setItem('user', JSON.stringify({
                    name: username,
                    token: response.data.token
                }));
                this.props.history.push('/home');
            } else {
                return Promise.reject(response.data.status)
                }
            })
            .catch(function (error) {
                alert(`Error occurred. Message: ${error}`)
            })
      } 
    
    render() {
        const {username, password} = this.state;
        return (
             <Route render={({ history }) => (
                <Form className='form-horizontal' onSubmit={this.onSubmit}>
                    <FormGroup row>
                        <Label style={{fontWeight: 'bold'}} htmlFor="username" lg={2} >Email</Label>
                        <Col lg={10}>
                            <Input name="username" id="username" placeholder="Email" value={username} onChange={this.onChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label style={{fontWeight: 'bold'}} htmlFor="password" lg={2}>Password</Label>
                        <Col lg={10}>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={this.onChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Remember me
                        </Label>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Button type="submit" color="primary">Sign in</Button>
                            <Button type="reset" className="ml-3">Reset</Button>
                        </Col>
                    </FormGroup>
            </Form>)} />
        );
    }
}