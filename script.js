/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
    arr.map(function(value,index){
      if(arr[index].marks>50){
      console.log(value);
      }
    })
}

function PrintStudentsbyForEach() {
  arr.forEach(function(value,index){
    if(arr[index].marks>50){
    console.log(value);
    }
  })
}

function addData() {
  let obj = {id:4,name:"susan",age:"20",marks:45}
  arr.push(obj);
  console.log(arr);
}

function removeFailedStudent() {
  let rfs=arr.filter(function(value,index){
       return arr[index].marks>50
  }
  )
  console.log(rfs);
}

function concatenateArray() {
  let student = [
    { id: 4, name: "aman", age: "34", marks: 85 },
    { id: 5, name: "anuj", age: "24", marks: 60 },
    { id: 6, name: "harry", age: "31", marks: 95 },
  ];
}
