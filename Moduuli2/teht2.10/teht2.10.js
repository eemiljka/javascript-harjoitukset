'use strict';


let nbrCandidates = parseInt(prompt("Number of candidates?"))
let candidates = [];

for (let i = 0; i < nbrCandidates; i++)
{
    let candidateName = prompt("Name for candidate "+ (i + 1));
    let candidate = {
        name : candidateName,
        votes : 0
    }
    candidates.push(candidate);
}

console.log(candidates)