import db from '../config/connection.js';
import { Thought, User } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomUsername, getRandomEmail, getRandomThoughts, randomNumber, comments } from './data.js';

try {
  await db();
  await cleanDB();

  const userIds: any[] = [];

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail(username);
    const thoughts = getRandomThoughts(randomNumber(10), username);
    const thoughtData = await Thought.insertMany(thoughts);
    const thoughtIds = thoughtData.map(thought => thought._id);
    const user = await User.create({ username, email, thoughts: thoughtIds, friends: [] });
    userIds.push(user._id);
  }

  for (const userId of userIds) {
    for (let i = 0; i < randomNumber(10); i++) {
      const friend = userIds[randomNumber(userIds.length)];
      await User.findByIdAndUpdate(userId, { $addToSet: { friends: friend } });
    }
  }

  const allThoughts = await Thought.find();
  for (const thought of allThoughts) {
    for (let i = 0; i < randomNumber(5); i++) {
      const user = await User.findById(userIds[randomNumber(userIds.length)]) || { username: 'username' };
      const reactionBody = comments[randomNumber(comments.length)];
      await Thought.findByIdAndUpdate(thought._id, { $addToSet: { reactions: { reactionBody, username: user.username } } })
    }
  }

  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error: any) {
  console.error('Error seeding database:', error.message);
  process.exit(1);
}

