import styled from 'styled-components';

import Preview from './components/Preview';
import data from './data.json';
import FormManager from './managers/FormManager';
import { View } from './types';

/**
 * Render Application with form preview of JSON schema
 */

function App() {
  const views: View[] = data.views as View[];

  return (
    <Container>
      <FormManager>
        <Preview data={views} />
      </FormManager>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
