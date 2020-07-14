import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import { FaUserAlt } from "react-icons/fa";

class Pronteff1 extends Component {
  render() {
    return (
      <div>
        <Form>
          <Row>
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaUserAlt></FaUserAlt>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="text" placeholder="PF Number" name="pfno" />
            </InputGroup>
            <Col xs="12" sm="6" lg="4">
              <Card className="text-white bg-primary">
                <CardBody className="pb-0">
                  <div style={{ fontWeight: "bold" }}>Report Two</div>
                </CardBody>
                <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                  {/* <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                /> */}
                </div>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Pronteff1;
