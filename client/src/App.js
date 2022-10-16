import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Issues from "./issues/Issues";

function App() {
    const [tab, setTab] = React.useState("issues");
    return (
        <Container className="mt-3">
            <Nav justify variant="tabs">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => setTab("issues")}
                        active={tab === "issues"}
                    >
                        Issues
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => setTab("graphs")}
                        active={tab === "graphs"}
                    >
                        Graphs
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {tab === "issues" ? <Issues /> : null}
        </Container>
    );
}

export default App;
