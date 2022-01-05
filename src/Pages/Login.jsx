import React from "react";
import { useDispatch } from "react-redux";
import { getUserLogin } from "../Redux/action";
const Login = () => {
  const dispatch = useDispatch();
  const handlelogin = () => {
    dispatch(getUserLogin());
  };

  return (
    <>
      <h1>login</h1>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <br />
      <div>
        <input type="text" placeholder="Password" />
      </div>
      <br />
      <div>
        <button
          style={{ color: "white", backgroundColor: "black" }}
          onClick={handlelogin}
        >
          Login
        </button>
      </div>
    </>
  );
};
export { Login };
