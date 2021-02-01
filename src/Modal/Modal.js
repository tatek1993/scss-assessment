import React from 'react'
import './Modal.scss'
import Correct from '../Images/Correct.js';
import Incorrect from '../Images/Incorrect.js';
const Modal = props => {

    console.log(props.data.tableHeaders);
    return (
        <div className={'feedback'}>
            <div className={`answer ${props.data.correct ? 'correct hvr-pulse-grow' : 'incorrect hvr-icon-buzz-out'}`}>
                <div className='answerHeader'>
                    {
                        props.data.correct ? <Correct/> : <Incorrect/>
                    }
                </div>
                <h1>
                    {props.data.header}
                </h1>
                <p>
                    {props.data.body}
                </p>
                <table>
                    <thead>
                        <tr className='TableHeader'>
                        {props.data.tableHeaders.map(header => {
                            return (<td >{header}</td>);
                        })}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.tableCells.map(row => {
                            return (<tr>
                                {row.map(cell => {
                                    return(<td className={cell.color}>
                                        {typeof cell.value == 'boolean' ? <input type='checkbox' checked={cell.value}/> : cell.value}
                                    </td>)
                                })}
                            </tr>)
                        })}
                    </tbody>
                </table>
                <button onClick={props.onComplete}>OK</button>
            </div>
        </div>
    )
}
export default Modal;