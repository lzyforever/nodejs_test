/**
 * Created by jack on 2017/5/27.
 */

const nodemailer = require("nodemailer")
import config from './config'

const transporter = nodemailer.createTransport(config.email.sender)

const data = {
    from : "261087685@qq.com",
    to : "479770920@qq.com, lzyforever2008@sina.com",
    subject: "Hello",
    text: "hello  world!!!",
    html: "<b>Hello world...</b>"
};

const sendMail = async (subject, text) => {
    const newData = Object.assign({}, data, {subject, text})
    return await new Promise((resolve, reject) => {
        transporter.sendMail(newData, (error, info) => {
            if (error) {
                reject(error)
            }
            resolve(info)
        });
    })
}

export default {sendMail}