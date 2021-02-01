import React from 'react'
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
        <div className='SingleSelect Select'>
            <h1 className='Question'>
                {props.data.questionText}
            </h1>
            <ol className='List' type="A">
                {
                    props.data.options.map((option) => {
                    return <li key={option.text} onClick={()=>{handleSelect(option)}}>{option.text}</li>
                    })    
                }
            </ol>
            
        </div>
    )
}

export default SingleSelect