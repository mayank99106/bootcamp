var db=[
  {Name:'Akash',Age:23,Salary:70000,DOB:'9-01-2002'},
  {Name:'Kashish',Age:54,Salary:200,DOB:'1-01-2002'},
  {Name:'Rahul',Age:23,Salary:50000,DOB:'22-01-2002'},
  {Name:'Shivam',Age:35,Salary:60000,DOB:'16-01-2002'}
  
];
//parta
var sal =  db.filter(function(db) {
	return db.Salary > 30000
});

let method1=Object.assign({},sal);

console.log(method1);
//partb


let group = db.reduce((r, a) => {
 
 r[a.Age] = [...r[a.Age] || [], a];
 return r;
}, {});
console.log("group", group);

//partc

let increment = [];
for (let k = 0; k< db.length; k++){
if (db[k].Salary < 1000 && db[k].Age>20){
let po = db[k].Salary * 5;
increment.push(po);
db[k].Salary=po;

}}

console.log(increment);
console.log(db)

