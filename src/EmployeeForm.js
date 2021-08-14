import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class EmployeeForm extends Component {
    state = {
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        jobTitle: "",
        salary: ""
    }

    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]: value});
    }

    saveProductApi() {

        (async () => {
            const rawResponse = await fetch("http://localhost:8080/employee" + (this.state.id || ""), {
                method: this.state.id?"PUT":"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email,
                    address: this.state.address,
                    jobTitle: this.state.jobTitle,
                    salary: this.state.salary
                })
            });
            const content = await rawResponse.json();

            return content;
        })();
    }

    onSubmitHandle = (event) => {
        event.preventDefault();
        this.saveProductApi();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandle}>
                    <FormGroup>
                        <Label for="id">Id</Label>
                        <Input type="text" name="id" id="id" placeholder="Enter Id" onChange={this.onChangeHandle}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Enter Name" onChange={this.onChangeHandle}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" id="phone" placeholder="Enter Phone" onChange={this.onChangeHandle}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.onChangeHandle}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="jobTitle">jobTitle</Label>
                        <Input type="text" name="jobTitle" id="jobTitle" placeholder="Enter jobTitle" onChange={this.onChangeHandle}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="salary">salary</Label>
                        <Input type="salary" name="salary" id="salary" placeholder="Enter salary" onChange={this.onChangeHandle}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="textarea" name="address" id="address" placeholder="Enter Address" onChange={this.onChangeHandle}></Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        );
    }
}

export default EmployeeForm;