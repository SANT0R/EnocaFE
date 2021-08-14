import React, {Component} from 'react';
import {Badge, Table} from "reactstrap";

class EmployeeList extends Component {
    state = {
        employees : []
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees() {
        let url = "http://localhost:8080/employee";

        fetch(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
            .then(responese => responese.json())
            .then(data => this.setState({employees: data}));
    }

    removeFromCart(id) {
        debugger;
        let url = "http://localhost:8080/employee/deleteById?id=" + id;

        fetch(url, {
            method: "DELETE"
        });

        this.getEmployees();
    }

    render() {
        return (
            <div>
                <h3>Employee List</h3>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th>Hire Date</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.employees.map(employee => (
                            <tr key={employee.id}>
                                <th scope="row">{employee.id}</th>
                                <td>{employee.id}</td>
                                <td>{employee.fullName}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.jobTitle}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.hireDate}</td>
                                <td><Badge color="danger" onClick={() => this.removeFromCart(employee.id)}>X</Badge></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default EmployeeList;