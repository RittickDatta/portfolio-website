import "../index";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div id="nameAndLinks">
          <h1>Rittick Datta</h1>
          <h2>Senior Frontend React Developer</h2>
        </div>
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
