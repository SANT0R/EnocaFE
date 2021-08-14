import logo from './logo.svg';
import './App.css';
import Navi from "./Navi";
import {Col, Container, Row} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyForm from "./CompanyForm";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import JobList from "./JobList";

function App() {
  return (
      <div className="App">
        <Container>
          <Navi></Navi>
          <Row>
            <Col xs="12">
              <Switch>
                <Route path="/company-form" component={CompanyForm}></Route>
                <Route exact path="/company-list" render={ props => (
                    <CompanyList></CompanyList>
                )
                }/>
                <Route path="/employee-form" component={EmployeeForm}></Route>
                <Route exact path="/employee-list" render={ props => (
                    <EmployeeList></EmployeeList>
                )
                }/>
                <Route exact path="/job-list" render={ props => (
                    <JobList></JobList>
                )
                }/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;
