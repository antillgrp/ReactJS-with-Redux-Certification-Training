import React, { Component } from 'react';

export default class ColorFeedBackForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentFB: '',
            currentColor:'Red',
            feedbacks: [],
        };
    }
    render() {
        
        let selOptStyle = color => ({
            fontWeight:'900',
            background:color,
        });
        
        return (
            <div>
                <form onSubmit={
                    e => {
                        e.preventDefault();
                        const {
                            currentFB,
                            currentColor,
                            feedbacks,
                        } = this.state;
                        if (currentFB === "") {
                            alert("Does not accept empty feed backs.");
                            return;
                        }
                        feedbacks.push({feedback: currentFB, color: currentColor});
                        this.setState({
                            currentFB: '',
                            currentColor:'Red',
                            feedbacks: feedbacks,
                        });
                    }
                }>
                    <label>
                        Add Colored FeedBack:
                    <select
                        value={this.state.currentColor}
                        onChange={e => this.setState({currentColor:e.target.value})}
                        style={{
                            ...selOptStyle(this.state.currentColor),
                            margin:'5px 5px 5px 5px',
                        }}
                    >
                        {
                            ['Red','Green','Blue','Orange'].map(color =>
                                <option style={selOptStyle(color)}>
                                    {color}
                                </option>
                            )
                        }
                    </select>
                    <br/>
                    <textarea cols={40} rows={5}
                        value={this.state.currentFB}
                        onChange={e => this.setState({currentFB:e.target.value})}
                    />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <h3>FeedBacks:</h3>
                {
                    this.state.feedbacks.map(({feedback,color},index) =>
                        <p
                            key={index}
                            style={{
                                fontWeight:'900',color:color,
                                width:'50vmin',
                                wordBreak: 'break-all',
                            }}
                            cols={40} rows={5}
                        >
                            {index+1}.-{feedback}
                        </p>
                    )
                }
            </div>
        );
    }
}
