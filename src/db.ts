import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export const db = new JsonDB(new Config('tokendb', true, false, '/'));

module.exports = {
  push: (key: string, value: any) => db.push(`/${key}/`, value),
  get: () => Object.values(db.getData('../')),
  delete: (key: string) => db.delete(`../${key}/`),
};
