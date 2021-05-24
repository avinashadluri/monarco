import { useState, useEffect } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";
import { DateInput } from "semantic-ui-calendar-react";
import TableData from "./Table";
import "./App.css";

const API =
  "https://sheet.best/api/sheets/11a66d7e-2aee-4fd7-be05-98973acbfd1e";

const App = () => {
  const [state, setState] = useState({
    Name: "",
    Contact: "",
    BusinessName: "",
    TypeOfService: "",
    LastUsed: "",
    CummulativeCount: "",
    AddedBy: "",
    data: [],
    loading: true,
  });

  const {
    Name,
    Contact,
    BusinessName,
    TypeOfService,
    LastUsed,
    CummulativeCount,
    AddedBy,
    data,
    loading,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Name &&
      Contact &&
      BusinessName &&
      TypeOfService &&
      LastUsed &&
      CummulativeCount &&
      AddedBy
    ) {
      const body = {
        Name,
        Contact,
        BusinessName,
        TypeOfService,
        LastUsed,
        CummulativeCount,
        AddedBy,
        AddedOn: new Date().toDateString(),
      };

      axios.post(API, body).then((response) => {
        setState({ ...state, data: [...state.data, response.data[0]] });
      });
    } else {
      alert("Please fill the form");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(API).then((response) => {
        setState({ ...state, data: response.data, loading: false });
      });
    };
    fetchData();
  }, []);

  const setFields = (elem) => {
    setState({
      ...state,
      [elem.target.name]: elem.target.value,
    });
  };

  const setDate = (event, { name, value }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  if (loading) return <h2>Loading....</h2>;
  return (
    <Container fluid className="container">
      <Header as="h2">Monarco vendor data</Header>
      <Form className="form">
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter your Name"
            name="Name"
            onChange={(e) => {
              setFields(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Contact</label>
          <input
            placeholder="Enter Contact"
            name="Contact"
            onChange={(e) => {
              setFields(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Business Name</label>
          <input
            placeholder="Enter Business Name"
            name="BusinessName"
            onChange={(e) => {
              setFields(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Type Of Service</label>
          <input
            placeholder="Enter Type Of Service"
            name="TypeOfService"
            onChange={(e) => {
              setFields(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Used</label>
          <DateInput
            name="LastUsed"
            placeholder="Enter Last Used"
            value={LastUsed}
            iconPosition="left"
            onChange={setDate}
          />
        </Form.Field>
        <Form.Field>
          <label>Cummulative Count</label>
          <input
            placeholder="Enter Cummulative Count"
            name="CummulativeCount"
            onChange={(e) => {
              setFields(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Added By</label>
          <input
            placeholder="Enter Added By (Avinash, 510, D ...)"
            name="AddedBy"
            onChange={(e) => {
              setFields(e);
            }}
          />
        </Form.Field>
        <div className="navigation">
          <Button color="blue" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
      <hr />
      <TableData data={data} />
    </Container>
  );
};

export default App;
