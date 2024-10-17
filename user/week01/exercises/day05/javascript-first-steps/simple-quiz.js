const answer = prompt(
    `
    "Question: Who created JavaScript?

    A) Brendan Eich
    B) Bill Gates
    C) Mark Zuckerberg

    Please select the correct option (A, B, or C)."
    `
)

if(answer) {
    const userAnswer = answer.trim().toUpperCase();

    if(userAnswer === "A") {
        alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
    }else if (userAnswer === "B") {
        alert("Nope. He lead the development of the Windows Operating System.");
    }else if (userAnswer === "C") {
        alert("Nope. He just came up with the idea for a social network idea.");
    }else {
        alert("Please selecte A,B or C only")
    }

}else {
    alert("No input provided");
}