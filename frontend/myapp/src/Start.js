import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div className='StartMain'>
<Link className='Start border-radius shadow-lg btn btn-warning mt-4 mb-3 w-50' to="/myactivity"><h1>START!</h1></Link>
    </div>
  )
}

export default Start