(async (): Promise<void> => {
    const util = require('util')
    const sdk = require('@adobe/aio-lib-events')

    // initialize sdk
    const client = await sdk.init(
        process.env.ORG_ID,
        process.env.X_API_KEY,
        process.env.AUTH_TOKEN
    );
    // get the journalling observable
    const journalling = client.getEventsObservableFromJournal(
        process.env.JOURNAL_URL,
        {latest: true}
    )
    // call methods
    const subscription = journalling.subscribe({
        next: (v: any) => {
            console.log(util.inspect(v, false, null, true));
        }, // Action to be taken on event
        error: (e: any) => console.log(e), // Action to be taken on error
        complete: () => console.log('Complete') // Action to be taken on complete
    })
})();
