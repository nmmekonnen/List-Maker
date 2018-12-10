

//User object
function User(name, addToList, list) {
  this.name = name;
  this.list = list = [];

  //Adds a list of to-do tasks to the array
  this.addToList = function addToList(task) {
    list.push(task);
  }
}
