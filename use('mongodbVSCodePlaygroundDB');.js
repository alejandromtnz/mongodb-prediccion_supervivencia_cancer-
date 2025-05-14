use('mongodbVSCodePlaygroundDB');

// Insertar un documento con insertOne()
db.usuarios.insertOne({
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
});

// Insertar múltiples documentos con insertMany()
db.usuarios.insertMany([
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", ciudad: "Madrid" },
    { nombre: "Carlos", intereses: ["fútbol", "cine"] }
]);

// Ver los documentos insertados
console.log(db.usuarios.find().toArray());