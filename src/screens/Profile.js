import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import '../styles/Profile.css'
import Nav from './Nav'

function Profile() {

    const user = useSelector(selectUser);
    return (
        <div className="profile"> 
            <Nav />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img 
                        src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
                        alt=""
                    />
                    <div className="profile__details">
                        <h2>{user.email}</h2>

                        <div className="profile__plans">
                            <h3>Plans</h3>
                            
                            <button onClick={()=>auth.signOut()} className="profile__signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
