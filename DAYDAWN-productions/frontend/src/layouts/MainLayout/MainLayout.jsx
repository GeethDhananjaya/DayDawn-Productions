import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { PageContainer } from '../../components/layout/PageContainer';
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <PageContainer withHeaderPadding={false}>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};
