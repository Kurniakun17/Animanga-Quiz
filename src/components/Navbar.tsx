import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../utils/helpers';

interface NavbarProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar = ({ user, setUser }: NavbarProps) => {
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    clearLocalStorage();
    setUser('');
    navigate('/');
  };

  return (
    <div className="w-full p-4 px-0 bg-[#2D3346] font-bold">
      <div className="flex justify-between w-[90%] m-auto">
        <h2 className="">Hai, {user}</h2>
        <button className="" onClick={onLogoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};
