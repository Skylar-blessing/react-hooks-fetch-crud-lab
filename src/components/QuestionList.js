import React from "react";



function QuestionList({ questions, onDeleteQuestion })


{
  return (
    <div>
      
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h2>{question.prompt}</h2>
            <ul>
              {question.answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
            <button onClick={() => onDeleteQuestion(question.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default QuestionList;
