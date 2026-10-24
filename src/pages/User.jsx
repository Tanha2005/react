import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const user = [
        { id: 1, name: "tanha", gmail: "tanha@gmail.com", age: 20 },
        { id: 2, name: "tanha1", gmail: "tanha1@gmail.com", age: 21 },
        { id: 3, name: "tanha2", gmail: "tanha2@gmail.com", age: 22 },
        { id: 4, name: "tanha3", gmail: "tanha3@gmail.com", age: 23 },
    ]
    return (
        <>
            {user.map((data) => <div key={data.id}>
                <Link to={`/user/${data.id}`}><h1>{data.name}</h1></Link>
            </div>)}
        </>
    )
}

export default User
