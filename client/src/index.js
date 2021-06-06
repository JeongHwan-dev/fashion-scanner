import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'i18n';

ReactDOM.render(
  <Suspense fallback={<h2>Loading...</h2>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);
