// Modifies the DOM

const entriesDOM = {

    // Targets #entryContainer and adds event listener to "Record" button
    setEntryContainer () {
        let entryContainer = document.querySelector("#entryContainer");

        let recordBtn = document.querySelector("#add-button");
        recordBtn.addEventListener("click", entriesDOM.postEntry)
    },

    // Function that create HTML structure for each entry
    renderJournalEntries (date, concept, entry, mood) {
        return `
        <div id="journalEntryContainer">
            <h1 class="title">Concept(s): ${concept}</h1>
            <section class="date">${date}</section>
            <section class="content">${entry}</section>
            <section class="mood">Feeling: ${mood}</section>
        </div>`
    },

    // POST new entry to database
    postEntry() {

        let inputDate = document.querySelector("#journalDate").value;
        let inputConcept = document.querySelector("#conceptsCovered").value;
        let inputEntry = document.querySelector("#entryText").value;
        let inputMood = document.querySelector("#currentMood").value;

        let newEntryPost = {
            "date": inputDate,
            "concept": inputConcept,
            "entry": inputEntry,
            "mood": inputMood
        };

        data.postNewEntry(newEntryPost)
        .then(() => {
            entryComponent.createAndAppend()
        })
    }
}

entriesDOM.setEntryContainer();
