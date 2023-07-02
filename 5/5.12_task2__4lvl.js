let room = {
    number: 23
  };
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
let visitedObjects = [];
  
let json = JSON.stringify(meetup, function replacer(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (visitedObjects.includes(value)) {
        return undefined;
      }
      visitedObjects.push(value);
    }
    return value;
});
  alert(json);