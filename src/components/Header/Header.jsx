import { Link, NavLink } from 'react-router-dom';

const LogoUrl = `https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg`;

function Header() {
  return (
    <>
      <section className="mb-5 shadow-sm">
        <header className="max-w-screen-xl mx-auto flex justify-between items-center py-5">
          <Link to="/" className="logo">
            <img className="w-full h-16 object-cover" src={LogoUrl} alt="" />
          </Link>
          <nav>
            <ul className="flex gap-x-5 text-xl font-light">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Header;
