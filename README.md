# papr-getting-started-example-issue

https://github.com/plexinc/papr/issues/30

### Setup

* Clone the repository
* Install the dependencies - `yarn`
* Modify the database connection-string, name if needed.

```js
// papr.ts

export async function connect() {
  client = await mongodb.MongoClient.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
  });

  papr.initialize(client.db('papr'));
}
```

* Run the app - `yarn run start`
