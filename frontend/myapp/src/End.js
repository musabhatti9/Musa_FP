import React from 'react'
import { Link } from 'react-router-dom'

function End() {
    return (
        <div className='EndMain'>
            <div>
                <h1>Congratulations!</h1>
                <p>Your today's activity has been completed!</p>
                <Link className='btn btn-outline-dark mb-5 w-100' to="/activity">New Activity</Link>
            </div>
        </div>
    )
}

export default End