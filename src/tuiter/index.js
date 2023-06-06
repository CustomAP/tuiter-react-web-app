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
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
