// components/Navbar.tsx
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="https://linkedin.com/company/hasnainkhagan" target="_blank">
            可汗 ℠
          </a>
        </div>
        <div className="links">
          <a className="opacity-[.5] animate-pulse cursor-default">
            Scroll Down
          </a>
          <a href="https://calendly.com/ahkan">Contact</a>
          <div className="socials">
            <a href="https://web.facebook.com/hasnainkhagan" target="_blank">
              FB
            </a>
            <a href="https://www.instagram.com/hasnainkhagan/" target="_blank">
              IG
            </a>
            <a href="https://x.com/hasnainkhagan" target="_blank">
              TW
            </a>
          </div>
        </div>
      </nav>

      <footer>
        <p>BY H45N41N</p>
        <p>Buy Source Code For $250</p>
      </footer>
    </>
  );
};

export default Navbar;
