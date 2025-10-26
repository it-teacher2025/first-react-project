// src/components/MainContent/MainContent.jsx

function MainContent({ heading, children }) {
  return (
    <main className="app-main">
      <h2>{heading}</h2>
      
      {/* 1. children — это все, что находится между открывающим и закрывающим тегом компонента */}
      <div className="main-content-body">
        {children}
      </div>
    </main>
  );
}

export default MainContent;