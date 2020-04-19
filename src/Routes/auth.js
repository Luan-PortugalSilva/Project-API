export const isAuthenticated = () => {
  const auth = localStorage.getItem("token");
  if (null !== auth) {
    return true;
  } else {
    return false;
  }
};
