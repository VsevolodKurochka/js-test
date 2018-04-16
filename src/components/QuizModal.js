import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class QuizModal extends Component {

	// arrayReverseObj = (obj) => {
	// 	let newArray = [];

	// 	Object.keys(obj)
	// 		.map( (key, i) => {
	// 			newArray.push( {
	// 				[key]: obj[key]
	// 			});
	// 		});

	// 	console.log(newArray);
	// 	newArray.reverse();
	// 	console.log(newArray);
	// 	return newArray;
	// }

	
	render(){
		return(
			<div>
				<Modal isOpen={this.props.quizIsOpen} toggle={this.props.toggle} size="lg">
					<ModalHeader>
						<p>Кол-во правильных ответов: {this.props.amountCorrectAnswers}</p>
					</ModalHeader>
					<ModalBody>
						<table className="table">
							<thead>
								<tr>
									<th style={{width: 35 + '%'}}>Вопрос</th>
									<th>Статус</th>
									<th>Ответ пользователя</th>
									<th>Правильный ответ</th>
								</tr>
							</thead>
							<tbody>
								{
									this.props.quiz.map( (quizChildren, quizKey) => {
										let userAnswer = this.props.userAnswers[`quiz[${quizKey}]`];
										let correctAnswer = quizChildren.answers[quizChildren.answer];

										let comparsion = (userAnswer === correctAnswer.toString() ) ? 'check' : 'remove';
										return(
											<tr key={`quiz-answer-${quizKey}`}>
												<td>{quizChildren.question}</td>
												<td>
													<i className={`fa fa-${comparsion}`}></i>
												</td>
												<td>{userAnswer}</td>
												<td>{correctAnswer}</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.props.toggle}>Закрыть</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

// onClick={this.props.toggle}
export default QuizModal;