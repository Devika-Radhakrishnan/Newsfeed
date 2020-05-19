import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/myCustomStyles.css';

import Header from './components/Header';
import PageContents from './components/PageContents';

function App() {
  return (
    <div className='App'>
      <Header />
      <PageContents />
    </div>
  );
}

export default App;
