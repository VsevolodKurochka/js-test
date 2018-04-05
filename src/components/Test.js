import React, { Component } from 'react';
import './Test.css';
class Test extends Component {
  constructor(){
    super();
    this.state = {
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
      ]
    }
  }
  render() {
    return (
      <div className="Test">
        <form className="quiz">
          {
            this.state.quiz.map( (item, i) => {
              return(
                <div className="quiz__item" key={'quiz-' + i}>
                  <h4>{item.question}</h4>
                  <div className="quiz__item-options">
                    {
                      item.answers.map( (option, option_i) => {
                        return(
                          <p className="quiz__item-option" key={`quiz-group-${i}-option-${option_i}`}>
                            <input type="radio" name={`quiz[${i}]`} id={`quiz-group-${i}-option-${option_i}`} />
                            <label>{option}</label>
                          </p>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
          <button type="button" className="btn btn-primary">Подтвердить</button>
        </form>
      </div>
    );
  }
}

export default Test;