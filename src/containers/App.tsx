import React, { FC, Fragment } from 'react';
import FormInput from '../components/FormInput/FormInput';
import ViewList from '../components/ViewList/ViewList';
import { StateProvider } from '../contextProvider/ContextProvider';
import { AppContainer } from './styles';

const App: FC = () => {
  return (
    <Fragment>
      <StateProvider>
        <AppContainer>
          <FormInput />
          <ViewList />
        </AppContainer>
      </StateProvider>
    </Fragment>
  );
};

export default App;
