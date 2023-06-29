let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readmessages=new WeakSet();
readmessages.add(messages[1]);
readmessages.add(messages[0]);
alert("Read message 0: " + readMessages.has(messages[0]));
messages.shift();
alert(messages())