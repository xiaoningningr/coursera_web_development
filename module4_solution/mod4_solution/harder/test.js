(function (window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name in names) {
    var firstLetter = names[name].toLowerCase().charAt(0);

    if (firstLetter == 'j') {
      // byeSpeaker.xxxx
      byeSpeaker.sayBye(window);
    } else {
      // helloSpeaker.xxxx
      helloSpeaker.sayHello(window);
    }
  }
  /*end of function*/ 
}
  )(window);
