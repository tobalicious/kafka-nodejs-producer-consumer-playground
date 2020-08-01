import kafka from 'kafka-node';

const kafkaClient = new kafka.KafkaClient({ kafkaHost: '127.0.0.1:9092' });
const kafkaProducer = new kafka.Producer(kafkaClient);

// generate array of size n, where each element is a random integer of value x <= n
const generateRandomNumbers = n => {
  const randomNums = [];
  for (let i = 0; i < n; i++) {
    randomNums.push(Math.floor(Math.random() * n));
  }

  return randomNums;
};

kafkaProducer.on('ready', () => {
  const msgData = generateRandomNumbers(100);
  kafkaProducer.send(
    [
      {
        topic: 'script-producer-consumer.random-nums',
        messages: msgData
      }
    ],
    (err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
    }
  );
});
