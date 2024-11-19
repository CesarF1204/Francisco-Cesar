

// // Factory function
// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     }
// }

// const circle = createCircle(1);
// // console.log('circle :>> ', circle);

// // Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new Circle(10);
// circle.location = { x: 1 };
// circle['location'] = { x: 1 };

// let obj = {value: 10};
// function increase(obj){
//     obj.value++
// }
// increase(obj);
// console.log('numbwe :>> ', obj);


// for (let key in circle){
//     if(typeof circle[key] !== 'function'){
//         console.log('key :>> ', key, circle[key]);
//     }
// }

const keys = Object.keys(circle);
console.log('keys :>> ', keys);

const values = Object.values(circle);
console.log('values :>> ', values);