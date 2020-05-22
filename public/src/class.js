class Person {
    // 생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`My name is ${this.name}`);
    }


//    getter, setter
//    사용자가 값을 잘못 입력했을때, 이를 올바른 값으로 컨트롤 하기 위해 사용
    get age(){
        return this._age;
    }

    set age(value){
        // if(value < 0){
        //     //Uncaught Error: age can not negative
        //     throw Error('age can not negative');
        // }
        // this._age = value;

        this._age = value < 0 ? 0 : value;
    }
}

const sujin = new Person('sujin', -1);
console.log(sujin.name);
console.log(sujin.age);
sujin.speak();


/**
 * 상속 Inheritance
 * 
 */
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log('draw: ' + this.color);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Retangle extends Shape {}
class Triangle extends Shape {
    // overriding : 필요한 함수만 재정의
    getArea(){
        return (this.width / this.height) / 2;
    }
    draw(){
        super.draw();
        console.log("삼각!");
    }
}

const retangle = new Retangle(30,30, 'orange');
retangle.draw();


const triangle = new Triangle(30,30, 'red');
triangle.draw();
triangle.getArea();


// 클래스 
console.log(retangle instanceof Retangle);
