import "../index";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Rittick Datta</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/about-me`}>About</Link>
            </li>
            <li>
              <Link to={`/experience`}>Experience</Link>
            </li>
            <li>
              <Link to={`/education`}>Education</Link>
            </li>
            <li>
              <Link to={`/skills`}>Skills</Link>
            </li>
            <li>
              <Link to={`more-info`}>More Info</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}