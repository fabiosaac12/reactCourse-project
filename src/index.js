import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import fbconfig from './config/fbconfig';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore })
    ),
    reduxFirestore(fbconfig)
  )
);

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store} >
    <ReactReduxFirebaseProvider { ...rrfProps } >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
