import React, {useState, useEffect} from 'react'
import './Modal.scss'
import Correct from '../Images/Correct.js';
import Incorrect from '../Images/Incorrect.js';
const Modal = props => {

    return (
                <div className={`feedback ${props.data.correct ? 'correct hvr-pulse-grow' : 'incorrect hvr-icon-buzz-out'}`}>
                    <div className='answer'>
                        <div className='answerHeader'>
                            <Correct/>
                        </div>
                        <h1>
                            {props.data.header}
                        </h1>
                        <p>
                            {props.data.body}
                        </p>
                        <button className='fade' onClick={props.onComplete}>OK</button>
                    </div>
                </div>
    )
}
export default Modal;