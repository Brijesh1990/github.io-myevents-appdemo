function add()
{
 const a=parseInt(prompt("Enter a values"));
 const b=parseInt(prompt("Enter b values"));
 const c=a+b;
 alert('Additions of numbers is :'+c);
}
function mult()
{
 const a=parseInt(prompt("Enter a values"));
 const b=parseInt(prompt("Enter b values"));
 const c=a*b;
 alert('Multiplications of numbers is :'+c);
}

function dv()
{
 const a=parseInt(prompt("Enter a values"));
 const b=parseInt(prompt("Enter b values"));
 const c=a/b;
 alert('Divisions of numbers is :'+c);
}

export {add,mult,dv};