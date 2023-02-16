import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Progress() {
    const date = Date();
    //fetch api data to show in react app

    const [data, setdata] = useState([])
    async function getapi() {
        const response = await fetch('http://localhost:8000/show')
        const data = await response.json();
        setdata(data)
    }
    useEffect(() => {
        // async function getapi() {
        //     const response = await fetch('http://localhost:8000/show')
        //     const data = await response.json();
        //     setdata(data)
        // }
        getapi()
    }, [])

    //delete a user
    const deletedata = async (id) => {
        await fetch("http://localhost:8000/delete/" + id, {
            method: "DELETE"
        });
        getapi();
        // alert("Acrivity has been deleted")
    }
    return (
        <div className='container Progress'>
            {data.map((person, k) => {
                return (
                    <div key={k} className="card text-center shadow">
                        <div className="card-header">{date}</div>
                        <div className="card-body">
                            <h1 className='Fit text-dark mt-3'>FIT.</h1>
                            <h3 className="card-title">Hi {person.name}!</h3>
                            <p className="card-title">You are <b>{person.activitytype}</b></p>
                            <h5 className="card-title">Goals</h5>
                            <p className="card-title">Goal In kms: {person.goalkm}</p>
                            <p className="card-title">Goal In mins: {person.goalduration}</p>
                            <h5 className="card-title">Progress</h5>
                            <p className="card-title">Progress In kms: {person.activitykm}</p>
                            <p className="card-title">Progress In mins: {person.activityduration}</p>
                            <p className="card-text">In kms:</p>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: `${(person.activitykm / person.goalkm) * 100}%` }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <p className="card-text">Duration:</p>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: `${(person.activityduration / person.goalduration) * 100}%` }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <Link onClick={() => deletedata(person._id)} className='btn btn-danger mt-4 mb-3 w-100' to="/end">END!</Link>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default Progress