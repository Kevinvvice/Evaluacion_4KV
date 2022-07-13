import React from 'react' 
import {userNavigate} from "react-router-dom";
import userAuth from "../helpers/useAuth";
import config from "../helpers/config.json";

const Autenticacion = () =>{
  const{userAuth} = userAuth(); 
  let navigate = userNavigate(); 
  const changeButtonState = (button, enabled) => { 
    if (enabled){
      button.disabled = false; 
      button.innerHTML = "<i className='fa fa-sing-in'></i>Acceder";
    }else{
      button.disabled = true; 
      button.innerHTML = "<i className='fa fa-spin f-spinner'></i>Accediendo....";
    }
  }; 

  const showMessage = (visible, message) => {
    const messageBox = document.querySelector(".alert");
    const reasonBox = document.querySelector("#reason");
    if (visible){
      reasonBox.innerHTML = message;
      messageBox.classList.remove("d-none")
    }else{
      reasonBox.innerHTML = "";
      message.classList.add("d-none")
    }
  } 
  <><form onSubmit={logger}>-
  </form><div className=''>

    </div></>
    return (
<div className="hold-transition login-page col-3 ">
  <div className="login-box col">
    <div className="login-logo text-center">
      <a href="/"><b>Cloud</b>Sales</a>
    </div> 
    <div className="card">
      <div className="card-body login-card-body">
        <p className="login-box-msg">Autentíquese para iniciar seción</p> 
        <form>
          <div className="input-group md-3">
            <input type="text" className="form-control" name="username" placeholder="Apodo" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div> 
          <div className="input-group md-3">
            <input type="password" className="form-control" name="pass" placeholder="Clave" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-primary"><i className="fa fa-sing-in" /> Acceder</button>
            </div>
          </div>
        </form> 
        <div className="alert alert-danger d-none" role="alert">
          <strong>Error!</strong>
          <p id="reason" />
        </div>
      </div>
    </div>
  </div>
</div> 



    )
  } 
export default Autenticacion;





