import SignUpForm from '../SignUpForm'
import React from 'react'
import {queryAllByTestId, queryByTestId, render} from '@testing-library/react'

test('Check if the username input in rendered',()=>{
    const {getByLabelText} = render(<SignUpForm/>)
    
    const username = getByLabelText("Username")
    expect(username).toBeTruthy();

})

test('Check if the Phone input in rendered',()=>{
    const {getByLabelText} = render(<SignUpForm/>)
    
    const phone = getByLabelText("Phone")
    expect(phone).toBeTruthy();

})

test('Check if the Email input in rendered',()=>{
    const {getByLabelText} = render(<SignUpForm/>)
    
    const email = getByLabelText("Email")
    expect(email).toBeTruthy();

})

test('Check if the Password input in rendered',()=>{
    const {getByLabelText} = render(<SignUpForm/>)
    
    const password = getByLabelText("Password")
    expect(password).toBeTruthy();

})

test('Check if the Date of Birth input in rendered',()=>{
    const {getByLabelText} = render(<SignUpForm/>)
    
    const dob = getByLabelText("Date of Birth")
    expect(dob).toBeTruthy();

})