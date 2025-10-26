// src/App.jsx

// 1. Импортируем компоненты из их новых папок
import Header from './components/Header/Header.jsx'; 
import MainContent from './components/MainContent/MainContent.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {  
  const navItems = [
    { id: 1, text: 'Главная', url: '/' },
    { id: 2, text: 'О нас', url: '/about' },
    { id: 3, text: 'Контакты', url: '/contact' },
  ];
  
  return (
    <div className="app-layout">
      
      {/* 2. Передача navItems как Prop navLinks */}
      <Header 
        title="Мой Первый React-Проект" 
        navLinks={ navItems } // Правильно! Передаем JS-переменную в фигурных скобках
      />


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