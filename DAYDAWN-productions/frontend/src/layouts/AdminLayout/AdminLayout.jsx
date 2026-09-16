import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './AdminLayout.css';

export const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <Link to={ROUTES.HOME}>DAYDAWN ADMIN</Link>
        </div>
        <nav className="admin-sidebar__nav">
          <Link to="/admin" className="admin-sidebar__link">
            Dashboard
          </Link>
          <Link to="/admin/productions" className="admin-sidebar__link">
            Productions
          </Link>
          <Link to="/admin/inquiries" className="admin-sidebar__link">
            Inquiries
          </Link>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};
