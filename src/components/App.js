import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";




function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  function deleteQuestion(id) {
    const newQuestions = questions.filter((q) => q.id !== id);
    setQuestions(newQuestions);
  
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) {
          console.log('Question deleted successfully.');
        } else {
          console.log('Error deleting question.');
        }
      })
      .catch((error) => {
        console.error('Error deleting question:', error);
      });
  }
  
  {page === 'Form' ? <QuestionForm /> : <QuestionList questions={questions} onDeleteQuestion={deleteQuestion} />}



 return (
    <main>
      <QuestionList questions={questions} />
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
