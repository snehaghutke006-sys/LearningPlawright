/*
As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") 
and impact ("blocker", "major", "minor"). 
Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4 */


let frequency = "always"; let impact = "blocker"

if(frequency === "always" && impact === "blocker"){
    console.log("P0 issue")
}
else if(frequency === "always" && impact === "major")
    console.log("P1 issue")

else if(frequency === "always" && impact === "minor")
    console.log("P2 issue")



if(frequency === "often" && impact === "blocker"){
    console.log("P1 issue")
}
else if(frequency === "often" && impact === "major")
    console.log("P2 issue")

else if(frequency === "often" && impact === "minor")
    console.log("P3 issue")


if(frequency === "rarely" && impact === "blocker"){
    console.log("P2 issue")
}
else if(frequency === "rarely" && impact === "major")
    console.log("P3 issue")

else if(frequency === "rarely" && impact === "minor")
    console.log("P4 issue")