import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
export default function Employee () {
    const [employee, setEmployee] = useState(null);
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        const origin = localStorage.getItem('origin');
        fetch(`${origin || 'http://dummy.restapiexample.com/api/v1/'}employee/${id}`).then((response) => {
            response.json().then((json) => {
                setEmployee(json.data);
            });
        });
    }, [id])

    return (
        <Container style={{ marginTop: "10px" }}>
            <Row>
                <Col md={{ span: 1 }}>
                    <Button variant="outline-secondary" onClick={() => navigate(`/`)}>Back</Button>
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                {employee && (
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={employee.employee_name} disabled/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" placeholder="Salary" value={employee.employee_salary} disabled/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="age" value={employee.employee_age} disabled/>
                            </Form.Group>
                        </Form> 
                    )}
                </Col>
            </Row>
        </Container>
    );
}