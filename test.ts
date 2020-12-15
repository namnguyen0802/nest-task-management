var mqtt = require("mqtt");

const client = mqtt.connect(null, {
	clientId: process.env.CLIEN_ID || "test-mq-connection",
	protocol: "ws",
	hostname: "localhost",
	port: 1883,
	username: process.env.MQ_USERNAME || "artemis",
	password: process.env.MQ_PASSWORD || "simetraehcapa",
	clean: false,
	connectTimeout: 10000,
});

client.on("connect", function() {
	client.subscribe("test", function(err) {
		if (!err) {
			client.publish("test", "Hello mqtt");
		}
	});
});

client.on("message", function(topic, message) {
	// message is Buffer
	console.log(message.toString());
	client.end();
});
