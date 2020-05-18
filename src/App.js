import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { IonApp, IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TabOneDetailPage from "./pages/TabOneDetailPage";

import { inject, observer } from "mobx-react";
class App extends Component {
  render() {
    return !this.props.store.authCheckComplete ? (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <IonSpinner name="circles" />
      </div>
    ) : (
        <IonApp>
      <IonReactRouter>
      <Switch>
            <Route path="/register" component={RegistrationPage} />
            <IonRouterOutlet>
            <Redirect exact from="/" to="home" />
              <Route path="/login" component={LoginPage} />
            
              <PrivateRoute2 name="home" path="/home" component={HomePage} />
              
              <PrivateRoute2
                path="/tab1-detail2/:id"
                component={TabOneDetailPage}
              />
              <PrivateRoute2
                path="/tab1-detail/:id"
                component={TabOneDetailPage}
              />
            </IonRouterOutlet>
            
            </Switch>
      </IonReactRouter>
        </IonApp>
    );
  }
}

export default inject("store")(observer(App));
