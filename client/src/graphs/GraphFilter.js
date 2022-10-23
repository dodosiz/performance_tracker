import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export function GraphFilter({ graphs, graph, setGraph }) {
    return (
        <Form style={{ display: "inline-block", marginLeft: 5 }}>
            <Form.Group className="mb-3">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {!graph ? "Select a graph" : graph}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {graphs.map((g) => {
                            return (
                                <Dropdown.Item
                                    onClick={(e) =>
                                        setGraph(e.target.innerText)
                                    }
                                    key={g}
                                >
                                    {g}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
        </Form>
    );
}
