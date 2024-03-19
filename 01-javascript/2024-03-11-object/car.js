var car = [
  {
    name: "Sonata1",
    speed: 100,
    color: "white",
    door: "4",
    start: function () {
      return this.speed + 100;
    },
  },
  {
    name: "Sonata2",
    speed: 120,
    color: "black",
    door: "4",
    start: function () {
      return this.speed;
    },
  },
  {
    name: "Sonata3",
    speed: 70,
    color: "gray",
    door: "4",
    start: function () {
      return this.speed;
    },
  },
  {
    name: "Sonata4",
    speed: 190,
    color: "green",
    door: "4",
    start: function () {
      return this.speed;
    },
  },
  {
    name: "Sonata5",
    speed: 100,
    color: "red",
    door: "4",
    start: function () {
      return this.speed;
    },
  },
];

export default car;
