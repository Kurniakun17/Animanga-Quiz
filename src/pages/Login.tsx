import React, { useState } from 'react';

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Login = ({ setUser }: LoginProps) => {
  const [userInput, setUserInput] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(userInput);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <form
        className="flex flex-col bg-[#13192A] gap-6 text-center px-6 py-9 rounded-lg border-b-4 border-b-[#00C8B4] w-[70%] max-w-[600px]"
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <h1 className="font-bold text-2xl">Login</h1>
        <input
          className="rounded-md text-black px-2 py-2 text-xs w-full placeholder:"
          type="text"
          value={userInput}
          onChange={(e) => {
            onChangeHandler(e);
          }}
          placeholder="username"
          required
        />
        <button className="font-bold bg-[#00C8B4] rounded-md py-1 w-full">
          Login
        </button>
      </form>
    </div>
  );
};
