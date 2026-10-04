//Write a JavaScript program to observe how the same variable name behaves: 
// in *global scope*,  inside a *function*, and inside an *if-block* using both var and let. 

var genderType="male"
function printGender(){
 let colour ='brown'
if(genderType==="female"){
    var age=30
    let colour='pink'
    console.log('inside the block',colour);
}
console.log('Age:',age);
}
printGender()
