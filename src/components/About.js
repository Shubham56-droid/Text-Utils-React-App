import React,{useState} from 'react'

export default function About(props) {

 
    /* ---------------Dark mode functionality---------------- */

    let mystyledark1 = {
        color:'#fff',
        backgroundColor:'#3A3B3C'
    }

    let mystyledark2 = {
        color:'#fff',
        backgroundColor:'#000',
        TextDecoderation: 'none',
        fontWeight:'Bold'
    }


    /*------------------------- light mode functionality------------- */
    let mystyleLight1 = {
        color:'#000',
        background:'linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)'
    }
    let mystyleLight2 = {
        color:'#000',
        backgroundColor:'#fff',
        TextDecoderation: 'none',
        fontWeight:'500'
    }
  

    return (
        <div className="main py-4" id="main" style={props.mode==='dark'?mystyledark1:mystyleLight1}>
            <h1 className="text-center">About Us</h1>
        <div className="container">
        <div className="accordion" id="accordionExample" >
        <div className="accordion-item"  style={props.mode==='dark'?mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acc">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={props.mode==='dark'?mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingTwo">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the  .accordion-body  , though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={props.mode==='dark'?mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingThree">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the  .accordion-body  , though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
