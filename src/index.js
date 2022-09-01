import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//Убрал строгий режим <React.StrictMode> так как изза него в режиме разработки два раза вызывается useEffect
ReactDOM
      .createRoot(document.getElementById('root'))
      .render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );

