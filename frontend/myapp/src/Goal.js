import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { global } from './App';

function Goal() {
    const {getfromgoal}=useContext(global)
    const [goal, setGoal]=useState([])
    const handleInput=(e)=>{
        let {name, value}=e.target;
        setGoal({...goal, [name]:value});
    };
  return (
    <div className='GoalMain'>
         <div className='Goal border shadow'>
            <center>
            <h1 className='Fit text-dark mt-3'>FIT.</h1>
            <table cellPadding={5}  onSubmit={(e) => e.preventDefault()} method="POST">
                <tbody>
                    <tr>
                        <td><h1>Enter your goals for today...</h1></td>
                    </tr>
                    <tr>
                        <td><label className='mt-3'>Enter kms:</label></td>
                    </tr>
                    <tr>
                        <td><input name="goalkm" value={goal.goalkm} onChange={handleInput} className='form-control' type="number" placeholder='Enter kms here...'/></td>
                    </tr>
                    <tr>
                        <td><label className='mt-3'>Enter duration in minutes:</label></td>
                    </tr>
                    <tr>
                        <td><input name="goalduration" value={goal.goalduration} onChange={handleInput} className='form-control' type="number" placeholder='Enter duration e.g. (20 mins)'/></td>
                    </tr>
                    <tr>
                        <td><Link onClick={()=>getfromgoal(goal)} className='btn btn-dark mt-4 mb-5 w-100' to="/start">GO!</Link></td>
                    </tr>
                </tbody>
            </table>
            </center>
        </div>
    </div>
  )
}

export default Goal