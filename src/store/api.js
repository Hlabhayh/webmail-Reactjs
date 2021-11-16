//Load Profile
export const getProfile = () => {
  return fetch('http://localhost:8080/profile').then(res => res.json());
};
//Load Mails
export const getMails = () => {
  return fetch('http://localhost:8080/mails').then(res => res.json());
};