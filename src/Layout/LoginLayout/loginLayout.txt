import { Outlet } from "react-router-dom";
import { metaLogixLogo, startup } from "../../assets";

const LoginLayout = () => {
  return (
    <>
      <div className="main-container flex-center">
        <div className="left-container">
          <img className="login-logo" src={metaLogixLogo} alt="" />
          <div className="left-container-content">
            <div className="left-container-content-box">

                <Outlet/>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img className="right-img" src={startup} alt="startup" />
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
