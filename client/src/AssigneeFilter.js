import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export function AssigneeFilter({ developers, developer, setDeveloper }) {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {!developer ? "All Developers" : developer}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setDeveloper(null)}>
                            All Developers
                        </Dropdown.Item>
                        {developers !== null
                            ? developers.map((d) => {
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
                              })
                            : null}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
        </Form>
    );
}
