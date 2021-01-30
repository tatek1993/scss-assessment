const Modal = props => {


    return (
        selected > -1 &&
        <div className={`feedback ${selectedOption.correct ? 'correct hvr-pulse-grow' : 'incorrect'}`}>
            <div className='answer'>
                <h1>
                    {selectedOption.correct ?
                        props.data.feedback.correct.header
                    :
                        props.data.feedback.incorrect.header
                    }
                </h1>
                <p>
                    {selectedOption.correct ?
                        props.data.feedback.correct.body
                    :
                        props.data.feedback.incorrect.body
                    }
                </p>
                <button className='fade' onClick={props.onComplete}>OK</button>

            </div>
        </div>
    )
}
export default Modal;