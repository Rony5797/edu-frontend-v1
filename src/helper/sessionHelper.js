class sessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage?.getItem("token");
  }
  setUserDetails(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUserDetails() {
    return JSON.parse(localStorage?.getItem("user"));
  }
}

export const { setToken, getToken, setUserDetails, getUserDetails } =
  new sessionHelper();
