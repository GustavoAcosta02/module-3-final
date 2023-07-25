import React from "react"

export default function Register() {
    return (
        <div className="register">
        <p>Register your account<br/><strong>Please ask employer for employee codes<br/> and location number</strong></p>
     <form className="register--form">
        <h2>Please register below</h2>
        <input className="register--fields"
            type="email"
            placeholder="Employee Email"
            />
            <br/>
        <input className="register--fields"
            type="text"
            placeholder="Employee Code"
            />
            <br/>
        <input
            typ className="register--fields"e="text"
            placeholder="Location Number"
            />
            <br/>
        <input className="register--fields"
            type="password"
            minLength="8"
            placeholder="Password"
            />
            <br/>
            <button className="register--button">Complete registration</button>
    </form>   
</div>
    )
}