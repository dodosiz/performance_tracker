const express = require("express");
const getData = require("./data");
var cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get("/issues", async (req, res) => {
    const issues = (await getData()).filter(
        (issue) => issue.resolution === "DONE"
    );
    console.log("GET issues: total issues found: " + issues.length);
    res.send(issues);
});

app.get("/issues-by-developer", async (req, res) => {
    const issues = (await getData()).filter(
        (issue) => issue.resolution === "DONE"
    );
    console.log(
        "GET issues-by-developer: total issues found: " + issues.length
    );
    const developers = getDevelopers(issues);
    const result = issuesCountByDeveloper(developers, issues);
    res.send(result);
});

app.get("/features-by-developer", async (req, res) => {
    const issues = (await getData()).filter(
        (issue) =>
            issue.resolution === "DONE" &&
            (issue.type === "Requirement" || issue.type === "DevRequirement")
    );
    console.log(
        "GET features-by-developer: total issues found: " + issues.length
    );
    const developers = getDevelopers(issues);
    const result = issuesCountByDeveloper(developers, issues);
    res.send(result);
});

app.get("/bugs-by-developer", async (req, res) => {
    const issues = (await getData()).filter(
        (issue) => issue.resolution === "DONE" && issue.type === "Bug"
    );
    console.log("GET bugs-by-developer: total issues found: " + issues.length);
    const developers = getDevelopers(issues);
    const result = issuesCountByDeveloper(developers, issues);
    res.send(result);
});

app.get("/effort-by-developer", async (req, res) => {
    const issues = (await getData()).filter(
        (issue) =>
            issue.resolution === "DONE" &&
            (issue.type === "Requirement" || issue.type === "DevRequirement")
    );
    console.log(
        "GET effort-by-developer: total issues found: " + issues.length
    );
    const developers = getDevelopers(issues);
    const result = {};
    for (const developer of developers) {
        result[developer] = issues
            .filter((issue) => issue.assignee === developer)
            .map((issue) => issue.estimatedEffort)
            .reduce((p, c) => p + c, 0);
    }
    res.send(result);
});

app.get("/developers", async (req, res) => {
    const issues = (await getData()).filter(
        (issue) => issue.resolution === "DONE"
    );
    const developers = getDevelopers(issues);
    console.log("GET developers: total developers found: " + developers.length);
    res.send(developers);
});

function getDevelopers(issues = []) {
    const developers = [];
    for (const issue of issues) {
        const developer = issue.assignee;
        if (developers.indexOf(developer) === -1) {
            developers.push(developer);
        }
    }
    return developers.filter((d) => d !== "nschreiber" && d !== "fstolz");
}

function issuesCountByDeveloper(developers = [], issues = []) {
    const result = {};
    for (const developer of developers) {
        result[developer] = issues.filter(
            (issue) => issue.assignee === developer
        ).length;
    }
    return result;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
