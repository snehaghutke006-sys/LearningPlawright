/*
As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), name, email, 
and role (cycling through: admin, editor, viewer, tester, manager). 
Every 3rd user should be inactive (edge case testing). 
Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
 */


const roles = ["admin", "editor", "viewer", "tester", "manager"];


var userCount = 0;
for (let i = 1; i <= 10; i++) {
    userCount++;


    let id = "USR-" + String(userCount).padStart(4, "0");
    let name = `User${userCount}`;
    let email = `user${userCount}@example.com`;

    // Role cycling through roles array
    let role = roles[(userCount - 1) % roles.length];

    // Every 3rd user is inactive
    let isActive = (userCount % 3 === 0) ? false : true;

    // Print user data
    console.log({
        id: id,
        name: name,
        email: email,
        role: role,
        active: isActive
    });
}