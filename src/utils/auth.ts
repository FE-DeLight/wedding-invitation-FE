interface AuthOptions {
  checkToken: () => boolean;
}

export const auth: AuthOptions = {
  checkToken: (): boolean => {
    const token = window?.localStorage.getItem('com.naver.nid.oauth.state_token');

    return Boolean(token);
  },
};

export default auth;
