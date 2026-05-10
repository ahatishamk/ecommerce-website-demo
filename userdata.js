window.addEventListener("DOMContentLoaded", () => {
  const user =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user"));
  if (user && user.email) {
    console.log(`User loaded: ${user.email}`);
  }
});
