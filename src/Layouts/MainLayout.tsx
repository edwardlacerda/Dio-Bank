import React from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white p-4 font-bold">Texto Header provisório</header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-4 mt-auto">© 2025 Meu Site</footer>
    </div>
  );
};

export default MainLayout;
