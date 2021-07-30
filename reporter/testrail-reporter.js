var Testrail = require('testrail-api');
let WDIOReporter = require('@wdio/reporter');



module.exports = class CustomReporter extends WDIOReporter {
   

    onTestPass(test) {
        var testrail = new Testrail({
            host: 'https://kiriagio.testrail.io',
            user: 'sandman228@ukr.net',
            password: 'p3lyuu8frNbPEkc/2KvN'
          });
        options = Object.assign(options, { stdout: true })
        //csuper(options)
        this.write(`Congratulations! Your test "${test.title}" passed 👏`);
        testrail.addRun(/*PROJECT_ID=*/1, /*CONTENT=*/{test}, function (err, response, run) {
            console.log(run);
          });
    }
}
