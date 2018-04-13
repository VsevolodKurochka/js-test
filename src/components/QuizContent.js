import React, { Component } from 'react';

class QuizContent extends Component {
	render() {
		return(
			this.props.content.map( (item, i) => {
				return(
					<div className="quiz__item" key={'quiz-' + i}>
						<h4>{item.question}</h4>
						<div className="quiz__item-options">
							{
								item.answers.map( (option, answer_i) => {
									return(
										<p className="quiz__item-option" key={`answer-${answer_i}`}>
											<input 
												type="radio"
												name={`quiz[${i}]`} 
												id={`group-${i}-quiz-${answer_i}`} 
												value={option} 
												onChange={this.props.radioChange}
												/>
											<label htmlFor={`group-${i}-quiz-${answer_i}`}>{option}</label>
										</p>
									)
								})
							}
						</div>
					</div>
				)
			})
		)
	}
}

export default QuizContent;