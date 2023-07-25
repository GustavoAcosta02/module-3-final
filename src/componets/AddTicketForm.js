import React from "react"

export default function AddTicketForm() {
    return (
        <div>
            <h1>Create a Ticket</h1>
         <form>
         <h3>Subject of issue</h3>
            <input className ="input--form" 
                type="text"
                required = "yes"
                maxLength="25"
                placeholder="25 characters or less"
                />
            <h2>Please Describe Issue</h2>
            <textarea className = "ticket--issue"
                type="text"
                maxLength="200"
                placeholder="Please describe issue"
                />
                <h3>Please Enter Work Email</h3>
            <input className ="input--form"
                type="email"
                required = "yes"
                placeholder="Enter Email"
                />
                <br/>
                <h5>
                    extreme urgency
                    <input className ="input--form" 
                        type = "checkbox" 
                    />
                </h5>
                <button type = "info" className="tickets-button">
                        Add New Ticket
                    </button>
        </form>   
    </div>
    )
}