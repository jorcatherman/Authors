import React from 'react'
import { Link } from '@reach/router'

const AuthorForm = props => {
    const { author, changeHandler, submitHandler, deleteHandler, action }  = props;
    const { firstName, lastName }  = author;
    return (
        <form onSubmit = {submitHandler}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type='text' name='firstName' onChange = { changeHandler } value={firstName}/>
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type='text' name='lastName' onChange = { changeHandler } value={lastName}/>
        </div>
        {
            action === 'Update' ?
            <input type='button' value='Delete' onClick={ deleteHandler }/>
            :''
        }
        
        <Link to ='/'><input type='button' value='Cancel'/></Link>
        <input type='submit' value = { action }/>
        </form>
        
    )
}

export default AuthorForm
