import React, {useState, useEffect} from 'react'
import './SingleSelect.scss'

const SingleSelect = props => {

    /*

        This component is built for you. Just skin it with the scss file. See the example.png. 

        Suggestions:
            rollover states on buttons.
            staging animations.
            make feedback a modal window.

    */

    const handleSelect = clickedOption => {
        if (clickedOption.correct) {
            props.setModal({
                header: props.data.feedback.correct.header,
                body: props.data.feedback.correct.body,
                correct: true
            });
        } else {
            props.setModal({
                header: props.data.feedback.incorrect.header,
                body: props.data.feedback.incorrect.body,
                correct: false
            });
        }
    }

    // const selectedOption = props.data.options[selected]

    return (
        <div className={`SingleSelect`}>
            <h1 className={`question`}>
                {props.data.questionText}
            </h1>
            <ol className='list' type="A">
                {
                    props.data.options.map((option) => {
                    return <li onClick={()=>{handleSelect(option)}}>{option.text}</li>
                    })    
                }
            </ol>
            
        </div>
    )
}

export default SingleSelect