import { useState, useEffect } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";
import TableData from "./Table";
import "./App.css";

function App() {
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [TypeOfService, setTypeOfService] = useState("");
  const [LastUsed, setLastUsed] = useState("");
  const [CummulativeCount, setCummulativeCount] = useState("");
  const [AddedBy, setAddedBy] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let isDisabled =
    !Name &&
    !Contact &&
    !BusinessName &&
    !TypeOfService &&
    !LastUsed &&
    !CummulativeCount &&
    !AddedBy;

  const API =
    "https://sheet.best/api/sheets/11a66d7e-2aee-4fd7-be05-98973acbfd1e";

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      Name,
      Contact,
      BusinessName,
      TypeOfService,
      LastUsed,
      CummulativeCount,
      AddedBy,
    };

    axios.post(API, body).then((response) => {
      setData([...data, response.data[0]]);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(API).then((response) => {
        setData(response.data);
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h2>Loading....</h2>;

  return (
    <Container fluid className="container">
      <Header as="h2">Monarco vendor data</Header>
      <Form className="form">
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Contact</label>
          <input
            placeholder="Enter Contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Business Name</label>
          <input
            placeholder="Enter Business Name"
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Type Of Service</label>
          <input
            placeholder="Enter Type Of Service"
            onChange={(e) => setTypeOfService(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Used</label>
          <input
            placeholder="Enter Last Used"
            onChange={(e) => setLastUsed(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Cummulative Count</label>
          <input
            placeholder="Enter Cummulative Count"
            onChange={(e) => setCummulativeCount(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Added By</label>
          <input
            placeholder="Enter Added By (Avinash, 510, D ...)"
            onChange={(e) => setAddedBy(e.target.value)}
          />
        </Form.Field>
        <div className="navigation">
          <Button
            color="blue"
            type="submit"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Submit
          </Button>
        </div>
      </Form>
      <hr />
      <TableData data={data} />
    </Container>
  );
}

export default App;
