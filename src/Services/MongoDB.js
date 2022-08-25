// const { MongoClient, ServerApiVersion } = require('mongodb');
// const user = 'maxplanko', password = 'DngDMToz9Ypc2or0', cloud = 'max-cloud';

// export const MongoDBConnect = () => {

//     const uri = `mongodb+srv://${user}:${password}@${cloud}.mdpl6rz.mongodb.net/?retryWrites=true&w=majority`;
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//     client.connect(err => {
//         const collection = client.db("sample_restaurants").collection("restaurants")
//         // perform actions on the collection object
//         console.log(collection)
//         client.close();
//     });
// }