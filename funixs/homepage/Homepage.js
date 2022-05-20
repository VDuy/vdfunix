import React from 'react';
import "./homepage.css";
const Homepage = () => {
    return (
        <div className='body'>
            <div className='nav' >
                <ul>
                    <li><>BRAND</></li>
                    {/* <li><a href="#">BROWSER</a></li>
                    <li><a href="#">SIGN UP</a></li>
                    <li><a href="#">LOG IN</a></li>
                    <li><a href="#">HELP</a></li> */}
                </ul>
            </div>
            <div id="banner">
                <img
                    src="https://s3.amazonaws.com/codecademy-content/courses/ltp/img/lodging.png"
                    alt="banner"
                />
                <h1>Find a place to stay.</h1>
                <p>Rent from people in over 34,000 cities and 192 countries.</p>
            </div>

            <div id="main-content">
                <h2>Neighborhood Guides</h2>
                <p>
                    Not sure where to stay? We've created neighborhood guides for cities all
                    around the world.
                </p>
                <div id="table-img">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-6 ">
                                    <img
                                        src="https://s3.amazonaws.com/codecademy-content/courses/ltp/img/mexico-city.png"
                                        alt="mexico"
                                    />
                                </div>
                                <div className="col-6">
                                    <img
                                        src="https://s3.amazonaws.com/codecademy-content/courses/ltp/img/ny.png"
                                        alt="ny"
                                    />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-6">
                                    <img
                                        src="https://s3.amazonaws.com/codecademy-content/courses/ltp/img/tokyo.png"
                                        alt="tokyo"
                                    />
                                </div>

                                <div className="col-6">
                                    <img
                                        src="https://s3.amazonaws.com/codecademy-content/courses/ltp/img/paris.png"
                                        alt="paris"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <img
                                src="https://s3.amazonaws.com/codecademy-content/courses/ltp/img/invite.png"
                                alt="invite"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer' >
                <div className="row">
                    <div className="col-4 ">
                        <h4>Travel</h4>
                        <p>
                            From apartments and rooms to treehouse and boats: stay in unique space
                            in 192 countries.
                        </p>
                        <p> See how to travel on Airbnb </p>
                    </div>

                    <div className="col-4 ">
                        <h4>Host</h4>
                        <p>
                            Renting out your unused space couic pay your bils or fund your next
                            vacation.
                        </p>
                        <p>Learn more about hosting</p>
                    </div>
                    <div className="col-4 ">
                        <h4>Trust and Safety</h4>
                        <p>
                            From Verified ID to our worldwide customer support team, we've got
                            your back
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;