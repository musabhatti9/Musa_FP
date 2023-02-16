import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='Register'>
            <div className="Card card p-3 shadow p-3  bg-white rounded " id='card-body'  >
                <div className="card-body d-flex flex-column ">
                    <h1 className="card-title text-center mb-3">FIT.</h1>
                    <table cellPadding={3}>
                        <tbody>
                        <tr><label>Enter Name:</label></tr>
                        <tr><td><input type="text" className="form-control  m-auto" placeholder="Enter name" /></td></tr>
                        <tr><td><label className='mt-3'>Enter Description:</label></td></tr>
                        <tr><td><input type="text" className="form-control" placeholder="Enter description" /></td></tr>
                        <tr><td><label className='mt-3'>Enter Activity Type:</label></td></tr>
                        <tr><td><input type="text" className="form-control" placeholder="Enter activity" /></td></tr>
                        </tbody>
                        </table>
                    <div className="form-group form-check mt-3">
                    </div>
                    <Link className="btn btn-dark" aria-current="page" to="/">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Register