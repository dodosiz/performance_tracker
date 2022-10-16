import React from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { BarChart } from "./BarChart";

const baseURL = "http://localhost:8080/";

export function Graphs() {
    const [issuesByDeveloper, setIssuesByDeveloper] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}effort-by-developer`).then((response) => {
            setIssuesByDeveloper(response.data);
        });
    }, []);

    return (
        <Container className="mt-3">
            {issuesByDeveloper && (
                <BarChart issuesByDeveloper={issuesByDeveloper} />
            )}
        </Container>
    );
}
