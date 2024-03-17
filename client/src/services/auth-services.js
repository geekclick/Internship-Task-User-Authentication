import axios from "axios";
export const handleLogin = async (userInfo, router) => {
    try {
        const response = await axios.post("/api/login", userInfo);
        if (response) {
            router.push("/");
            console.log("Login Success");
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Password doesn't match") {
            console.log("Password doesn't match");
        }
    }
}

export const handleSignUp = async (userInfo, router) => {
    try {
        const response = await axios.post("/api/register", userInfo);
        if (response) {
            router.push("/");
            console.log("Register Success");
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Passwords don't match") {
            console.log("Passwords don't match");
        }
    }
};