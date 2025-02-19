import { Outlet } from "react-router-dom";
import { metaLogixLogo, startup } from "../../assets";

const LoginLayout = () => {

  console.log("mts");
  
  return (
    <>
      <div className="container-fluid vh-100 p-0">
        <div className="row h-100 w-100 m-0">
          <div className="col col-12 col-lg-7 d-flex justify-content-center position-relative">
            <img className="login-logo" src={metaLogixLogo} alt="" />
            <div className="h-100 w-100   flex-center max-width--520 ">
              <div className="w-100 ps-3 pe-3  d-flex justify-content-center flex-column">
                <Outlet />
              </div>
            </div>
          </div>
          <div className="col  col-5 p-0 d-none d-lg-block">
            <img className="right-img w-100 p-0" src={startup} alt="startup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
