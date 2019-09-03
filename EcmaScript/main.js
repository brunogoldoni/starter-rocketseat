class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.user = 'Bruno';
  }

  showUser() {
    console.log(this.user);
  }
}

const MyList = new TodoList();

document.getElementById('newtodo').onclick = function () {
  MyList.add('New TODO');
}

MyList.showUser();

// Static
// class Matematic {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(Matematic.add(1, 2));