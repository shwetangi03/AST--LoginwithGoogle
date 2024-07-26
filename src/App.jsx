// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

import { useGoogleLogin } from "@react-oauth/google";
import SearchHospitals from "./SearchHospitals";

const App = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
      <SearchHospitals />
    </>
  );
};

export default App;
