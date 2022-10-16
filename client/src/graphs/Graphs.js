import React from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { BarChart } from "./BarChart";
import { AssigneeFilter } from "../AssigneeFilter";

const baseURL = "http://localhost:8080/";

export function Graphs() {
    const [issuesByDeveloper, setIssuesByDeveloper] = React.useState(null);
    const [developers, setDevelopers] = React.useState(null);
    const [developer, setDeveloper] = React.useState("");

    React.useEffect(() => {
        axios.get(`${baseURL}effort-by-developer`).then((response) => {
            setIssuesByDeveloper(response.data);
        });
        axios.get(`${baseURL}developers`).then((response) => {
            setDevelopers(response.data);
        });
    }, []);

    return (
        <Container className="mt-3">
            <AssigneeFilter
                developer={developer}
                developers={developers}
                setDeveloper={setDeveloper}
            />
            {issuesByDeveloper && (
                <BarChart
                    issuesByDeveloper={issuesByDeveloper}
                    developer={developer}
                />
            )}
        </Container>
    );
}
