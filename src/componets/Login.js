import React from "react"

export default function Login() {
    return (
        <div className="login">
            <h1>Welcome back!</h1>
         <form className="login--form">
            <h2>Please sign in!</h2>
            <input className="login--fields"
                type="email"
                placeholder="Enter Email"
                />
                <h3 className="login--text2">Work Email</h3>
            <input className="login--fields"
                type="password"
                minLength="8"
                placeholder="Enter Password"
                />
                <h3 className="login--text3">Password</h3>
                <button className="login--button">Sign In</button>
        </form>   
    </div>
    )
}