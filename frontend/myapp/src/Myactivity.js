import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { global } from './App';

function Myactivity() {
    const {getfrommyactivity}=useContext(global)
    const [progress, setProgress] = useState([]);
    const handleInput = (e) => {
        let { name, value } = e.target;
        setProgress({ ...progress, [name]: value });
    };
  return (
    <div className='MyactivityMain'>
        <div className='Myactivity border shadow'>
            <center>
            <h1 className='Fit text-dark mt-3'>FIT.</h1>
            <table cellPadding={5} onSubmit={(e) => e.preventDefault()} method="POST">
                <tbody>
                    <tr>
                        <td><h1>Enter your progress for today...</h1></td>
                    </tr>
                    <tr>
                        <td><label className='mt-3'>Enter kms:</label></td>
                    </tr>
                    <tr>
                        <td><input name="activitykm" value={progress.activitykm} onChange={handleInput} className='form-control' type="number" placeholder='Enter kms here...'/></td>
                    </tr>
                    <tr>
                        <td><label className='mt-3'>Enter duration in minutes:</label></td>
                    </tr>
                    <tr>
                        <td><input name="activityduration" value={progress.activityduration} onChange={handleInput} className='form-control' type="number" placeholder='Enter duration e.g. (20 mins)'/></td>
                    </tr>
                    <tr>
                        <td><Link onClick={()=>getfrommyactivity(progress)} className='btn btn-dark mt-4 mb-3 w-100' to="/progress">Check Progress</Link></td>
                    </tr>
                    <tr>
                        <td><Link className='btn btn-outline-dark mb-5 w-100' to="/end">END!</Link></td>
                    </tr>
                </tbody>
            </table>
            </center>
        </div>
    </div>
  )
}

export default Myactivity