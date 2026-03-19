let s = "Hello world this is new string test";
console.log(s.length) //11
console.log(s.at[-1])//undefined

console.log(s.charAt(3))//3
console.log(s.charCodeAt(3))//108



console.log(s.includes("hello")) //false
console.log(s.startsWith("Hello")) //true
console.log(s.endsWith("test")) //true
console.log(s.indexOf("e")) //1
console.log(s.indexOf("t")) //12
console.log(s.indexOf("z"))  //-1
console.log(s.search("is")) //14 (index of match)


let text = "JavaScript";
console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(4));      // "Script"
console.log(text.slice(-6));     // "Script" (negative index)


console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4, 10)); // "Script"
 