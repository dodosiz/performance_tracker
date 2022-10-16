const fs = require("fs");
const { parse } = require("csv-parse");
const { finished } = require("stream/promises");

function createEntityFromRow(row = []) {
    return {
        type: row[0],
        ticket: row[1],
        title: row[4],
        assignee: row[5],
        priority: row[7],
        resolution: row[8],
        estimatedEffort: row[14] !== "" ? parseInt(row[14]) : 0,
    };
}

async function readFromFile(fileName = "", entities = [], ids = []) {
    const parser = fs
        .createReadStream(fileName)
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
            const issue = createEntityFromRow(row);
            if (ids.indexOf(issue.ticket) === -1) {
                ids.push(issue.ticket);
                entities.push(issue);
            }
        });
    await finished(parser);
}

async function getData() {
    const entities = [];
    const ids = [];
    await readFromFile("./resources/version8.csv", entities, ids);
    await readFromFile("./resources/version9.csv", entities, ids);
    await readFromFile("./resources/version10.csv", entities, ids);
    return entities;
}

module.exports = getData;
