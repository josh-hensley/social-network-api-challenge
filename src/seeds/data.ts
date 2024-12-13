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

const comments: string[] = [
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

export const randomNumber = (int: number) => Math.floor(Math.random() * int);

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
    const thoughtText: string = getRandom(comments) || 'Default thought text';
    results.push({
      thoughtText,
      username
    });
  }
  return results;
};
