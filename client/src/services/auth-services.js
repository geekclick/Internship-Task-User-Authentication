import axios from "axios";
export const handleLogin = async (userInfo, authStore, router) => {
    try {
        const response = await axios.post("/api/login", userInfo);
        if (response) {
            router.push("/");
            localStorage.setItem('token', response.data.token)
            console.log("Login Successfull")
            authStore.setUser(await getUser(userInfo));
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
            router.push("/login");
            console.log("Register Success");
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Passwords don't match") {
            console.log("Passwords don't match");
        }
    }
};

export const getUser = async (userInfo) => {
    try {
        const response = await axios.post("/api/get-user", userInfo);
        if (response) {
            return response.data
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Passwords don't match") {
            console.log("Passwords don't match");
        }
    }
};


export const logout = (router) => {
    localStorage.removeItem('token');
    router.push('/login');
    console.log("Log out successfull");
};