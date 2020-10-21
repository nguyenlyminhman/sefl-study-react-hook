import React from 'react';
import Header from '../../layout/header';
import Relative from '../../layout/relative';

function UseEffectHook() {
  return (
    <div>
      <Header title='useEffect' />
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

export default UseEffectHook;