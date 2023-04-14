import React, { useEffect } from 'react'
import type * as I from '../utils/interfaces' 
import { useNavigate } from 'react-router-dom';

export const Result = ({result, user}: {result: I.resultProps, user: string}) => {
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn();
  }, [])
  
  const isLoggedIn = () => {
    if (user === '') {
      navigate('/');
    }
  };

  return (
    <div className="">
      <h1>{`Correct ${result.correct}`}</h1>
      <h1>{`Wrong ${result.wrong}`}</h1>
      <h1>{`Unanswered ${result.unAnswered}`}</h1>
    </div>
  );
}
