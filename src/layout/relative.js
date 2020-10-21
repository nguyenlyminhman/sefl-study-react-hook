import React from 'react';
import { Link } from 'react-router-dom';

function Relative(props) {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">Check out what you can do with other Hook!</p>
          <hr />
        </div>
        <div className="row ">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-state">useState</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-effect">useEffect</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-context">useContext</Link>
              </div>
              <div className="row justify-content-center mt-5">
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-reducer">useReducer</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-callback">useCallback</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-memo">useMemo</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-ref">useRef</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-imperative-handle">useImperativeHandle</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-layout-effect">useLayoutEffect</Link> &nbsp;&nbsp;&nbsp;
                <Link className="badge-link btn btn-outline btn-md js-scroll-trigger" to="/use-debug-value">useDebugValue</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Relative;
