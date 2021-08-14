import React, {Component} from 'react';
import {Badge, Table} from "reactstrap";

class CompanyList extends Component {
    state = {
        companies : []
    }

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies() {
        let url = "http://localhost:8080/company";

        fetch(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
            .then(responese => responese.json())
            .then(data => this.setState({companies: data}));
    }

    removeFromCart(id) {
        debugger;
        let url = "http://localhost:8080/company/deleteById?id=" + id;

        fetch(url, {
            method: "DELETE"
        });

        this.getCompanies();
    }

    render() {
        return (
            <div>
                <h3>Company List</h3>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Employees</th>
                        <th>Jobs</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.companies.map(company => (
                            <tr key={company.id}>
                                <th scope="row">{company.id}</th>
                                <td>{company.id}</td>
                                <td>{company.name}</td>
                                <td>{company.phone}</td>
                                <td>{company.email}</td>
                                <td>{company.address}</td>
                                <td><a href={'/employess-list?companyId=' + company.id}></a></td>
                                <td><a href={'/jobs-list?companyId=' + company.id}></a></td>
                                <td><Badge color="danger" onClick={() => this.removeFromCart(company.id)}>X</Badge></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default CompanyList;