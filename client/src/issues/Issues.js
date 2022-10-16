import React from "react";
import axios from "axios";
import { IssueTable } from "./IssueTable";
import Container from "react-bootstrap/Container";
import { AssigneeFilter } from "./AssigneeFilter";

const baseURL = "http://localhost:8080/";

function Issues() {
    const [issues, setIssues] = React.useState(null);
    const [developers, setDevelopers] = React.useState(null);
    const [developer, setDeveloper] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}issues`).then((response) => {
            setIssues(response.data);
        });
        axios.get(`${baseURL}developers`).then((response) => {
            setDevelopers(response.data);
        });
    }, []);

    if (!issues) return null;

    const filteredIssues =
        !developer || developer === ""
            ? issues
            : issues.filter((i) => i.assignee === developer);

    return (
        <Container className="mt-3">
            <AssigneeFilter
                developer={developer}
                developers={developers}
                setDeveloper={setDeveloper}
            />
            <p>Total issues: {filteredIssues.length}</p>
            <IssueTable issues={filteredIssues} />
        </Container>
    );
}

export default Issues;
