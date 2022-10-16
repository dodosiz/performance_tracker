import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export function AssigneeFilter({ developers, developer, setDeveloper }) {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {!developer || developer === ""
                            ? "All Developers"
                            : developer}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setDeveloper("")}>
                            All Developers
                        </Dropdown.Item>
                        {developers.map((d) => {
                            return (
                                <Dropdown.Item
                                    onClick={(e) =>
                                        setDeveloper(e.target.innerText)
                                    }
                                    key={d}
                                >
                                    {d}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
        </Form>
    );
}
