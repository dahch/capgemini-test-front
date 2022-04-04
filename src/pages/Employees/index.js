import { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const origin = localStorage.getItem('origin');
        fetch(`${origin || 'http://dummy.restapiexample.com/api/v1/'}employees`).then((response) => {
            response.json().then((json) => {
                setEmployees(json.data);
            });
        });
    }, []);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, idx) => (
                    <tr>
                        <td>{employee.employee_name}</td>
                        <td>{employee.employee_salary}</td>
                        <td>{employee.employee_age}</td>
                        <td><Button variant="primary" onClick={() => navigate(`employee/${(idx + 1)}`)}>Show</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
