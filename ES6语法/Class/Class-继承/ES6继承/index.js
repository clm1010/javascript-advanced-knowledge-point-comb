// ES6继承
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat(){
    console.log(this.name + ' eat')
  }
}

//extends 继承 Animal
class Dog extends Animal {
  constructor(name) {
    //这里的super首先会去执行Animal构造函数
    super(name) //注意 !!!
    this.name = name
  }

  say(){
    console.log(this.name+ ' say')
  }
}

const dog = new Dog('哈士奇')
dog.say();//哈士奇 say
dog.eat(); //哈士奇 eat
