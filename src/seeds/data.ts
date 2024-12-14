const names = [
  `Aaran`,
  `Aaren`,
  `Aarez`,
  `Aarman`,
  `Aaron`,
  `Aaron-James`,
  `Aarron`,
  `Aaryan`,
  `Aaryn`,
  `Aayan`,
  `Aazaan`,
  `Abaan`,
  `Abbas`,
  `Abdallah`,
  `Abdalroof`,
  `Abdihakim`,
  `Abdirahman`,
  `Abdisalam`,
  `Abdul`,
  `Abdul-Aziz`,
  `Abdulbasir`,
  `Abdulkadir`,
  `Abdulkarem`,
  `Smith`,
  `Jones`,
  `Coollastname`,
  `enter_name_here`,
  `Ze`,
  `Zechariah`,
  `Zeek`,
  `Zeeshan`,
  `Zeid`,
  `Zein`,
  `Zen`,
  `Zendel`,
  `Zenith`,
  `Zennon`,
  `Zeph`,
  `Zerah`,
  `Zhen`,
  `Zhi`,
  `Zhong`,
  `Zhuo`,
  `Zi`,
  `Zidane`,
  `Zijie`,
  `Zinedine`,
  `Zion`,
  `Zishan`,
  `Ziya`,
  `Ziyaan`,
  `Zohaib`,
  `Zohair`,
  `Zoubaeir`,
  `Zubair`,
  `Zubayr`,
  `Zuriel`,
  `Xander`,
  `Jared`,
  `Courtney`,
  `Gillian`,
  `Clark`,
  `Jared`,
  `Grace`,
  `Kelsey`,
  `Tamar`,
  `Alex`,
  `Mark`,
  `Tamar`,
  `Farish`,
  `Sarah`,
  `Nathaniel`,
  `Parker`,
];

const words = [
  'giraffe', 'maroon', 'apple', 'zesty', 'storm', 'eagle', 'crimson', 'cactus', 'swift', 'velvet',
  'lighthouse', 'cloudy', 'forest', 'breeze', 'shadow', 'ember', 'daisy', 'brave', 'radiant', 'phoenix',
  'twilight', 'silver', 'charcoal', 'harmony', 'glimmer', 'onyx', 'shimmer', 'falcon', 'spark', 'whisper',
  'blaze', 'midnight', 'prism', 'serene', 'ocean', 'skylark', 'maple', 'cosmic', 'meadow', 'royal',
  'willow', 'aster', 'sunset', 'glacier', 'orbit', 'boulder', 'scarlet', 'panda', 'clever', 'zephyr',
  'frost', 'caramel', 'raven', 'bright', 'sable', 'wander', 'pearl', 'daring', 'cherry', 'golden',
  'jasmine', 'misty', 'comet', 'tidal', 'hazel', 'ferret', 'opal', 'marble', 'quartz', 'stormy',
  'peach', 'honey', 'cedar', 'plush', 'gentle', 'petal', 'bliss', 'galaxy', 'amber', 'cedar',
  'horizon', 'willow', 'plume', 'cheetah', 'grace', 'eclipse', 'ivy', 'lunar', 'pure', 'summit',
  'steel', 'granite', 'chill', 'bluff', 'cobalt', 'sparkle', 'fable', 'kind', 'turquoise', 'valor',
  'melon', 'lotus', 'sage', 'terra', 'vision', 'rook', 'lush', 'vivid', 'ivory', 'dream',
  'skyline', 'mirage', 'cliff', 'bloom', 'freedom', 'shy', 'canvas', 'gleam', 'tempo', 'sonic',
  'glow', 'mocha', 'witty', 'pinnacle', 'creek', 'topaz', 'quest', 'archer', 'basil', 'firefly',
  'shadow', 'zenith', 'nova', 'violet', 'crown', 'charm', 'spirit', 'fox', 'humble', 'drift',
  'arcade', 'vortex', 'glint', 'gemstone', 'stream', 'ripple', 'heather', 'crystal', 'prairie', 'plume'
]

