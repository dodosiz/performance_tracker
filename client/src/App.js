import React from "react";
import axios from "axios";
import { IssueRow } from "./IssueRow";

const baseURL = "http://localhost:8080/";

function App() {
    const [issues, setIssues] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}issues`).then((response) => {
            setIssues(response.data);
        });
    }, []);

    if (!issues) return null;

    return (
        <div>
            {issues.map((issue) => (
                <IssueRow key={issue.ticket} issue={issue} />
            ))}
        </div>
    );
}

export default App;
