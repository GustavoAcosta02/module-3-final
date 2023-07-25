import React from "react"
import TableTicket from "./TicketTable"
import { Container, Row, Col} from "react-bootstrap"
import tickets from "./TicketInfo.json"
import AddTicket from "./AddTicket"
export default function Tickets(){
    return (
        <Container className ="tickets--container">
            <AddTicket />
            <br/>
            <Row>
                <Col>
                    Pending Tickets: {tickets.length}
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    Recently Added Tickets
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableTicket tickets ={tickets}/>
                </Col>
            </Row>
        </Container>
    )
}