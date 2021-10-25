import React from 'react'

export default function About(props) {

 
    /* ---------------Dark mode functionality---------------- */

    let mystyledark1 = {
        color:'#fff',
        backgroundColor:'transparent'
    }
    // linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)
    let mystyledark2 = {
        color:'#fff',
        backgroundColor:'#000',
        TextDecoderation: 'none',
        fontWeight:'Bold'
    }


    /*------------------------- light mode functionality------------- */
    let mystyleLight1 = {
        color:'#000',
        background:'transparent'
    }

    // linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)
    let mystyleLight2 = {
        color:'#000',
        backgroundColor:'#fff',
        TextDecoderation: 'none',
        fontWeight:'500'
    }
  

    return (
        <div className="main py-4" id="main" style={props.mode==='dark'?mystyledark1:mystyleLight1}>
            <h1 className="text-center">About App</h1>
        <div className="container">
        <div className="accordion" id="accordionExample" >

        <div className="accordion-item"  style={props.mode==='dark'?mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acc">
                Analyse Your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.
                </strong>
            </div>
            </div>
        </div>



        <div className="accordion-item"  style={props.mode==='dark'?mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acc">
                Free To Use
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.
                </strong>
            </div>
            </div>
        </div>



        <div className="accordion-item"  style={props.mode==='dark'?mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acc">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>
                    This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
                </strong>
            </div>
            </div>
        </div>


    
       
        </div>
        </div>
        </div>
    )
}
