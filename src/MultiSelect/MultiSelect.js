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
        const tableHeaders = [
            'Your Answer',
            'Correct Answer',
            'Choice'
        ];
        const tableCells = props.data.options.map((option, i)=> [
            {
                value: submission[i],
                color: Boolean(option.correct) === submission[i] ? 'cyan' : 'red',
            },
            {
                value: Boolean(option.correct),
                color: 'white',
            },
            {
                value: option.text,
                color: 'white',
            }
        ]);

        const correct = submission.filter((answer, i) => Boolean(props.data.options[i].correct) !== answer).length === 0;

        let feedback = correct ?  props.data.feedback.correct :  props.data.feedback.incorrect

        props.setModal({
            header: feedback.header,
            body: feedback.body,
            tableHeaders: tableHeaders,
            tableCells: tableCells,
            correct: correct
        });
    }
    const [checked, setChecked] = useState(props.data.options.map(x => false));

    const setCheckbox = (i) => {
        setChecked(checked.map((item, j) => i === j ? !item : item))
    }
    console.log(checked);
    return (
        <div className='MultiSelect Select' id='MultiSelect'>
             <h1 className='Question'>
                {props.data.questionText}
            </h1>
            <ul className='List' type="none">
                {
                    props.data.options.map((option, i) => {
                    return <li key={option.text}><input id={`multiselect_${i}`} type="checkbox" onClick={() =>setCheckbox(i)}/><label htmlFor={`multiselect_${i}`}>{option.text}</label></li>
                    })    
                }
            </ul>
            <div className="ButtonContainer">
                <button onClick={()=>handleSubmit(checked)}>Submit</button>
            </div>
        </div>
    )
}

export default MultiSelect