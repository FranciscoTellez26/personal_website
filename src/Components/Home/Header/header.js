import React from 'react';

export function Header() {
  return (
    <header className="header">
    <a href="/" className="logo">Portafolio</a>

    <i className='bx bx-menu' id="menu-icon"></i>

    <nav className="navbar">
        <a href="/" style={{ '--i': 1 }} className="activo">Inicio</a>
        <a href="/" >Sobre mí</a>
        <a href="/" >Mis conocimientos</a>
        <a href="/" >Mis practicas</a>
    </nav>
</header>
  )
}