import React from "react"
import {Table} from "react-bootstrap"

export default function TicketTable({tickets}) {
    return (
       <Table className="ticket--table">
            <thread className = "table--head">
                <th>#</th>
                <th>subject</th>
                <th>status</th>
                <th>Opened Date</th>
            </thread>
            <tbody className ="tickets--body">
                {tickets.length ? tickets.map((row) => (
                    <thead key ={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </thead> 
                    )) :
                <thead>
                    <td>No tickets to show</td>
                </thead>
                }
            </tbody>
       </Table>
    )
}