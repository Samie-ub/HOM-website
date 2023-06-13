import React from "react";
import { Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./styles.css";
import {
  BrandLogo,
  WalletConnect,
  MetaMask,
  TrustWallet,
} from "../Assets/index";
import { Link } from "react-router-dom";

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

const data = [
  {
    imgSrc: MetaMask,
    btnDes: "log in with metamask",
  },
  {
    imgSrc: TrustWallet,
    btnDes: "log in with trust wallet",
  },
  {
    imgSrc: WalletConnect,
    btnDes: "log in with wallet connect",
  },
];

function Login() {
  return (
    <div className="root">
      <Grid container alignItems="flex-start">
        {/* SIDE BAR GRID */}
        <Grid item xs={12} sm={7} md={5} lg={5}>
          <div className="side-bar">
            <div className="container">
              <div className="logo-container">
                <img src={BrandLogo} alt="logo" className="brand-logo" />
              </div>
            </div>

            {/* LOGIN GRID */}

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className="spacing"
            >
              <Grid item sm={12} xs={12} lg={11}>
                <button className="login-btn">
                  <Link to="/" className="nav-link">
                    <ArrowBackIosIcon className="login-arrow" />
                  </Link>
                </button>
                <span className="login-text">log in</span>
              </Grid>
            </Grid>

            {/* FORM SECTION STARTS HERE */}
            <div className="container">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className="form-spacing"
              >
                <Grid item sm={12} xs={12} md={12} lg={11}>
                  <p className="form-label">email</p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <input className="form-field" type="email" />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <p className="form-label">password</p>
                </Grid>
                <Grid item xs={12} md={12} lg={11}>
                  <input className="form-field" type="password" />
                  <p className="forget-btn">
                    <Link to="/forgotpassword">forgot password?</Link>
                  </p>
                </Grid>
              </Grid>
            </div>

            {/* LOGIN BUTTON SECTION */}
            <div className="container-btn">
              <Grid container justifyContent="center">
                <Grid item>
                  <button className="login-btn-two">log in</button>
                </Grid>
              </Grid>
            </div>

            {/* OR LINE SECTION */}
            <div className="or-line">
              <div className="line"></div>
              <div>
                <p className="or-text">or</p>
              </div>
              <div className="line"></div>
            </div>

            {/* WALLET BUTTON SECTION */}
            <div className="container-btn">
              <Grid container justifyContent="center">
                <Grid xs={10} sm={10} md={10} lg={8}>
                  {data.map((content) => (
                    <button onClick={connect} className="wallet-btn">
                      <img
                        src={content.imgSrc}
                        alt="metamask icon"
                        className="btn-img"
                      />
                      <p className="btn-text">{content.btnDes}</p>
                    </button>
                  ))}
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>

        {/* IMAGE GRID */}
        <Grid item sm={5} md={7} lg={7}>
          <div className="background-img"></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
