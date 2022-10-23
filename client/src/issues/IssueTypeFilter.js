import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export function IssueTypeFilter({ issueType, setIssueType }) {
    return (
        <Form style={{ display: "inline-block", marginLeft: 5 }}>
            <Form.Group className="mb-3">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {!issueType ? "All Issues" : issueType}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setIssueType(null)}>
                            All Issues
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setIssueType("Bug")}
                            key="Bug"
                        >
                            {"Bug"}
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setIssueType("DevRequirement")}
                            key="DevRequirement"
                        >
                            {"DevRequirement"}
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setIssueType("Requirement")}
                            key="Requirement"
                        >
                            {"Requirement"}
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setIssueType("Task")}
                            key="Task"
                        >
                            {"Task"}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
        </Form>
    );
}
