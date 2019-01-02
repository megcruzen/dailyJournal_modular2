// Code that is responsible for creating the journal entry HTML component.

const entryComponent = {
    /** LOOP TO ADD ARRAY DATA TO DOM **/

    // Loop grabs the values from each array object (INCLUDING THE NEW DATA) and inserts them into "renderJournalEntries" function and then adds the result inside "entryContainer"

    // Overarching function that creates and adds new data to DOM - need to tie this to the button click!
    createAndAppend () {

        // Clears existing HTML from DOM element
        entryContainer.innerHTML = "";

        // Now we need to add the full array content (including newly input data) into the DOM.
        // Loop through each object inside "journalEntriesArray" and call "renderJournalEntries" function.
        // Add each object's data (now HTML) into "entryContainer"

        // for (let i = 0; i < journalEntriesArray.length; i++) {
        //     entryContainer.innerHTML += renderJournalEntries(journalEntriesArray[i].date, journalEntriesArray[i].concept, journalEntriesArray[i].entry, journalEntriesArray[i].mood);
        // };

        API.getJournalEntries()
        .then(entriesArray => {
            console.log(entriesArray);
            entriesArray.forEach(entryObj => {
                console.log(entryObj.date);
                entryContainer.innerHTML += entriesDOM.renderJournalEntries(entryObj.date, entryObj.concept, entryObj.entry, entryObj.mood);
                console.log(entryContainer);
              });
          });

        return entryContainer;

        // console.log(entryContainer);
    }
}

// Now we call the function to add the HTML into the DOM.
// entryComponent.createAndAppend();

// ^^^^^^ This will add data that *currently* exists in the array. New data will be added when you CLICK.