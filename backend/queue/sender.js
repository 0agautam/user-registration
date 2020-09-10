const amqp      = require('amqplib/callback_api')

amqp.connect('amqp://localhost',(connError, connection) => {
    if(connError){
        throw(connError)
    }

    connection.createChannel((channelError, channel) => {
        if(channelError) {
            throw(channelError)
        }

        const QUEUE = 'codingtest'
        channel.assertQueue(QUEUE)
        let str = "Welcome message"
        channel.sendToQueue(QUEUE, Buffer.from(str))
        console.log(`Message Sent ${QUEUE}`)
    })
})