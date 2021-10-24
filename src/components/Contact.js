import React from 'react'

export default function Contact(props) {
    let mystyle = {
        color:'#fff'
    }
    let mystyle2 = {
        color:'#000'
    }
    return (
        <div className="main">
            <div className="container my-5">
                    <h1 className="text-center" style={props.mode==='dark'?mystyle:mystyle2}>Contact Me</h1>
                    <div className="info text-center">
                        <p style={props.mode==='dark'?mystyle:mystyle2}>It is a react app named as Text Utils. It has various functionality to manipulate text<br/>
                            accorning to need of the user. It has both light and dark mode with react router for<br/> easy transition. This is a colleage project.<br/>
                        <br/>
                        Created by : Shubham bawankar<br/>
                        Email Address : shubhambawankar735@gmail.com<br/>
                        Github link : https://github.com/Shubham56-droid
                        </p>
                    </div>
            </div>
        </div>
    )
}
