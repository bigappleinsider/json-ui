import React from 'react';
import Preview from './components/Preview';
import data from './data2.json';
import FormManager from './managers/FormManager';

function App() {
  return (
    <div className="App">
      <FormManager>
        <Preview data={data.views} />
      </FormManager>
    </div>
  );
}

export default App;
