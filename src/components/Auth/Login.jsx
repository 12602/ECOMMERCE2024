import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { login, register } from "../../redux/Features/authSlice";

export default function Login() {
  //   const id = useParams();

  const navigate = useNavigate();
  const [name, setName] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const formValue = { email, password };
    dispatch(login({ formValue, navigate, toast }));
  };


  return (
    <div className="container-fluid m-5">
      <div className="container bg-black text-white">
        <div className="col-12">
          <div className="text-center h3 heading py-2">Login</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
              <form className="row blog-form" onSubmit={handleLogin}>
                <div className="col-12 py-3">
                 <input
                    type="text"
                    className="form-control input-text-box"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div> 
                <div className="col-12 py-3">
                  <input
                    type="text"
                    className="form-control input-text-box"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-12 py-3 text-center">
                  <Button type="submit" style={{ width: "15rem" }}>
                    Login
                  </Button>
                </div>
                <div className="col-12 py-3 text-center">
                  <span className="h3">Not register :New User?</span>
                  <Button
                    className="p-3   h-6" style={{marginLeft:30}}
                    onClick={() => navigate('/register')}
                  >
                    Register Now !!
                  </Button>
                </div>
              </form>
              </div>
              </div>
            </div>
            
          </div>
       
  );
}
