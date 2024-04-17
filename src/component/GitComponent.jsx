import React from 'react'
import '../Styles/git.css'
import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { getprofile } from '../Service/username'
import Profile from './Profile'

function GitComponent() {
    const [userName, setUserName] = useState('ajiththeerthiya')
    const [userData, setUserData] = useState(null)

    function userProfile() {
        getprofile(userName).then((response) => {
            setUserData(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    useEffect(() => {
        userProfile()
    }, [])

    function submitHandler() {
        userProfile()
    }
    return (
        <>
            <div className="container">
                <div className="group min-vh-20">
                    <div className="field d-flex justify-content-center mt-5">
                        <div>
                            <input
                                type="text"
                                className='form-control con'
                                placeholder='Enter GitHub UserName'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='search'>
                            <button
                                className='btn btn-danger search1'
                                onClick={submitHandler}
                            >Search <FaSearch /></button>
                        </div>
                    </div>
                </div>
                {userData != null ? <Profile data={userData} /> : null}
            </div>

        </>
    )
}

export default GitComponent