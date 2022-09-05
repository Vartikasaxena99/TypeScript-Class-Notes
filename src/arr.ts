let arr1:number[]=[1,2,3,4,5];//for making arr stricly typed
arr1.push(11);
// arr1.push("11");//not allowed because it is number array
console.log(arr1);
let arr2:string[]=[];
arr2[0]="vartika";
arr2[1]="vartika";
arr2[2]="vartika";
arr2[3]="vartika";
console.log(arr2);
arr2.forEach((i)=>console.log(i));


//mixed array

let arr3:(number | string)[]=[1,2,4,5,"abc","def"];
arr3.push(1);
arr3.push("vartika");
// arr3.push(false);//not allowed due to number or string array and it is boolean typed
console.log(arr3);

// readonly: to malke array not to be updated
let arr4:readonly number[]=[1,2,3,4];
// arr4.push(6);//not allowed due to read only array 

/*assignment 
// let ass:number[]=[1,2,3,4,5]

// output:5,10,15,20,25
*/