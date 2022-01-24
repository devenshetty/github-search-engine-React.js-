function Footer(){
  const year = new Date().getFullYear();

  return <footer className="footer-center p-5">
    <div>
    <p> #Project built by Deven Shetty - {year} </p>
    </div>
  </footer>
}

export default Footer;
