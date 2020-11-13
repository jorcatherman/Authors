import React, { useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';
import { navigate } from '@reach/router';

const NewAuthor = () => {
    const [author, setAuthor] = useState({
        firstName: '',
        lastName: ''
    });
    const [errors, setErrors] = useState({
        firstName:'',
        lastName: ''
    });
    const [bigError, setBigError] = useState(false);

    const changeHandler = e => {
        setTruck({
            ...author,
            [e.target.firstName]: e.target.value,
            [e.target.lastName]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", author)
            .then(response => {
                if(response.data.message === "success"){
                    navigate("/");
                } else {
                    setErrors(response.data.data.errors);
                }
            })
            .catch(err => setBigError(true));
    }

    return (
        <div>
            {
                bigError ?
                <h1>Something has just gone terribly wrong...</h1>
                :
                <>
                <h3>Add a new author:</h3>
                <AuthorForm
                    author={author}
                    errors={errors}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                    action="Submit"
                />
                </>
            }
            
        </div>
    )
}

export default NewAuthor
