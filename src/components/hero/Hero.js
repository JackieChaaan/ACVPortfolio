import React from 'react';
import './Hero.css';
import Skillsmob from './Skillsmob';


function Hero() {
    return (
        <div className='Hero-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7">
                        <div className="profle-info">
                            <h2>Hallo , <span className='text-color'>It's me</span></h2><br />
                            <h1>Abel C Varghese</h1>
                            <h3>And , I'm a <span className='text-color'> React Js Developer</span></h3>
                            <h5>
                                Skills : <Skillsmob />
                            </h5>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5">
                        <div className="profile-pic">
                            <div className="container-fluid">
                                <div className="wrapper">
                                    <div className="pic-wrapper">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
