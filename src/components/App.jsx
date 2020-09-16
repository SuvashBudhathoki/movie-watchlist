import React, { PureComponent } from 'react';
import AppRouter from '../router/AppRouter';
import { GlobalProvider } from '../context/GlobalState';

class App extends PureComponent {
  render() {
    return (
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    )
  }
}

export default App;