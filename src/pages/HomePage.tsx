import React from 'react';
import MainLayout from '../Layouts/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Página Principal</h1>
      <p>Bem-vindo ao seu site!</p>
    </MainLayout>
  );
};

export default HomePage;
