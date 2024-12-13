import db from '../config/connection.js';
import { Thought, User } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomUsername, getRandomEmail, getRandomThoughts, randomNumber } from './data.js';

try {
  await db();
  await cleanDB();

  const users: any[] = [];
  const thoughts: any[] = [];

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    thoughts.push(...getRandomThoughts(randomNumber(10), username));

    users.push({
      username,
      email
    });
  }

  const userData = await User.insertMany(users);
  const thoughtData = await Thought.insertMany(thoughts);

  console.table(userData);
  console.table(thoughtData);

  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}

