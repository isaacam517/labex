import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateTripPage from './pages/CreateTripPage';
import ApplicationPage from './pages/ApplicationPage';
import HomePage from './pages/HomePage';
import TripsListPage from './pages/TripsListPage';
import TripDetailPage from './pages/TripDetailPage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components' 

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
        <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/viagens/detalhe">
            <TripDetailPage/>
          </Route>
          <Route path="/viagens/criar">
            <CreateTripPage/>
          </Route>
          <Route path="/viagens">
            <TripsListPage/>
          </Route>
          <Route path="/inscricao">
            <ApplicationPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>         
      </AppContainer>
    </Router>
  );
}

export default App;
