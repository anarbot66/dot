import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarStyle = {
  position: 'fixed',
  top: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
  height: 63,
  width: 530,
  background: '#1D1D1F',
  borderRadius: 50,
  display: 'inline-flex',
  gap: 30,
  alignItems: 'center',
  justifyContent: 'center',
};

const linkStyle = ({ isActive }) => ({
  color: isActive ? 'white' : '#4C4C4C',
  fontSize: 14,
  fontWeight: 400,
  fontFamily: 'SF Pro Text',
  textDecoration: 'none',
  userSelect: isActive ? 'auto' : 'none',

  // вот здесь добавляем плавный переход цвета
  transition: 'color 0.3s ease-in-out',
});

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <NavLink to="/" style={linkStyle}>#WEAREDOT</NavLink>
      <span style={{ color: '#505050', fontSize: 20 }}>/</span>
      <NavLink to="/project" style={linkStyle}>Проект</NavLink>
      <span style={{ color: '#505050', fontSize: 20 }}>/</span>
      <NavLink to="/team" style={linkStyle}>Команда</NavLink>
      <span style={{ color: '#505050', fontSize: 20 }}>/</span>
      <NavLink to="/news" style={linkStyle}>Новости</NavLink>
    </nav>
  );
}