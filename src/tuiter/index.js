import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ProfileScreen from "./profile-screen";
import BookmarksScreen from "./bookmarks-screen";
import HomeScreen from "./home-screen";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen/index.js";
import { configureStore } from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import { Provider } from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="me-3 ms-3">
        <Nav />
        <div className="row">
          <div className="col col-2 col-xl-2 col-xxl-2 col-lg-2 col-md-4 col-sm-12">
            <NavigationSidebar />
          </div>
          <div className="col col-7 col-xl-7 col-xxl-7 col-lg-7 col-md-8 col-sm-12">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="col col-3 col-xl-3 col-xxl-3 col-lg-3 col-md-12 col-sm-12">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
