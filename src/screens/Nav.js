import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar =() =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }; 
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => {
            window.removeEventListener("scroll",transitionNavBar)
        }
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}` }> 
            <div className="nav__contents"> 
                <img
                    className="nav__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                    />
                    <img className="nav__avatar"
                    src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
                    alt=""
                    />
            </div>
        </div>
    );
}

export default Nav
