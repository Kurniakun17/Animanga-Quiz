import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Miscbar } from '../components/Miscbar';

interface HomeProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}
export const Home = ({ user, setUser }: HomeProps) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user === '') {
  //     navigate('/');
  //   }
  // }, []);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="flex flex-col gap-4 w-[80%] m-auto ">
        <Miscbar></Miscbar>
        <div className="flex items-center text-center bg-[#2D3346] h-[25vh] rounded-lg px-4">
          <h3 className='w-full'>Hai Anime apa yang menurutmu</h3>
        </div>
      </div>
    </div>
  );
};
