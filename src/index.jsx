import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <Router>
      <App />
    </Router>,
  );
}
