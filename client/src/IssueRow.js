export function IssueRow({ issue }) {
    return (
        <p>
            <span>{issue.type} | </span>
            <span>{issue.ticket} | </span>
            <span>{issue.title} | </span>
            <span>{issue.assignee} | </span>
            <span>{issue.priority} | </span>
            <span>{issue.resolution} | </span>
            <span>{issue.estimatedEffort}</span>
        </p>
    );
}
