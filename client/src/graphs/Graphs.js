import React from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { BarChart } from "./BarChart";
import { AssigneeFilter } from "../AssigneeFilter";
import { GraphFilter } from "./GraphFilter";

const baseURL = "http://localhost:8080/";

export function Graphs() {
    const graphs = [
        "issues-by-developer",
        "features-by-developer",
        "bugs-by-developer",
        "effort-by-developer",
    ];
    const [issuesByDeveloper, setIssuesByDeveloper] = React.useState(null);
    const [developers, setDevelopers] = React.useState(null);
    const [developer, setDeveloper] = React.useState("");
    const [graph, setGraph] = React.useState("effort-by-developer");
    const [selectedGraph, setSelectedGraph] = React.useState(
        "effort-by-developer"
    );

    React.useEffect(() => {
        axios.get(`${baseURL}developers`).then((response) => {
            setDevelopers(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get(`${baseURL}${graph}`).then((response) => {
            setIssuesByDeveloper(response.data);
            setSelectedGraph(graph);
        });
    }, [graph]);

    return (
        <Container className="mt-3">
            <AssigneeFilter
                developer={developer}
                developers={developers}
                setDeveloper={setDeveloper}
            />
            <GraphFilter graph={graph} graphs={graphs} setGraph={setGraph} />
            {issuesByDeveloper && (
                <BarChart
                    issuesByDeveloper={issuesByDeveloper}
                    developer={developer}
                    graph={selectedGraph}
                />
            )}
        </Container>
    );
}
