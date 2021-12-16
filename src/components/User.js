import React from 'react'
import './User.css'

const User = ( {description, name, stars, language} ) => {
    return (
        <div className='user'>
            <h3 className='username'>{name}</h3>
            <p>Descrição: <span>{description}</span></p>
            <p>Estrelas: <span>{stars}</span></p>
            <p>Linguagem mais utilizada: <span>{language}</span></p>
        </div>
    )
}

export default User
