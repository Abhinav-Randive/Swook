import Database from 'better-sqlite3';
import path from 'path';


// adjust path based on where we want to store database file
const dbPath = path.resolve(process.cwd(), './data/swapapp.db');

// single db conn that can b reused
let db: Database.Database;

export function getDB(): Database.Database {
    if (!db) {
      try {
        db = new Database(dbPath);
        console.log('Connected to database at:', dbPath);
      } catch (err) {
        console.error('Error connecting to database:', err);
        throw err;
      }
    }
    return db;
  }

// connections close down when app shut down
process.on('exit', () => {
  if (db) db.close();
});