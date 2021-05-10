import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './Input'

export class Form extends Component {

    state = {
        data: {},
        errors: {}
    }


    validate = () => {
        const options = { abortEarly: false }
        const { error } = Joi.validate(this.state.data, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message
            return errors
        }
    }

    //validate single input field
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        //get the sub schema of the schema 
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema)
        return error ? error.details[0].message : null;
    }

    handleSubmit = e => {
        //prevent load whole page
        e.preventDefault();
        const errors = this.validate();
        
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSumbit()

    };

    handleChange = ({ currentTarget: input }) => {

        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButton(label) {
        return <button disabled={this.validate()}  className="btn btn-primary btn-block">{label}</button>
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;
        return (<Input type={type} name={name} value={data[name]} label={label} error={errors[name]} onChange={this.handleChange} />);
    }
}

export default Form
