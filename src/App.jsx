import React from 'react';
import Pokemon from './components/Pokemon';

import { Provider } from 'react-redux';
import generateStore from './redux/store';

function App() {

  const store = generateStore();

  return (
    <Provider store={ store }>
      <Pokemon />
    </Provider>
  );
}

export default App;
