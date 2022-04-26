const mongoose = require("mongoose");

/* { "data": {

  "users": [
    {
      "contactName": "Jon",
      "contactUserName": "jon562",
      "chatStream": [
        { "messageReciever": "Hi Vishal, how are you" },
        { "messageSender": "Hi, Jon I am good" }
      ]
    }
  ],
  "logedInUser": {
    "name": "Vishal",
    "userName": "vishal562",
    "contacts": [
      {
        "contactName": "Ayush",
        "contactUserName": "ayush562",
        "chatStream": [
          { "messageReciever": "Hi Vishal, how are you" },
          { "messageSender": "Hi, Ayush I am good" },
          { "messageReciever": "Can you pass me the books?" },
          { "messageReciever": "It's urgent" },
          { "messageReciever": "living for Jaipur" },
          { "messageReciever": "Will come after 5 days" },
          { "messageSender": "Sure coming to your place in no time." }
        ]
      }
    ]
  }
}
}
 */

const taskSchema = new mongoose.Schema({
    users: [ Object ],
    logedInUser: Object
  });
  
  const Task = mongoose.model("chats", taskSchema);

module.exports = Task