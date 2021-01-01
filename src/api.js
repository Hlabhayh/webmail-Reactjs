//Load Profile
export const getProfile = () => {
    return fetch('/profile').then(res => res.json());
};
//Load Mails
export const getMails = () => {
    return fetch('/mails').then(res => res.json());
};