import React from 'react';
import Header from '../../layout/header';
import Relative from '../../layout/relative';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function UseStateHook() {
  const codeString = 'import SyntaxHighlighter from \'react-syntax-highlighter\';'
  return (
    <div>
      <Header title='useState Hook' />
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

export default UseStateHook;
