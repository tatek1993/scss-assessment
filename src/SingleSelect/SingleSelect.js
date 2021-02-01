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
        const tableHeaders = [
             'Your Answer',
             'Correct Answer',
             
         ];
         const tableCells = [[
             {
                 value: clickedOption.text,
                 color: clickedOption.correct ? 'cyan' : 'red',
             },
             {
                 value: props.data.options.filter(option => option.correct)[0].text,
                 color: 'white' 
             }
         ]];
     
         let feedback = clickedOption.correct ?  props.data.feedback.correct :  props.data.feedback.incorrect
     
         props.setModal({
             header: feedback.header,
             body: feedback.body,
             tableHeaders: tableHeaders,
             tableCells: tableCells,
             correct: clickedOption.correct
         });
        
    }


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