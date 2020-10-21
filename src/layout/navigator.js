import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigator() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand js-scroll-trigger" to="/">React Hook - Self Study</NavLink>
                <button 
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Basic Hooks
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to="/use-state" className="nav-link js-scroll-trigger dropdown-item">useState</NavLink>
                                <NavLink to="/use-effect" className="nav-link js-scroll-trigger dropdown-item">useEffect</NavLink>
                                <NavLink to="/use-context" className="nav-link js-scroll-trigger dropdown-item">useContext</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Additional Hooks
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to="/use-reducer" className="nav-link js-scroll-trigger"><a className="dropdown-item" href>useReducer</a></NavLink>
                                <NavLink to="/use-callback" className="nav-link js-scroll-trigger"><a className="dropdown-item" href>useCallback</a></NavLink>
                                <NavLink to="/use-memo" className="nav-link js-scroll-trigger"><a className="dropdown-item" href>useMemo</a></NavLink>
                                <NavLink to="/use-ref" className="nav-link js-scroll-trigger"><a className="dropdown-item" href>useRef</a></NavLink>
                                <NavLink to="/use-imperative-handle" className="nav-link js-scroll-trigger"><a className="dropdown-item" href>useImperativeHandle</a></NavLink>
                                <NavLink to="/use-layout-effect" className="nav-link js-scroll-trigger"><a className="dropdown-item" href>useLayoutEffect</a></NavLink>
                                <NavLink to="/use-debug-value" className="nav-link js-scroll-trigger"><a className="dropdown-item" href>useDebugValue</a></NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link js-scroll-trigger">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigator;
