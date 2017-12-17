import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const props = {todos: [{id: 1, text: 'foo','complete':'success'}, {id: 2, text: 'bar','complete':'success'},{id: 3, text: 'good','complete':'info'}],badge:[{id:1,text:'success',num:13},{id:2,text:'info',num:20}]}

ReactDOM.render(<App {...props}/>, document.getElementById('root'));
registerServiceWorker();
