import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Navigation } from "react-router-dom";
import GlobalRoute from "./routes/globalroute/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { allReducer } from "./store";
import { createStore, applyMiddleware } from "redux";
import { SplashScreen } from "./component";

const store = createStore(allReducer, applyMiddleware(thunk));
store.subscribe(()=>console.log("subscribe", store.getState()));

const LazyLayout = lazy(() => import("./pages/layout"));
const RenderLayout = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <LazyLayout />
    </Suspense>
  );
};


const App = () => {
  return (
    <Navigation> 
    <Provider store={store}>
        <RenderLayout />
    </Provider>
    </Navigation>
  );
};

export default App;
