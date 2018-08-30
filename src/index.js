import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//App컴포넌트를 index.html의 id가 root인 element에 출력(render)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
