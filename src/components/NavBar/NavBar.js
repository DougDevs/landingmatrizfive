function NavBar({ props, targetSection }) {
    return (
      <div className="nav-list">
        <ul>
          <li className="nav-item">
            <a href={`#${targetSection}`} className="nav-link">
              {props}
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default NavBar;
  