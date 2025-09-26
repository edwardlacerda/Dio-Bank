import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // futura chamada da API de login
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      
      <form
        onSubmit={handleSubmit}
        className="bg-grey-900 p-8 rounded-x1 shadow-md w-full max-w-sm text-white"
      >
         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <label className="block mb-2">Email</label>
    <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="w-full px-3 py-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <label className="block mb-2">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          className="w-full px-3 py-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
