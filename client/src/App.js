import "./App.css";
import CreateAccount from "./components/CreateAccount";
import { useState } from "react";
import UpdateProfile from "./components/UpdateProfile";
import AddDog from "./components/AddDog";
import { Grid } from "@material-ui/core";

function App() {
  const [userId, setUserId] = useState();
  const [showCreateAccount, setCreateAccount] = useState(true);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [showAddDog, setshowAddDog] = useState(false);

  const registerNewUser = (data) => {
    setUserId(data._id);
    setCreateAccount(false);
    setShowUpdateProfile(true);
    console.log("registerNewUser,", data._id);
  };

  const updateProfile = () => {
    setShowUpdateProfile(false);
    setshowAddDog(true);
    console.log("user", userId, "updated");
  };

  return (
    <div className="App">
      {showCreateAccount ? (
        <CreateAccount registerNewUser={registerNewUser} />
      ) : (
        ""
      )}
      {showUpdateProfile ? (
        <UpdateProfile updateProfile={updateProfile} userId={userId} />
      ) : (
        ""
      )}
      {showAddDog ? <AddDog userId={userId} /> : ""}
    </div>
  );
}

export default App;
