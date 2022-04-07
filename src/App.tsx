import React from 'react';
import { Helmet } from 'react-helmet';
import Router from 'Router';
import './reset.min.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Sandbox by Long</title>
      </Helmet>
      <Router />
    </>
  );
}

export default App;
