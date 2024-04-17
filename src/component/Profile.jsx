import React from 'react'
import '../Styles/profile.css'
import { MdLocationPin } from "react-icons/md";


function Profile({ data }) {

    const { name, login, avatar_url, html_url, location, bio, following, created_at, public_repos, repos_url } = data

    const date = new Date(created_at);

    return (
        <>
            <div className="profile">
                <div className="to card-width" >
                    <div className="img">
                        <img src={avatar_url} className="img-st" alt="userImage" />
                    </div>
                    <div className="card-body">
                        <a href={html_url} className='tit'><h5 className="card-title" >{name != null ? name : login}</h5></a>
                        <p className='bio'>{bio}</p>
                        <div className="loc">
                            <div className="location">
                                <h6><MdLocationPin className='icon-location' />
                                    {location != null ? location : 'Tracking'}</h6>
                            </div>
                            <div className="follow">
                                <h6>Following {following}</h6>
                            </div>
                        </div>
                        <div className='repo'>
                            <h6 >Total Repo {public_repos}</h6>
                        </div>
                        <div className='joinined'>
                            <h6>Joined on {date.getDate()}-{date.getMonth()}-{date.getFullYear()}</h6>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile