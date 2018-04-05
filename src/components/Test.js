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
      ]
    }
  }
  render() {
    return (
      <div className="Test">
        <h1 className="mb-5">{this.state.title}</h1>
        <form className="quiz" action="" method="POST">
          <div className="quiz__content">
            {
              this.state.quiz.map( (item, i) => {
                return(
                  <div className="quiz__item" key={'quiz-' + i}>
                    <h4>{item.question}</h4>
                    <div className="quiz__item-options">
                      {
                        item.answers.map( (option, option_i) => {
                          let value = `quiz-group-${i}-option-${option_i}`;
                          return(
                            <p className="quiz__item-option" key={value}>
                              <input type="radio" name={`quiz[${i}]`} id={value} value={option}/>
                              <label htmlFor={value}>{option}</label>
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
             <button type="button" className="btn btn-info mr-3">Следующее задание</button>
              <button type="submit" className="btn btn-success">Подтвердить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Test;