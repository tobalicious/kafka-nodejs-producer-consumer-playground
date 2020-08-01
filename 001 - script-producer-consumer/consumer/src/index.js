import kafka from 'kafka-node';

const kafkaClient = new kafka.KafkaClient({ kafkaHost: '127.0.0.1:9092' });
const kafkaConsumer = new kafka.Consumer(
  kafkaClient,
  [{ topic: 'script-producer-consumer.random-nums' }],
  { autoCommit: true }
);

kafkaConsumer.on('message', message => {
  console.log(message);
});
