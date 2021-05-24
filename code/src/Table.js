import { Table } from "semantic-ui-react";

const TableData = ({ data }) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Contact</Table.HeaderCell>
          <Table.HeaderCell>BusinessName</Table.HeaderCell>
          <Table.HeaderCell>TypeOfService</Table.HeaderCell>
          <Table.HeaderCell>LastUsed</Table.HeaderCell>
          <Table.HeaderCell>CummulativeCount</Table.HeaderCell>
          <Table.HeaderCell>AddedBy</Table.HeaderCell>
          <Table.HeaderCell>AddedOn</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data?.map((row, i) => (
          <Table.Row key={i}>
            <Table.Cell>{row.Name}</Table.Cell>
            <Table.Cell>{row.Contact}</Table.Cell>
            <Table.Cell>{row.BusinessName}</Table.Cell>
            <Table.Cell>{row.TypeOfService}</Table.Cell>
            <Table.Cell>{row.LastUsed}</Table.Cell>
            <Table.Cell>{row.CummulativeCount}</Table.Cell>
            <Table.Cell>{row.AddedBy}</Table.Cell>
            <Table.Cell>{row.AddedOn}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TableData;
