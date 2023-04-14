import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar = ({ user, setUser }: NavbarProps) => {
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    setUser('');
    navigate('/');
  };

  return (
    <div className="flex w-full justify-between p-4 bg-[#2D3346] font-bold">
      <h2 className="">Hai, {user}</h2>
      <button className="" onClick={onLogoutHandler}>
        Logout
      </button>
    </div>
  );
};
