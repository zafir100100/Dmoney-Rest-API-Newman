const newman = require('newman');

newman.run({
    //collection: require('./collection/collection.json'),
    collection: 'https://api.postman.com/collections/11285772-2fbf4e92-d885-4d87-9797-99030869f33f?access_key=PMAT-01GQHXW1PC1RG6BJ61K37DS39G',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});