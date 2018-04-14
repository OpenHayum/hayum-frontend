import Network from 'Utils/network';


export const signUpRequest = (body) => Network.post("/user", body);