import React from 'react';
import Header from '../../layout/header';
import Relative from '../../layout/relative';

function UseDebugValueHook() {
  return (
    <div>
      <Header title='useDebugValue' />
      <div className='container'>
        <div class="d-flex justify-content-center">
          <div className='col-8'>
            Updating...
          </div>
        </div>
      </div>
      
      <Relative /> 
    </div>
  );
}

export default UseDebugValueHook;
