// Code that is responsible for modifying the DOM.

// const entriesDOM = {
//     // Targets article with 'entryContainer' ID
//     appendInputForm () {
//         let entryContainer = document.querySelector("#entryContainer");
//     },
//     // Functions that create HTML structure for each element
//     conceptFunc (title, style) {
//         return `<h1 class="${style}">Concept(s): ${title}</h1>`
//     },
//     dateFunc (title, style) {
//         return `<section class="${style}">${title}</section>`
//     },
//     entryFunc (title, style) {
//         return `<section class="${style}">${title}</section>`
//     },
//     moodFunc (title, style) {
//         return `<section class="${style}">Feeling: ${title}</section>`
//     },
//     // Function that calls functions above to create HTML structure for each journal entry
//     renderJournalEntries (date, concept, entry, mood) {`
//         <div id="journalEntryContainer">
//             ${entriesDOM.conceptFunc(concept, "title")}
//             ${entriesDOM.dateFunc(date, "date")}
//             ${entriesDOM.entryFunc(entry, "content")}
//             ${entriesDOM.moodFunc(mood, "mood")}
//         </div>`
//     }
// }

const entriesDOM = {
    // Targets article with 'entryContainer' ID
    setEntryContainer () {
        let entryContainer = document.querySelector("#entryContainer");
    },
    // Function that create HTML structure for each entry
    renderJournalEntries (date, concept, entry, mood) {
        `<div id="journalEntryContainer">
            <h1 class="title">Concept(s): ${concept}</h1>
            <section class="date">${date}</section>
            <section class="content">${entry}</section>
            <section class="mood">Feeling: ${mood}</section>
        </div>`
    }
}

entriesDOM.setEntryContainer();
