import React, { Component } from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context  from './Context';

ReactDom.render(
  <Context.Provider>
      <App />
  </Context.Provider>,
  document.getElementById("app")
);
