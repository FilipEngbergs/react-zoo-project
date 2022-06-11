import { Link, Outlet } from "react-router-dom";
import "./../styles/Layout.css";

export const Layout = () => {
  return (
    <div className="layout-container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/animals">Djuren</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <aside></aside>
        <main>
          <Outlet></Outlet>
        </main>
        <aside></aside>
      </section>
      <footer></footer>
    </div>
  );
};
