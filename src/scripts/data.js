// Code that deals with getting the data.

const data = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    postNewEntry(newEntryPost) {
        return fetch("http://localhost:8088/entries",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryPost)
        });
    },
}