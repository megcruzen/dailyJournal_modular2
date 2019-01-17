// Creates each journal entry HTML component.

const entryComponent = {

    createAndAppend() {

        entryContainer.innerHTML = "";

        data.getJournalEntries()
        .then(entriesArray => {
            entriesArray.forEach(entryObj => {
                entryContainer.innerHTML += entriesDOM.renderJournalEntries(entryObj.date, entryObj.concept, entryObj.entry, entryObj.mood);
              });
          });
    }
}