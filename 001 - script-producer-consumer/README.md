# 001 - Script Producer Consumer

This folder contains the bare minimum code I could create to setup a connection an existing local Kafka client with a pre-initialized topic.

## Setup

### Topic Creation

In your terminal, run: `kafka-topics --zookeeper 127.0.0.1:2181 --topic script-producer-consumer.random-nums --create --partitions 3 --replication-factor 1`

This will initialized the topic `script-producer-consumer.random-nums`, which will be written and watched by the Producer and Consumer scripts.

You can verify the topic's creation with the following command:
`kafka-topics --zookeeper 127.0.0.1:2181 --list`

### Producer and Consumer Installation

In both the `consumer` and `producer` folders, install the packages listed in the `package.json`.

Run: `npm install`.

## Execution

### Producer

In the `producer` folder, run `npm run start`.

The `producer` will wait until it has connected with the local Kafka client. Once connection is achieved, it will generate an array of 100 random integers to send to the topic `script-producer-consumer.random-nums`. If this write succeeds, it will log the offset the topic began writing at.

### Consumer

In the `consumer` folder, run `npm run start`.

The `consumer` will connect to the local Kafka client. Once connection is achieved, it will read any unread messages written to `script-producer-consumer.random-nums`, and wait for new messages until execution is ended.
