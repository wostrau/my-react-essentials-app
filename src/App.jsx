import Header from './components/Header/Header';
import Examples from './components/Examples';
import { Fragment } from 'react';
import CoreConcepts from './components/CoreConcepts';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
