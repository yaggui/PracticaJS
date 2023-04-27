const users=`[
  {
    "user":"favalos",
    "pass":"nose2023",
    "active":true,
    "mail":"favalos@gmail.com"
  },
  {
    "user":"kpuentes",
    "pass":"vitto07",
    "active":true,
    "mail":"kpuentes@gmail.com"
  },
  {
    "user":"bavalos",
    "pass":"voley23",
    "active":false,
    "mail":"bavalos@gmail.com"
  }
]`;
//el tipo de dato, es un string
console.log(typeof users);
//Convertir el string en un objeto JS con el metodo parse()
const jsonData= JSON.parse(users);
console.log(typeof jsonData);
console.log(jsonData[0].active);
//se puede realizar operaciones como cualquier objeto
const userActive= jsonData.filter((user)=>user.active==true);
console.log(userActive);
//Convertir un objeto JS a JSON usando metodo stringify()
const usersActivesNow= JSON.stringify(userActive);
console.log(typeof usersActivesNow);
