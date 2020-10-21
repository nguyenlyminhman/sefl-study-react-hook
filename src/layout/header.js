import React from 'react';

function Header(props) {
  return (
    <header className="masthead tintuc">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mt-2 text-center">{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
