import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { global } from './App';

function Activity() {
    const {getperson}=useContext(global)
    const [person, setPerson] = useState([])
    const handleInput = (e) => {
        let { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    };

    return (
        <div className='ActivityMain'>
            <div className='Activity border shadow'>
                <center>
                    <h1 className='Fit text-dark mt-3'>FIT.</h1>
                    <table cellPadding={5} onSubmit={(e) => e.preventDefault()} method="POST">
                        <tbody>
                            <tr>
                                <td><label>Enter your name:</label></td>
                            </tr>
                            <tr>
                                <td><input size={100} name="name" value={person.name} onChange={handleInput} className='form-control' type="text" placeholder='Enter name here...' /></td>
                            </tr>
                            <tr>
                                <td><label className='mt-3'>Enter your description:</label></td>
                            </tr>
                            <tr>
                                <td><input name="description" value={person.description} onChange={handleInput} className='form-control' type="text" placeholder='Enter description here...' /></td>
                            </tr>
                            <tr>
                                <td><label className='mt-3'>Enter your activity type:</label></td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="activitytype" value={person.activitytype} onChange={handleInput} className='form-control'>
                                        <option selected value="placeholder" disabled>Please choose an option</option>
                                        <option value="Running">Running</option>
                                        <option value="Cycling">Cycling</option>
                                        <option value="Swimming">Swimming</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td><Link onClick={()=>getperson(person)} className='btn btn-dark mt-4 mb-3 w-100' to="/goal">Start</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
    )
}

export default Activity