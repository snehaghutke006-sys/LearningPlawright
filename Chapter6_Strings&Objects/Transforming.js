let s ="          hello World   "

console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.trim())
console.log(s.trimStart())

console.log(s.replace("hello", "right"))


let str = "foo bar foo bar";
let result = str.replace(/foo/g, "baz");
console.log(result); // "baz bar baz bar"


let str1 = "Hello World";
let result1 = str1.split(" ").join("_");
console.log(result1); // "Hello_World"
console.log( str1.split(""))



let url = "https://staging.myapp.com/dashboard";
console.log(url.includes("staging")); //true
console.log(url.startsWith("https"));//true
console.log(url.endsWith("/dashboard"));//true

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status = log.match(/Status: (\d+)/)[1];
console.log(status)//500

let env = "staging"; 
let module = "auth";
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId) //staging_auth_007

 let actual = " PASS "; let expected = "pass"; 
 console.log(actual.trim().toLowerCase() === expected) //true


 let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
 let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
 console.log(params) //{ query: 'login', page: '2', sort: 'asc' }

 let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked) //Bearer ***REDACTED***
