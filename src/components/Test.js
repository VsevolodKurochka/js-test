import React, { Component } from 'react';

import QuizContent from './QuizContent';
import QuizModal from './QuizModal';

import 'bootstrap/dist/css/bootstrap.css';
import './Test.css';

class Test extends Component {
	constructor(){
		super();

		this.state = {
			title: 'Проверка знаний таблицы умножения',
			buttonText: 'Закончить тест',
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
			amountCorrectAnswers: 0,
			modal: false
		}

		this.toggleModal = this.toggleModal.bind(this);

	}

	toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

	quizSubmit = (e) => {
		e.preventDefault();

		let amountCorrectAnswers = 0;

		this.state.quiz.map( (question, i) => {
			
			let numberCorrectAnswer = question.answer;
			let answers = question.answers;
			

			for (let answerUser in this.state.quizAnswers){

				if(this.state.quizAnswers[answerUser] === answers[numberCorrectAnswer].toString() ){

					amountCorrectAnswers = amountCorrectAnswers + 1;

				}

			}

			this.setState({
				amountCorrectAnswers: amountCorrectAnswers
			});

		});

		this.toggleModal();
		
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
						<QuizContent 
							content={this.state.quiz} 
							radioChange={this.radioChange} />
						<QuizModal 
							quizIsOpen={this.state.modal} 
							userAnswers={this.state.quizAnswers} 
							amountCorrectAnswers={this.state.amountCorrectAnswers} 
							quiz={this.state.quiz}
							toggle={this.toggleModal} />
					</div>
					<div className="quiz__footer">
						<button type="submit" className="btn btn-success">{this.state.buttonText}</button>
					</div>
				</form>
				
			</div>
		);
	}
}

export default Test;