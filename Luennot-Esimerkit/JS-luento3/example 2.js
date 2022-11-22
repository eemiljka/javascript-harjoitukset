'use strict';


let nbrCandidates = parseInt(prompt("Number of candidates?"))
let candidates = [];

for (let i = 0; i < nbrCandidates; i++) {
    let candidateName = prompt("Name for candidate " + (i + 1));
    let candidate = {
        name: candidateName, votes: 0
    }
    candidates.push(candidate);
}

let nbrVoters = parseInt(prompt("Number of voters?"))

function getIndexOfCandidate(name) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].name == name) {
            return i;
        }
    }
    // if name is not found
    return false;
}


// read & calculate votes
for (let i = 0; i < nbrVoters; i++) {
    let vote = prompt("Voter " + (i + 1) + ": Please, type in your vote (candidate name).")
    const candidateIndex = getIndexOfCandidate(vote)
    if (candidateIndex !== false) {
        candidates[candidateIndex].votes++;
    }
}
console.log(candidates);

// sort candidates by votes (descending)
candidates.sort((a, b) => b.votes - a.votes);

// print results
for (const candidate of candidates) {
    // change hipsut
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}