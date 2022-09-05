function add(x:string,y:string):string
{
    return x+y
}
console.log(add('5','10'));

let sub=(x:number,y:number):void=>console.group(`result:${x+y}`);
sub(4,2);