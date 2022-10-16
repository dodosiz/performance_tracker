import Table from "react-bootstrap/Table";
import { IssueRow } from "./IssueRow";

export function IssueTable({ issues }) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr className="sticky-header">
                    <th>Ticket</th>
                    <th>Type</th>
                    <th>Title</th>
                    <th>Assignee</th>
                    <th>Priority</th>
                    <th>Resolution</th>
                    <th>Estimated effort</th>
                </tr>
            </thead>
            <tbody>
                {issues.map((issue) => (
                    <IssueRow key={issue.ticket} issue={issue} />
                ))}
            </tbody>
        </Table>
    );
}
