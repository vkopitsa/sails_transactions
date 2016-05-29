module.exports = {

    // Set schema true/false for adapters that support schemaless
    schema: false,

    attributes: {
        id: {
            type: 'integer',
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            maxLength: 11
        },
        name: {
            type: 'string',
            maxLength: 255
        }
    }
};
