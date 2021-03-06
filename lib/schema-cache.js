'use strict';

class SchemaCache {
  constructor() {
    this.schemasById = new Map();
    this.schemasBySchema = new Map();
    this.schemasByName = new Map();
  }

  setById(schemaId, schema) {
    this.schemasById.set(schemaId, schema);
    return schemaId;
  }

  setByName(name, schema) {
    this.schemasByName.set(name, schema);
    return name;
  }

  setBySchema(schema, id) {
    this.schemasBySchema.set(JSON.stringify(schema), id);
    return schema;
  }

  getById(schemaId) {
    return this.schemasById.get(schemaId);
  }

  getBySchema(schema) {
    return this.schemasBySchema.get(JSON.stringify(schema));
  }

  getByName(name) {
    return this.schemasByName.get(name);
  }
}

module.exports = SchemaCache;
