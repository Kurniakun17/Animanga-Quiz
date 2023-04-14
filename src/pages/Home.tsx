import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Miscbar } from '../components/Miscbar';
import { Loading } from '../components/Loading';
import { QuizOptions } from '../components/QuizOptions';
import type * as I from '../utils/interfaces';
import { fetchQuestion } from '../utils/helpers';
import he from 'he';

interface HomeProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<I.resultProps>>;
}

export const Home = ({ user, setUser, setResult }: HomeProps) => {
  const [datas, setDatas] = useState<I.QuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const navigate = useNavigate();

  const isLoggedIn = () => {
    if (user === '') {
      navigate('/');
    }
  };

  useEffect(() => {
    isLoggedIn();
    void (async () => {
      setDatas(await fetchQuestion());
    })();
  }, []);

  const isEnded = () => {
    if (questionIndex === 9) {
      navigate('/result');
    }
  };

  const isTimeOut = () => {
    navigate('/result');
  }

  if (datas.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="flex flex-col gap-4 w-[80%] max-w-[800px] m-auto">
        <Miscbar questionIndex={questionIndex} isTimeOut={isTimeOut}></Miscbar>
        <div className="flex items-center text-center bg-[#2D3346] h-[25vh] rounded-lg px-4">
          <h3 className="w-full font-bold">
            {he.decode(datas[questionIndex].question)}
          </h3>
        </div>
      </div>
      <QuizOptions
        {...datas[questionIndex]}
        setQuestionIndex={setQuestionIndex}
        setResult={setResult}
        isEnded={isEnded}
      ></QuizOptions>
    </div>
  );
};
