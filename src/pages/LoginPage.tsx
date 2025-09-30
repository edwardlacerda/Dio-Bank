import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import Input from '../components/Input';
import Footer from '../Layouts/Footer';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900">
      
      <h1 className="text-7xl text-white font-bold m-10">Dio Bank</h1>
      <form
        onSubmit={handleSubmit}
        className="p-8 m-5 max-w-sm text-white rounded-lg shadow-lg bg-purple-700/50 backdrop-blur-md"
      >
         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <label className="block mb-2">Email</label>
    <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        <label className="block mb-2">Senha</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <Button disabled={!email || !password} type="submit" className="mb-5">Entrar</Button>
      </form>

       <Footer></Footer>
     
    </div>
    
  );
};

export default LoginPage;
