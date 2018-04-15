import Network from 'Utils/network';

const getVersionedURL = uri => `api/v1/${uri}`;

export const signUpRequest = (body) => Network().post(getVersionedURL("user"), body);