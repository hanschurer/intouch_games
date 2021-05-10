import {React,useState} from 'react'
import Form from './Form'
import Confirmation from './Confirmation'
import Joi from 'joi-browser'

export class SignUpForm extends Form {

    state = {
        data: {
            username: '',
            password: '',
            email: '',
            phone: '',
            DOB: ''
        },
        errors: {},
        showConfirmation:false
    };


    validateAge = () => {
        const now = Date.now();
        return new Date(now - (1000 * 60 * 60 * 24 * 365 * 18));
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().min(6).max(15).label('Password'),
        email: Joi.string().email().required().label('Email'),
        phone: Joi.string().required().min(11).max(11).label('Password'),
        DOB: Joi.date().required().max(this.validateAge()).label('Date of Birth').error(errors => {
            return {
                message: 'Minimum age of 18 years old is required'
            }
        })
    }

    doSumbit = () => {
        this.setState({showConfirmation:true})
        //Call the server
        console.log(this.state.data);
    }

    handleClose=()=>{
        this.setState({showConfirmation:false})
    }




    render() {


        return (
            <div>
                <h1 className="text-center">Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('phone', 'Phone')}
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('DOB', 'Date of Birth', 'date')}
                    {this.renderButton("Sign Up")}
                </form>
                <Confirmation show={this.state.showConfirmation} handleClose={this.handleClose} handleShow={this.handleShow} data={this.state.data} />
            </div>
        )
    }
}

export default SignUpForm
