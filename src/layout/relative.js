import React from 'react';

function Relative(props) {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">Check out what you can do with other hook!</p>
          <hr />
        </div>
        <div className="row ">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-state">useState</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-effect">useEffect</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-context">useContext</a>
              </div>
              <div className="row justify-content-center mt-5">
                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-reducer">useReducer</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-callback">useCallback</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-memo">useMemo</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-ref">useRef</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-imperative-handle">useImperativeHandle</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-layout-effect">useLayoutEffect</a> &nbsp;&nbsp;&nbsp;
                  <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-debug-value">useDebugValue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Relative;
