import { react, useState, useContext } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const accountinitialvalue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Sign up with mobile number to get started",
  },
};

const signUpInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phonenumber: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};

///// main function     =================================

const LoginDialog = (props) => {
  const [account, toggleAccount] = useState(accountinitialvalue.login);
  const [signup, setSignup] = useState(signUpInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, seterror] = useState(false);

  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    props.setopen(false);
    toggleAccount(accountinitialvalue.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountinitialvalue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) {
      return alert("same data match");
    }
    handleClose();
    setAccount(signup.username);
    alert("created account successfully, Click okay to continue..");
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) seterror(true);
    else {
      seterror(false);
      handleClose();
      setAccount(login.username);
    }
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <Components>
        <LeftBox>
          <Typography style={{ padding: 20, color: "#fff" }}>
            {account.heading}
          </Typography>
          <Typography style={{ padding: 20, color: "#fff" }}>
            {account.subHeading}
          </Typography>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt="img"
            style={{ padding: 20 }}
          />
        </LeftBox>

        {account.view === "login" ? (
          <RightBox>
            <TextField
              onChange={(e) => onValueChange(e)}
              name="username"
              variant="standard"
              label="Enter Username"
              style={{
                padding: 0,
                marginTop: 10,
                marginLeft: 10,
                width: "90%",
              }}
            ></TextField>
            {error && (
              <Typography
                style={{ fontSize: 12, color: "red", alignItems: "start" }}
              >
                Please enter valid username or password
              </Typography>
            )}
            <TextField
              onChange={(e) => onValueChange(e)}
              name="password"
              variant="standard"
              label="Enter Password"
              style={{
                padding: 0,
                marginTop: 10,
                marginLeft: 10,
                width: "90%",
              }}
            ></TextField>
            <Typography style={{ padding: 20, fontSize: 11 }}>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              onClick={() => loginUser()}
              style={{
                width: "90%",
                backgroundColor: "#fb641b",
                color: "#fff",
              }}
            >
              Login
            </Button>
            <Typography style={{ padding: 5 }}>OR</Typography>
            <Button
              style={{
                width: "90%",
                backgroundColor: "#2874f0",
                color: "#fff",
              }}
            >
              Request OTP
            </Button>
            <Typography
              onClick={() => toggleSignup()}
              style={{ padding: 20, fontSize: 11, cursor: "pointer" }}
            >
              New to Flipkart? Create an account
            </Typography>
          </RightBox>
        ) : (
          <RightBox>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="firstname"
              variant="standard"
              label="Enter Firstname"
              style={{ padding: 0, marginTop: 10, marginLeft: 30 }}
            ></TextField>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="lastname"
              variant="standard"
              label="Enter Lastname"
              style={{ padding: 0, marginLeft: 30 }}
            ></TextField>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="username"
              variant="standard"
              label="Enter Username"
              style={{ padding: 0, marginLeft: 30 }}
            ></TextField>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="email"
              variant="standard"
              label="Enter Email"
              style={{ padding: 0, marginLeft: 30 }}
            ></TextField>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="password"
              variant="standard"
              label="Enter Password"
              style={{ padding: 0, marginLeft: 30 }}
            ></TextField>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="phonenumber"
              variant="standard"
              label="Enter Phone number"
              style={{ padding: 0, marginLeft: 30 }}
            ></TextField>
            <Button
              style={{
                width: "90%",
                backgroundColor: "#fb641b",
                color: "#fff",
                marginLeft: 30,
                marginTop: 30,
              }}
              onClick={() => signupUser()}
            >
              Continue
            </Button>
          </RightBox>
        )}
      </Components>
    </Dialog>
  );
};

const Components = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const LeftBox = styled(Box)`
  height: 100%;
  width: 45%;
  background: #2874f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const RightBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoginDialog;
