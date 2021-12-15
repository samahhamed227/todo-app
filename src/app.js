import React, { useContext } from "react";
import ToDo from "./components/todo/todo";
import SettingsContext from "./context/context";
import Auth, { AuthContext } from "./context/logincontext";
import { If, Else, Then } from "react-if";
import "./app.scss";
import Sign from "./components/login";

function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <Auth>
        <If condition={loggedIn == true}>
          {console.log("from app comp",loggedIn)}
          <Then>
            <SettingsContext>
              <ToDo />
            </SettingsContext>
          </Then>
          <Else>
            <Sign />
          </Else>
        </If>
      </Auth>
    </>
  );
}

export default App;
