export function IssueRow({ issue }) {
    return (
        <tr>
            <td>{issue.ticket}</td>
            <td>{issue.type}</td>
            <td>{issue.title}</td>
            <td>{issue.assignee}</td>
            <td>{issue.priority}</td>
            <td>{issue.resolution}</td>
            <td>{issue.estimatedEffort}</td>
        </tr>
    );
}
