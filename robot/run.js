const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
import runHelper from "./runHelper"
import email from "./email"

const run = async () => {
    /*await nightmare.goto("http://www.baidu.com");
    await nightmare.type('#kw', "hello world!!");
    await nightmare.click('#su');*/

    //await login()
    //await runHelper.runTimes(login, 5, 100000)

    //await email.sendMail("hellow subject", "hello text");

}

const login = async () => {
    await nightmare.goto("http://cnodejs.org/signin");
    await nightmare.wait("#signin_form");

    await nightmare.click(".form-actions :nth-child(2)");

    const result = await Promise.race([
        nightmare.wait("#login_field").then(() => 'github'),
        nightmare.wait("#create_topic_btn").then(() => 'cnodejs'),
    ])

    if (result === "cnodejs") {
        return;
    }

    await nightmare.type("#login_field", "lzyforever");
    await nightmare.type("#password", "lzy881114");
    await nightmare.click("input[name='commit']");
}

run()