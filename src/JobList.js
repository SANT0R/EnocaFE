import React, {Component} from 'react';
import {Badge, Table} from "reactstrap";

class JobList extends Component {
    state = {
        jobs : []
    }

    componentDidMount() {
        this.getJobs();
    }

    getJobs() {
        let url = "http://localhost:8080/job";

        fetch(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
            .then(responese => responese.json())
            .then(data => this.setState({jobs: data}));
    }

    removeFromCart(id) {
        let url = "http://localhost:8080/job/deleteById?id=" + id;

        fetch(url, {
            method: "DELETE"
        });

        this.getJobs();
    }

    render() {
        return (
            <div>
                <h3>Job List</h3>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>startDate</th>
                        <th>finishDate</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.jobs.map(job => (
                            <tr key={job.id}>
                                <th scope="row">{job.id}</th>
                                <td>{job.id}</td>
                                <td>{job.startDate}</td>
                                <td>{job.finishDate}</td>
                                <td><Badge color="danger" onClick={() => this.removeFromCart(job.id)}>X</Badge></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default JobList;