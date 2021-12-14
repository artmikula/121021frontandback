import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import FarmlandDataEntry from "./components/FarmlandDataEntry";
import SignupPage from "./components/SignupPage";
import Results from "./components/Results";
import axios from "axios";

function App() {
  // const adminUser = {
  //   name: "admin",
  //   password: "admin123",
  // };

  const [user, setUser] = useState({ name: null });
  const [error, setError] = useState("");
  const [signupPage, setSignupPage] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(null);
  const [fetchData, setFetchData] = useState([]);
  let userExists = false;
  let pwd = null;

  const [newUserData, setNewUserData] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
  });

  async function checkUserExists(username) {
    let query = `/api/users/${username}`;
    const data = await fetch(query)
      .then((res) => res.json())
      .then((result) => {
        userExists = result;
      });
    if (userExists.length > 0) {
      setError("Username not available");
      setSignupPage(true);
    } else {
      addUser();
      setSignupPage(null);
      setError(null);
    }
  }

  async function checkUserExists(username) {
    await axios.get(`/api/users/${username}`).then((response) => {
      userExists = response;
    });
    if (userExists.length > 0) {
      setError("Username not available");
      setSignupPage(true);
    } else {
      addUser();
      setSignupPage(null);
      setError(null);
    }
  }

  async function verifyCredentials(details) {
    await axios.get(`/api/users/${details.name}`).then((response) => {
      pwd = response.data[0].password;
    });
  }

  const addUser = () => {
    console.log("Adding user...");
    axios.post("/api/adduser", newUserData).then((response) => {
      console.log(response);
    });
  };

  async function Login(details) {
    await verifyCredentials(details);
    if (details.password === pwd) {
      setUser({
        name: details.name,
      });
      setError(null);
    } else {
      setError("Please try again!");
    }
  }

  const SubmitFarmData = (farmData) => {
    console.log(farmData);
    setDataLoaded("complete");
  };

  const Signup = () => {
    if (
      newUserData.name &&
      newUserData.password &&
      newUserData.password === newUserData.passwordConfirm
    ) {
      checkUserExists(newUserData.name);
    } else {
      setError("Try again");
    }
  };

  const Logout = () => {
    setUser({ name: null, email: null });
  };

  return (
    <div className="App">
      {user.name && dataLoaded == null && signupPage === null && (
        <div id="mainCont">
          <div className="welcome">
            <h2>
              안녕하세요, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>로그오프</button>
          </div>
          <div className="enterdata">
            <FarmlandDataEntry SubmitFarmData={SubmitFarmData} error={error} />
          </div>
        </div>
      )}
      {user.name === null && dataLoaded === null && signupPage === null && (
        <LoginForm Login={Login} error={error} setSignupPage={setSignupPage} />
      )}
      {signupPage && (
        <SignupPage
          Signup={Signup}
          error={error}
          setSignupPage={setSignupPage}
          newUserData={newUserData}
          setNewUserData={setNewUserData}
        />
      )}
      {dataLoaded && (
        <Results dataLoaded={dataLoaded} setDataLoaded={setDataLoaded} />
      )}
    </div>
  );
}

export default App;
