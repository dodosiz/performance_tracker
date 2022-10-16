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

async function readFromFile(fileName = "") {
    const result = [];
    const parser = fs
        .createReadStream(fileName)
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
            result.push(createEntityFromRow(row));
        });
    await finished(parser);
    return result;
}

async function readAllData() {
    const entities8 = await readFromFile("./resources/version8.csv");
    const entities9 = await readFromFile("./resources/version9.csv");
    const entities10 = await readFromFile("./resources/version10.csv");
    const allEntities = [...entities8, ...entities9, ...entities10];
    console.log(allEntities);
    return allEntities;
}

readAllData();
