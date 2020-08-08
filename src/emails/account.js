const sgMail = require('@sendgrid/mail')


// const sendGridAPIKey = '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'

sgMail.setApiKey(process.env.SEND_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kr.rohan2001@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kr.rohan2001@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}