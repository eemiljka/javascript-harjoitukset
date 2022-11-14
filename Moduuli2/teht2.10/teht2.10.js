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
let nbrVoters = parseInt(prompt("Number of voters?"))

for (let i = 0; i < nbrVoters; i++)
{
    let vote = prompt("Voter " + (i + 1) + ": Please, type in your vote.")
    if (candidates.includes(vote)) {
            candidates[i].votes += 1
        }
}

target.innerHTML = "Candidate name: " + candidates[0].name + ". Votes: " + candidates[0].votes

