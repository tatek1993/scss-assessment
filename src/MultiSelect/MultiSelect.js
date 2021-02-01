import React, {useState} from 'react'
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

    const handleSubmit = submission => {

        if (submission.filter((answer, i) => Boolean(props.data.options[i].correct) !== answer).length == 0) {
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
    const [checked, setChecked] = useState(props.data.options.map(x => false));

    const setCheckbox = (i) => {
        setChecked(checked.map((item, j) => i == j ? !item : item))
    }
    console.log(checked);
    return (
        <div className={`MultiSelect`} id={`MultiSelect`}>
             <h1 className={`question`}>
                {props.data.questionText}
            </h1>
            <ul className='list' type="none">
                {
                    props.data.options.map((option, i) => {
                    return <li><input id={`multiselect_${i}`} type="checkbox" onClick={() =>setCheckbox(i)}/><label for={`multiselect_${i}`}>{option.text}</label></li>
                    })    
                }
            </ul>
            <div className="button-container">
                <button onClick={()=>handleSubmit(checked)}>Submit</button>
            </div>
        </div>
    )
}

export default MultiSelect