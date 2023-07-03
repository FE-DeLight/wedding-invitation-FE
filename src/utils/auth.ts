interface AuthOptions {
  checkToken: () => boolean;
  logout: () => void;
}

export const auth: AuthOptions = {
  checkToken: (): boolean => {
    const token = window?.localStorage.getItem('access_token');

    return Boolean(token);
  },
  logout: (): void => {
    window.localStorage.clear();
  },
};

export default auth;
