const obj = {
  greet(name) {
    console.log("HELL0 " + name);
  },

  sayHi: (name) => console.log("Hi " + name),
};

obj.greet("will");

obj.sayHi("tom");
