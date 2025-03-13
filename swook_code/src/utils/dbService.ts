import { getDB } from './db';

// initialisng user object

export interface User {
    id?: number;
    username: string;
    email: string;
    password_hash: string;
}

// item object

export interface Item {
    id?: number;
    user_id: number;
    title: string;
    description?: string;
    image_url?: string;
    status: string;
}

// match

export interface Match {
    id?: number;
    user1_id: number;
    user2_id: number;
    item1_id: number;
    item2_id: number;
    status: string;
  }


// userservice object w/ 3 utils 
//   1. get user by id
//   2. get user by email
//   3. new user into database n returns created user with assigned id

export const userService = {
  getUserById: (id: number) => {
    const db = getDB();
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id) as User | undefined;
  },
  
  getUserByEmail: (email: string) => {
    const db = getDB();
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined;
  },
  
  createUser: (user: Omit<User, 'id'>) => {
    const db = getDB();
    const result = db.prepare(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)'
    ).run(user.username, user.email, user.password_hash);
    
    return {
      id: result.lastInsertRowid as number,
      ...user
    };
  }
};

