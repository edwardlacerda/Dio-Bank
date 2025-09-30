import React from 'react';
import type { ReactNode } from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';  

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <main className="flex-1 p-4">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
