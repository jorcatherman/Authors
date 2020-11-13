import React from 'react'
import { Link } from '@reach/router'

const AuthorMain = () =>{
    return(
        <>
        <div>
<h1>Favorite Authors</h1>
        </div>
        <div>
        <Link to='/author/new'>Add An author</Link>
        </div>
        </>
        
    )
}
export default AuthorMain
