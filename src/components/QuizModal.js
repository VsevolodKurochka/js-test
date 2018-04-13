import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class QuizModal extends Component {
	
	render(){
		return(
			<div>
				<Modal isOpen={this.props.quizIsOpen} toggle={this.props.toggle}>
					<ModalHeader>Результаты тестов</ModalHeader>
					<ModalBody>
						<div>
							{
								Object.keys(this.props.userAnswers).map( (answerUser, key) => {
									return(
										<p key={`user-answer-${key}`}>Ответ на вопрос №{key}: {this.props.userAnswers[answerUser]}</p>
									)
								})
							}
						</div>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.props.toggle}>Закрыть</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

// onClick={this.props.toggle}
export default QuizModal;