import React, {} from 'react'
import './MultiSelect.scss'

// this is a stub for you to develop the following

/*
    PART 2 - OPTIONAL 
    
    Develop a component similar to the single select that allows multiple options to be selected. 

    This will include an ability to toggle each option, and then click a submit button for grading.

    Grading will indicate visually on each option if it was correct or not. This implies 4 states for each button - selected and correct, selected and incorrect, not selected and correct, not selected and incorrect.

    The generic feedback shown in the data is binary - either you got it 100% correct and get the correct feedback, or you don't. 
*/

const MultiSelect = props => {

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
    // function myFunction() {
    //     document.getElementById("MultiSelect").multiple = true;
        
    // }

    return (
        <div className={`MultiSelect`} id={`MultiSelect`}>
             <h1 className={`question`}>
                {props.data.questionText}
            </h1>
            <ul className='list' type="none">
                {
                    props.data.options.map((option) => {
                    return <li onClick={()=>{handleSelect(option)}}><input type="checkbox"/>{option.text}</li>
                    })    
                }
            </ul>
            <button className='fade' onClick={props.onComplete}>OK</button>
        </div>
    )
}

export default MultiSelect