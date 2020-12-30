
export const getProfile = () => {
    return fetch('/profile').then(res => res.json());
};

export const getMails = () => {
    return fetch('/mails').then(res => res.json());
};