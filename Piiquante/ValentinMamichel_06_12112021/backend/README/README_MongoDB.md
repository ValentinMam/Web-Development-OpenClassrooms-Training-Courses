# Test your local MongoDB and CRUD operations

# Installation

VS CODE extension /
MONGO DB COMPASS

# Connexion

- click on MongoDB icon on left VS Code
- "CONNECTIONS" => localhost:27017
- right click on localhost:27017 => Launch MongoDB Shell

Current Mongosh Log ID: 61bc956665843030eb02bdeb
Connecting to: mongodb://localhost:27017/?readPreference=primary&appname=mongodb-vscode+0.7.0&ssl=false&directConnection=true&serverSelectionTimeoutMS=2000
Using MongoDB: 5.0.5
Using Mongosh: 1.1.7

# Commands

- show dbs
- use db
- show collections
- show users
- show roles
- show profile
- show databases

# Collections

- load()
  Execute a JavaScript file.
- db.auth()
  If running in secure mode, authenticate the user.
- db.collection.find()
  Find all documents in the collection and returns a cursor.
- db.collection.insertOne()
  Insert a new document into the collection.
- db.collection.insertMany()
  Insert multiple new documents into the collection.
- db.collection.updateOne()
  Update a single existing document in the collection.
- db.collection.updateMany()
  Update multiple existing documents in the collection.
- db.collection.save()
  Insert either a new document or update an existing document in the collection.
- db.collection.deleteOne()
  Delete a single document from the collection.
- db.collection.deleteMany()
  Delete documents from the collection.
- db.collection.drop()
  Drops or removes completely the collection.
- db.collection.createIndex()
  Create a new index on the collection if the index does not exist; otherwise, the operation has no effect.
- db.getSiblingDB()
  Return a reference to another database using this same connection without explicitly switching the current database. This allows for cross database queries.

# Basics CRUD

## Create Operations

- db.collection.insertOne()
- db.collection.insertMany()

## Read Operations

- db.collection.find()

## Update Operations

- db.collection.updateOne()
- db.collection.updateMany()
- db.collection.replaceOne()

## Delete Operations

- db.collection.deleteOne()
- db.collection.deleteMany()

## Bulk Write

MongoDB provides the ability to perform write operations in bulk. For details, see Bulk Write Operations.

## CREATE

### Creating a Collection

If the collection does not currently exist, insert operations will create the collection.

### Insert a Single Document

- db.collection.insertOne() inserts a single document into a collection.
- db.inventory.insertOne(
  { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
  )
- db.inventory.find( { item: "canvas" } )

### Insert Multiple Documents

- db.collection.insertMany()
- db.inventory.insertMany([
  { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
  { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
  { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
  ])
- db.inventory.find( {} )

## READ

### Select All Documents in a Collection

- corresponds to SQL statement: SELECT \* FROM inventory
- { field1: value1, ... }
- example selects from the inventory collection all documents where the status equals "D":
- { status: "D" }

### Query using equality condition

- corresponds to SQL statement: SELECT \* FROM inventory WHERE status = "D"
- { field1: { operator1: value1 }, ... }
- example retrieves all documents from the inventory collection where status equals either "A" or "D":
- { status: { $in: [ "A", "D" ] } }

### Query using query operators

- corresponds to SQL statement: SELECT \* FROM inventory WHERE status in ("A", "D")
- Specify AND Conditions
- example retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30:
- { status: "A", qty: { $lt: 30 } }

### Query using multiple conditions with AND

- corresponds to SQL statement: SELECT \* FROM inventory WHERE status = "A" AND qty < 30
- Specify OR Conditions
- example retrieves all documents in the collection where the status equals "A" or qty is less than ($lt) 30:
- { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] }

### Query using OR

- corresponds to SQL statement: SELECT \* FROM inventory WHERE status = "A" OR qty < 30
- Specify AND as well as OR Conditions
- example, the compound query document selects all documents in the collection where the status equals "A" and either qty is less than ($lt) 30 or item starts with the character p:
- { status: "A", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ] }

### Query using AND as well as OR

- corresponds to SQL statement: SELECT \* FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")

### Additional Query Tutorials

- Query on Embedded/Nested Documents https://docs.mongodb.com/manual/tutorial/query-embedded-documents/
- Query an Array https://docs.mongodb.com/manual/tutorial/query-arrays/
- Query an Array of Embedded Documents https://docs.mongodb.com/manual/tutorial/query-array-of-documents/
- Project Fields to Return from Query https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/
- Query for Null or Missing Fields https://docs.mongodb.com/manual/tutorial/query-for-null-fields/

## UPDATE

- db.collection.updateOne(filter, update, options)
- db.collection.updateMany(filter, update, options)
- db.collection.replaceOne(filter, update, options)
- To use the update operators, pass to the update methods an update document of the form: {
  update operator: { field1: value1, ... },
  update operator: { field2: value2, ... },
  ...
  }
  [
  { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
  { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
  { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
  ]

### Update a Single Document

- example uses the db.collection.updateOne() method on the inventory collection to update the first document where item equals "paper":
- db.inventory.updateOne(
  { item: "paper" },
  {
  $set: { "size.uom": "cm", status: "P" },
$currentDate: { lastModified: true }
  }
  )
- uses the $set operator to update the value of the size.uom field to "cm" and the value of the status field to "P",
  uses the $currentDate operator to update the value of the lastModified field to the current date. If lastModified field does not exist, $currentDate will create the field. See $currentDate for details.

### Update Multiple documents

- db.inventory.updateMany(
  { "qty": { $lt: 50 } },
{
$set: { "size.uom": "in", status: "P" },
  $currentDate: { lastModified: true }
  }
  )
- uses the $set operator to update the value of the size.uom field to "in" and the value of the status field to "P",
  uses the $currentDate operator to update the value of the lastModified field to the current date. If lastModified field does not exist, $currentDate will create the field. See $currentDate for details.
- db.inventory.replaceOne(
  { item: "paper" },
  { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
  )

## DELETE

- db.collection.deleteMany()
- db.collection.deleteOne()

- db.inventory.insertMany( [
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
  ] );

### Delete All Documents

- db.inventory.deleteMany({})

### Delete All Documents that Match a Condition

- { field1: value1, ... }
- { field1: { operator1: value1 }, ... }
- example removes all documents from the inventory collection where the status field equals "A":
- db.inventory.deleteMany({ status : "A" })

### Delete Only One Document that Matches a Condition

- db.collection.deleteOne()
- example deletes the first document where status is "D":
- db.inventory.deleteOne( { status: "D" } )
