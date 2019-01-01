// Code that is responsible for modifying the DOM.

const entriesDOM = {
    // Targets article with 'entryContainer' ID
    appendInputForm () {
        let entryContainer = document.querySelector("#entryContainer");
    },
    // Functions that create HTML structure for each element
    conceptFunc (title, style) {
        return `<h1 class="${style}">Concept(s): ${title}</h1>`
    },
    dateFunc (title, style) {
        return `<section class="${style}">${title}</section>`
    },
    entryFunc (title, style) {
        return `<section class="${style}">${title}</section>`
    },
    moodFunc (title, style) {
        return `<section class="${style}">Feeling: ${title}</section>`
    },
    // Function that calls functions above to create HTML structure for each journal entry
    renderJournalEntries (date, concept, entry, mood) {`
        <div id="journalEntryContainer">
            ${conceptFunc(concept, "title")}
            ${dateFunc(date, "date")}
            ${entryFunc(entry, "content")}
            ${moodFunc(mood, "mood")}
        </div>`
    }
}

entriesDOM.appendInputForm();