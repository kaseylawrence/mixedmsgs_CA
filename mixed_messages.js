function mixed_messages () {
greeting1 = ["Hello", "Howdy", "Hi", "Yo", "What's up", "What's happening"]
greeting2 = ["Cowboy", "Partner", "Friend", "Lover", "Hot Stuff"]

function getRandNum(array) {
    return Math.floor(Math.random() * array.length);
}



final_message = greeting1[getRandNum(greeting1)] +" " + greeting2[getRandNum(greeting2)];
console.log(final_message)
};

mixed_messages();



