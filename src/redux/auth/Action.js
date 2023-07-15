import { SIGN_IN, SIGN_UP } from "./ActionType";


export const signinAction = (data) => async (dispatch) => {
    console.log("data.email ", data.email)
    console.log("data.password ", data.password)

    try {
        const res = await fetch("http://localhost:9100/signin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa(data.email + ":" + data.password),
            },
        });
        // console.log("Response Data:", res.json());
        console.log("Response status:", res.status);
        console.log("Response headers:", res.headers);

        if (res.ok) {
            const token = res.headers.get("Authorization");
            console.log("Token:", token);

            localStorage.setItem("token", token);
            dispatch({ type: SIGN_IN, payload: token });

            console.log("sign in:", token);
        } else {
            // Handle authentication failure
            console.log("Authentication failed");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}


export const signupAction = (data) => async (dispatch) => {
    console.log("Data: ", data)
    try {
        const res = await fetch("http://localhost:9100/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const user = await res.json();
        console.log("sign up: ", user);

        dispatch({ type: SIGN_UP, payload: user })

    }
    catch (error) {
        console.log(error);
    }
}