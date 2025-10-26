// src/components/Footer/Footer.jsx

function Footer({ author }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <p>
        &copy; {currentYear} Разработано: **{author}**
      </p>
    </footer>
  );
}

export default Footer;