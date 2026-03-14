/* Write a JavaScript function that receives two arrays: 
one with names and one with roles. 
Return a new array of user objects in the format `{ username, email, role }`. 
The username should be lowercase with spaces replaced by underscores, 
and the email should use the domain `@playwrightbatch.com`.*/

let names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]


function buildTestUsers(names, roles) {
  return names.map((name, index) => {
   
    const username = name.toLowerCase().replaceAll(" ", "_");

   
    const email = `${username}@playwrightbatch.com`;

  
    return {
      username: username,
      email: email,
      role: roles[index] 
    };
  });
}const testUsers = buildTestUsers(names, roles);
console.log(testUsers);