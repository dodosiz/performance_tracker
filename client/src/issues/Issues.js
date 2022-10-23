import React from "react";
import axios from "axios";
import { IssueTable } from "./IssueTable";
import { AssigneeFilter } from "../AssigneeFilter";
import { IssueTypeFilter } from "./IssueTypeFilter";
import Container from "react-bootstrap/esm/Container";

const baseURL = "http://localhost:8080/";

function Issues() {
    const [issues, setIssues] = React.useState(null);
    const [developers, setDevelopers] = React.useState(null);
    const [developer, setDeveloper] = React.useState(null);
    const [issueType, setIssueType] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}issues`).then((response) => {
            setIssues(response.data);
        });
        axios.get(`${baseURL}developers`).then((response) => {
            setDevelopers(response.data);
        });
    }, []);

    if (!issues) return null;

    const filteredByDeveloper = !developer
        ? issues
        : issues.filter((i) => i.assignee === developer);

    const filteredByType = !issueType
        ? filteredByDeveloper
        : filteredByDeveloper.filter((i) => i.type === issueType);

    const sortedIssues =
        (issueType === "Requirement") | (issueType === "DevRequirement")
            ? filteredByType.sort(
                  (a, b) => b.estimatedEffort - a.estimatedEffort
              )
            : filteredByType;

    return (
        <Container className="mt-3">
            <AssigneeFilter
                developer={developer}
                developers={developers}
                setDeveloper={setDeveloper}
            />
            <IssueTypeFilter
                issueType={issueType}
                setIssueType={setIssueType}
            />
            <p>Total issues: {sortedIssues.length}</p>
            <IssueTable issues={sortedIssues} />
        </Container>
    );
}

export default Issues;
