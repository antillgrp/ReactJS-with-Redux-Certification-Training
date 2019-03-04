import React from 'react'
import PropTypes from 'prop-types'
import Parser from 'html-react-parser'

const QuestionAnswer = ({entries}) => {

    console.log(entries)

    return (
        <div>
            {
                entries.map((entry,i) => (
                    <div key={"entry"+i}>
                        <fieldset style={{ border:"3px solid black"}}>
                            <big><strong>Question:<a href={entry.share_link}>{Parser(entry.title)}</a></strong></big>
                            <fieldset style={{ border:"3px solid red", backgroundColor:"#FFA07A"}}>
                                {Parser(entry.body)}
                            </fieldset>
                            <big><strong>Answers:</strong></big>
                            {
                                entry.answers.map((answer,i) =>
                                    <div key={"answer"+i}>
                                        <fieldset  style={{ border:"3px solid green", backgroundColor:"#3CB371"}}>
                                            <h3><strong>{Parser(answer.title)}</strong></h3>
                                            {Parser(answer.body)}
                                        </fieldset>
                                        <br/>
                                    </div>
                                )
                            }
                        </fieldset>
                        <br/>
                    </div>
                ))
            }
        </div>
    )
}

QuestionAnswer.propTypes = {
    entries: PropTypes.array.isRequired
}

export default QuestionAnswer
