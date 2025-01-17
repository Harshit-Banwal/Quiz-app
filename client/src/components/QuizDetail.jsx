// src/components/QuizDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { api } from '../API';

const QuizDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${api}/quizzes/${id}`)
        .then((response) => {
          setQuiz(response.data);
        })
        .catch((error) => {
          console.error('Error fetching quiz:', error);
        });
    };
    fetchData();
  }, [id]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
      <h3>Questions</h3>
      <ul>
        {quiz.questions.map((question, index) => (
          <li key={index}>
            <strong>{question.question}</strong>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizDetail;
