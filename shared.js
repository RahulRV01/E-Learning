// shared.js

// Get current user from localStorage
function getCurrentUser() {
    const userJSON = localStorage.getItem("currentUser");
    if (!userJSON) return null;
    try {
       return JSON.parse(userJSON);
    } catch (error) {
       console.error("Error parsing user data:", error);
       return null;
    }
 }
 
 // Save current user to localStorage
 function setCurrentUser(userObj) {
    localStorage.setItem("currentUser", JSON.stringify(userObj));
 }
 
 // Remove current user (logout)
 function logoutUser() {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    window.location.href = "login.html";
 }
 
 // Optional utility to get all users
 function getAllUsers() {
    const usersJSON = localStorage.getItem("users");
    return usersJSON ? JSON.parse(usersJSON) : [];
 }
 
 // Optional utility to save users list
 function saveUsers(usersArray) {
    localStorage.setItem("users", JSON.stringify(usersArray));
 }
 
 // Check if user is logged in, else redirect to login
 function ensureLoggedIn() {
    const user = getCurrentUser();
    if (!user) {
       alert("Please login first.");
       window.location.href = "login.html";
    }
    return user;
 }
 