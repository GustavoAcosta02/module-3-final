import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import AddTicketForm from "./AddTicketForm"
export default function AddTicket() {
    return (
        <Container>
            <Row>
               <Col>
               <AddTicketForm />
               </Col> 
            </Row>
        </Container>
    )
}