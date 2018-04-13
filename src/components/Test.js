import React, { Component } from 'react';
import './Test.css';
class Test extends Component {
	constructor(){
		super();

		this.state = {
			title: 'Проверка знаний таблицы умножения',
			quiz: [
				{
					question: '4x3=?',
					answers: [12, 13, 14, 15],
					answer: 0
				},
				{
					question: '1x3=?',
					answers: [2, 3, 5, 1],
					answer: 1
				},
				{
					question: '2x2=?',
					answers: [4, 11, 8, 5],
					answer: 0
				}
			],
			quizAnswers: [],
			correctAnswers: []
		}

	}

	quizSubmit = (e) => {
		e.preventDefault();

		let amountCorrectAnswers = 0;

		for (let answer_user in this.state.quizAnswers){
			//console.log(`User Answers: ${this.state.quizAnswers[answer_user]}`);
			console.log( `Ответы пользователя: ${this.state.quizAnswers[answer_user]}` );

		}

		console.log('--------------------------');

		this.state.quiz.map( (question, i) => {
			
			let numberCorrectAnswer = question.answer;

			let answers = question.answers;

			console.log(`Правильные ответы на вопросы: ${answers[numberCorrectAnswer]}`);

			//if(answers[numberCorrectAnswer])

			

			for (let answerUser in this.state.quizAnswers){

				if(this.state.quizAnswers[answerUser] == answers[numberCorrectAnswer]){

					amountCorrectAnswers++;
					
				}

			}

		});

		console.log(`Вы правильно ответили на ${amountCorrectAnswers} вопроса.`);

		// for(let answer_correct in this.state.quiz){
		// 	let answers = this.state.quiz[answer_correct].answers;
		// 	let number = this.state.quiz[answer_correct].answer;
			
		// 	console.log(`Правильные ответы на вопросы: ${answers[number]}`);
		// }


		
	}


	radioChange = (e) => {

		let nextState = Object.assign({}, this.state.quizAnswers, { [e.target.name]: e.target.value} );
		this.setState({
			quizAnswers: nextState
		});
	}

	render() {
		return (
			<div className="Test">
				<h1 className="mb-5">{this.state.title}</h1>
				<form className="quiz" onSubmit={this.quizSubmit} id="quiz">
					<div className="quiz__content">
						{
							this.state.quiz.map( (item, i) => {
								return(
									<div className="quiz__item" key={'quiz-' + i}>
										<h4>{`№${i}: ${item.question}`}</h4>
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
																onChange={this.radioChange}
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
						}
					</div>
					<div className="quiz__footer">
							<button type="submit" className="btn btn-success">Подтвердить</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Test;