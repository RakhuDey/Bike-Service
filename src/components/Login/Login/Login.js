import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import clutch from "../../../images/clutch-disc.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div
      style={{ height: "680px", backgroundColor: "#06030c" }}
      className="pt-5"
    >
      <div className="text-center text-white">
        <h1>
          <img
            style={{
              width: "50px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            src={clutch}
            alt=""
          />
          Bike-Service
        </h1>
      </div>
      <div className="from-group mt-5 text-center">
        <button className="btn btn-brand" onClick={handleGoogleSignIn}>
          <a href="//google.com">
            <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
          </a>{" "}
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
