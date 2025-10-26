// src/components/Header/Header.jsx

import React from 'react';

// Принимаем title и links через деструктуризацию props
function Header({ title, navLinks }) {
  return (
    <header className="app-header">
      
        <h1>{title}</h1>


        <nav className="header-nav">
            {/* 2. Используем {} для внедрения JS-выражения (map) */}
            {navLinks.map((link) => (
            // 3. Возвращаем тег <a> для каждого объекта 'link'
            <a 
                key={link.id}           // Обязательный уникальный ключ!
                href={link.url}         // Значение href берем из link.url
                className="nav-link"
            >
                {link.text}             {/* Текст ссылки берем из link.text */}
            </a>
            ))}
        </nav>
      
    </header>
  );
}

export default Header;