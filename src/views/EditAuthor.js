import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import AuthorForm from '../components/AuthorForm'

const EditAuthor = props =>{
    const { id } = props;

    const [author, setAuthor] = useState({
        firstName: '',
        lastName: ''
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: ''
    })
    const[bigError, setBigError] = useState(false) //why do we have big error?
    const changeHandler = e => {
        setAuthor({
            ...author,
            [e.target.firstName]: e.target.value,
            [e.target.lastName]: e.target.value
        })
    }
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response =>setAuthor(response.data.data))
        .catch(err => setBigError(true))
    }, [id])

    const submitHandler = e =>{ // update function
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/authors/${id}`, author)
        .then(response =>{
            if(response.data.message === "success"){
                navigate('/');
            } else{
                setErrors(response.data.data.errors)
            }
        })
        .catch(err => setBigError(true))
    }
    const deleteAuthor = e =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(reponse=>navigate('/'))
        .catch(err=> setBigError(true))
    }
    return(
        <div>
            {
                bigError ?
                <h1>Something really went down... uh oh....</h1>
                :
                <>
                <h3>Edit this author</h3>
                <AuthorForm 
                    author = {author}
                    errors={errors}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                    action="Update"
                    deleteHandler={deleteAuthor}
                />
                </>
            }
        </div>
    )
}
export default EditAuthor;