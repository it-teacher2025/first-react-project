// src/App.jsx

// 1. Импортируем компоненты из их новых папок
import Header from './components/Header/Header.jsx'; 
import MainContent from './components/MainContent/MainContent.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  // Данные для Header
  const navItems = [
    { id: 1, text: 'Главная', url: '/' },
    { id: 2, text: 'О нас', url: '/about' },
    { id: 3, text: 'Контакты', url: '/contact' },
  ];
  
  return (
    <div className="app-layout">
      
      {/* 2. Передача Props в Header */}
      <Header title="Мой Первый React-Проект" navLinks={navItems} />
      
      {/* 3. Передача Props и children в MainContent */}
      <MainContent heading="Добро пожаловать!" >
        {/* Весь этот JSX передается в MainContent как children */}
        <p>Наш сайт построен на React и Vite.</p>
        <p>Мы используем компоненты для создания модульной структуры.</p>
        <ul>
          <li>Композиция</li>
          <li>Props</li>
          <li>JSX</li>
        </ul>
      </MainContent>
      
      {/* 4. Передача Props в Footer */}
      <Footer author="GALA" />
      
    </div>
  );
}

export default App;