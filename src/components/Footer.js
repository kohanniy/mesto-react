import React from 'react';

function Footer() {
  const [year, setYear] = React.useState(0);

  React.useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);


  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {year} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
