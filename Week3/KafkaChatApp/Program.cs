using Confluent.Kafka;

Console.WriteLine("1: Producer (send messages)");
Console.WriteLine("2: Consumer (receive messages)");
Console.Write("Choose mode: ");
string mode = Console.ReadLine();

string bootstrapServers = "localhost:9092";
string topic = "chat-topic";

if (mode == "1")
{
    var config = new ProducerConfig { BootstrapServers = bootstrapServers };
    using var producer = new ProducerBuilder<Null, string>(config).Build();

    Console.WriteLine("Type messages (type 'exit' to quit):");
    string line;
    while ((line = Console.ReadLine()) != "exit")
    {
        var result = await producer.ProduceAsync(topic, new Message<Null, string> { Value = line });
        Console.WriteLine($"Sent to partition {result.Partition}, offset {result.Offset}");
    }
}
else
{
    var config = new ConsumerConfig
    {
        BootstrapServers = bootstrapServers,
        GroupId = "chat-group",
        AutoOffsetReset = AutoOffsetReset.Earliest
    };
    using var consumer = new ConsumerBuilder<Null, string>(config).Build();
    consumer.Subscribe(topic);

    Console.WriteLine("Listening for messages...");
    while (true)
    {
        var cr = consumer.Consume();
        Console.WriteLine($"Received: {cr.Message.Value}");
    }
}