const posts = [
  `I'm happy today, it's as if the sun came up just for me and it was glorious.`,
  `What is the deal with airline food? Do they want you to starve on your 4-hour flight or what?`,
  `Spent the entire afternoon baking cookies and now the whole house smells like heaven.`,
  `Why does my cat always sit on my laptop as soon as I try to get any work done? 😂`,
  `I just finished my first marathon and honestly, I\'m so proud of myself for pushing through!`,
  `This weather is perfect for curling up with a book and some hot chocolate. 🍫📖`,
  `Can we just take a moment to appreciate how beautiful sunsets are? Nature is amazing.`,
  `Every time I try to save money, an unexpected expense pops up. Adulting is hard. 😅`,
  `Just watched the funniest movie ever, my stomach hurts from laughing so much!`,
  `I finally started that side project I've been putting off, and it feels so good to create again.`,
  `Anyone else feel like time is flying by faster than usual lately? It\'s wild.`,
  `My dog just learned a new trick, and I think he\'s as proud of himself as I am! 🐶`,
  `Coffee lovers, what\'s your go-to order? I\'m looking to try something new.`,
  `I saw the most stunning double rainbow today—it felt like a sign of good things to come.`,
  `Why does my favorite restaurant always have a super long wait time? Is this my life now?`,
  `Got a haircut today and it\'s a little shorter than I wanted, but hey, hair grows back, right?`,
  `Finally tried that viral recipe everyone\'s been raving about. It was worth the hype! 🍴`,
  `Nothing beats the feeling of a clean house and fresh sheets on the bed. Blissful. 🛌`,
  `Do you ever start binge-watching a show and suddenly realize it's 3 AM? Just me? Okay.`,
  `Sometimes, all you need is a walk in the park to clear your mind and feel refreshed.`,
  `I just adopted a kitten, and I\'m already obsessed. She\'s the cutest little thing! 😻`,
  `Tried yoga for the first time today, and let\'s just say I\'m not as flexible as I thought!`,
  `Why do weekends always feel so short? Can we petition for 3-day weekends already?`,
  `Had a random conversation with a stranger today, and it totally made my day.`,
  `Finally crossed something off my bucket list—such a fulfilling experience!`,
  `My plants are thriving, and I feel like a proud parent. 🌱`,
  `Had a spontaneous road trip with friends today, and it was exactly what I needed.`,
  `Cooking dinner feels so much more satisfying when it actually turns out delicious. 😂`,
  `This morning's coffee hit different—maybe it was the extra whipped cream. ☕`,
  `I love how quiet the world feels late at night. It\'s so peaceful.`,
  `I can't stop laughing at the memes from today\'s trending topic. Internet, you win. 😂`,
  `Went to the farmer\'s market and bought way too many fresh flowers. No regrets.`,
  `Sometimes, you just have to put on your favorite song and dance like no one's watching.`,
  `Does anyone else feel instantly happier when they smell fresh bread baking? Just magical.`,
  `I tried journaling today for the first time in years, and it felt surprisingly cathartic.`,
  `The sound of rain is so soothing—perfect background noise for a lazy day at home.`,
  `Had the most amazing meal at a new restaurant today. Highly recommend it to anyone nearby!`,
  `Ever have a day where everything just seems to fall into place? That was my day today.`,
  `I\'ve been working on this painting for weeks, and it\'s finally done. Feeling so accomplished!`,
  `The little things in life—like a kind smile or a random compliment—really do make a difference.`,
  `Sometimes, all you need is a cup of tea and a deep conversation with a close friend.`,
  `I can't stop looking at the photos from my last trip—so many good memories.`,
  `Life lesson of the day: mistakes are just proof that you're trying.`,
  `There's something magical about looking up at the stars and realizing how vast the universe is.`,
  `Made a playlist for a long drive, and it turned out to be the best part of my day.`,
  `Celebrated a small win today because every step forward deserves recognition.`,
  `Do you ever just sit and marvel at how far you\'ve come? Life\'s a journey.`,
  `I stumbled upon an old journal today—it\'s wild to see how much I\'ve grown.`,
  `Sometimes, all you need is a little faith that everything will work out.`,
  `I love watching my favorite shows from childhood—such a comforting kind of nostalgia.`,
]

export const comments: string[] = [
  `Wow, this is amazing!`,
  `Love this so much ❤️`,
  `Haha, this made my day 😂`,
  `What a beautiful shot!`,
  `Can\'t stop watching this! 🔥`,
  `Where is this place?`,
  `This is so relatable.`,
  `I needed this laugh, thanks!`,
  `Such a good vibe!`,
  `OMG, how did you do this?`,
  `Totally agree with you.`,
  `This is so inspiring!`,
  `Can you share more about this?`,
  `Best thing I\'ve seen all day!`,
  `I wish I was there too.`,
  `Goals 😍`,
  `Absolutely stunning!`,
  `Wow, you\'re so talented!`,
  `The colors are incredible.`,
  `This is pure gold!`,
  `How long did this take you?`,
  `This deserves more likes!`,
  `I can\'t stop thinking about this.`,
  `Iconic moment.`,
  `I want to try this now!`,
  `Please make more like this!`,
  `This is what I needed today.`,
  `So proud of you!`,
  `I\'m obsessed with this.`,
  `What app did you use for this?`,
  `You nailed it!`,
  `How can I learn to do this?`,
  `Perfection 👌`,
  `I can\'t stop laughing!`,
  `Such a wholesome post.`,
  `This brought back memories.`,
  `I\'m in love with this!`,
  `Thanks for sharing this.`,
  `This is next-level creativity.`,
  `You\'ve outdone yourself!`,
  `Why is this so funny though?`,
  `This deserves an award!`,
  `Such a mood.`,
  `Bookmarking this for later.`,
  `The internet needed this.`,
  `I\'m blown away by this.`,
  `Pure talent right here.`,
  `So true, it hurts.`,
  `Keep these coming!`,
  `This made me smile 😊`,
]

const emailDomains = [
  `example.com`,
  `gmail.com`,
  `hotmail.com`,
  `yahoo.com`,
  `bing.com`,
  `aol.com`
]

export const getRandom = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];

export const randomNumber = (int: number) => Math.floor(Math.random() * int + 1);

export const getRandomUsername = () => {
  const roll = randomNumber(4);
  switch (roll) {
    case 0:
      return `${getRandom(words)}${getRandom(words)}`;
      break;
    case 1:
      return `${getRandom(words)}_${getRandom(names)}`;
      break;
    case 2:
      return `${getRandom(names)}${getRandom(words)}`;
      break;
    default:
      return `${getRandom(names)}_${getRandom(names)}${Math.abs(randomNumber(80) - 2024 % 1900)}`;
      break;
  }
}

export const getRandomEmail = (username: string) => `${username.toLowerCase()}@${getRandom(emailDomains)}`;

export const getRandomThoughts = (int: number, username: string) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    const thoughtText: string = getRandom(posts) || 'Default thought text';
    results.push({
      thoughtText,
      username
    });
  }
  return results;
};


