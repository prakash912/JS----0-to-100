// // // 'use strict';

// // // // Data needed for a later exercise
// // // // const flights =
// // // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // // // Data needed for first part of the section
// // // // const restaurant = {
// // // //   name: 'Classico Italiano',
// // // //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// // // //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// // // //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// // // //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// // // //   order: function (index1, index2) {
// // // //     return [this.starterMenu[index1], this.mainMenu[index2]];
// // // //   },

// // // //   openingHours: {
// // // //     thu: {
// // // //       open: 12,
// // // //       close: 22,
// // // //     },
// // // //     fri: {
// // // //       open: 11,
// // // //       close: 23,
// // // //     },
// // // //     sat: {
// // // //       open: 0, // Open 24 hours
// // // //       close: 24,
// // // //     },
// // // //   },
// // // // };

// // // // const [starterMenu, mainMenu] = [restaurant.starterMenu, restaurant.mainMenu];

// // // // console.log(starterMenu, mainMenu);

// // // // const [one, two] = restaurant.order(2, 0);

// // // // console.log(one, two);

// // // // const nested = [2, 4, [5, 6]];

// // // // const [a, , b] = nested;
// // // // console.log(a, b);

// // // // Assignment 1

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// const entries = [];
// for (const bookEn of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([bookEn]);
// }

// for (const [index, value] of Object.values(
//   books[2].thirdParty.goodreads
// ).entries()) {
//   console.log(entries[index]);
//   entries[index].push(value);
// }
// console.log(entries);

// // const getFirstKeyword = book => {
// //   console.log(book?.keywords?.[0] ?? 'no keyword found');
// // };

// // getFirstKeyword(books[8]);

// //for of loop
// // let pageSum = 0;
// // for (const item of books) {
// //   pageSum = pageSum + item.pages;
// // }
// // console.log(pageSum, 'page');

// // let allAuthors = [];
// // for (const item of books) {
// //   if (typeof item.author === 'string') {
// //     allAuthors.push(item.author);
// //   } else {
// //     for (const nesItem of item.author) {
// //       allAuthors.push(nesItem);
// //     }
// //   }
// // }

// // console.log(allAuthors, 'all');
// // for (const it of allAuthors.entries()) {
// //   console.log(`${it[0] + 1}: ${it[1]}`);
// // }

// // // function hasExamplesInJava(bookData) {
// // //   console.log(bookData.programmingLanguage === 'Java' || 'no data available');
// // // }
// // // function checkBook() {
// // //   for (let i = 0; i < books.length; i++) {
// // //     books[i].onlineContent = books[i].edition || 1;
// // //   }
// // // }

// // // function checkBook() {
// // //   for (let i = 0; i < books.length; i++) {
// // //     books[i].highlighted &&= books[i].thirdParty?.goodreads.rating < 4.2;
// // //   }
// // // }

// // // checkBook();

// // // hasExamplesInJava(books[0]);
// // // // const [mainKeyword, ...rest] = books[0].keywords;
// // // // console.log(mainKeyword);
// // // // console.log(rest);

// // // // function printBookAuthorsCount(title, ...authors) {
// // // //   console.log(`The book "${title}" has ${authors.length} authors`);
// // // // }

// // // // printBookAuthorsCount('algo', 'sita', 'ram');

// // // // const bookAuthors = [...books[0].author, ...books[1].author];
// // // // // console.log(bookAuthors);
// // // // function spellWord(str) {
// // // //   console.log(...str, ' ');
// // // // }
// // // // spellWord('prakash');

// // // // const [firstBook] = books;
// // // // const { title, author, ISBN } = firstBook;
// // // // console.log(title, author, ISBN);
// // // // let tags = books[0];
// // // // ({ keywords: tags } = books[0]);
// // // // // console.log(tags, 'tags');
// // // // const { language, programmingLanguage = 'unknown' } = books[6];
// // // // console.log(programmingLanguage);

// // // // let booTitle = 'unknown';
// // // // let bookAuthor = 'unknown';
// // // // ({ title: booTitle, author: bookAuthor } = books[0]);
// // // // console.log(bookAuthor);
// // // // const {
// // // //   thirdParty: {
// // // //     goodreads: { rating: bookRating },
// // // //   },
// // // // } = books[0];
// // // // console.log(bookRating);

// // // // function printBookInfo({ title, author, year = 'unknown' }) {
// // // //   console.log(`${title} by ${author},${year}`);
// // // // }

// // // // printBookInfo({ title: 'Algo', author: 'robert' });

// // // // console.log(firstBook);
// // // // console.log(secondBook);
// // // // console.log(thirdBook);

// // // // const ratings = [
// // // //   ['rating', 4.19],
// // // //   ['ratingsCount', 144584],
// // // // ];

// // // // const [[, rating], [, ratingsCount]] = ratings;

// // // // console.log(rating);
// // // // console.log(ratingsCount);

// // // // const ratingStars = [63405, 1808];

// // // // const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
// // // //   ratingStars;

// // // // console.log(threeStarRatings);

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // //1
// // const [player1, player2] = game.players;
// // console.log(player1);
// // console.log(player2);

// // //2
// // const [gk, ...fieldPlayers] = player1;
// // console.log(gk, fieldPlayers);

// // //3
// // const allPlayers = [...player1, ...player2];
// // console.log(allPlayers);

// // //4
// // const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// // //5
// // const { team1, x: draw, team2 } = game.odds;
// // console.log('check', team1, draw, team2);

// // // 6.
// // const printGoals = function (...players) {
// //   console.log(players);
// //   console.log(`${players.length} goals were scored`);
// // };

// // // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // // printGoals('Davies', 'Muller');
// // printGoals(...game.scored);

// // // 7.
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

// // /*
// // We're building a football betting app (soccer for my American friends 😅)!

// // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // GOOD LUCK 😀
// // */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const sc of game.scored.entries()) {
//   console.log(`${sc[0] + 1} --> ${sc[1]}`);
// }
// let oddTot = 0;
// const odd = Object.values(game.odds);
// for (const od of odd) {
//   oddTot = oddTot + od;
// }
// console.log(oddTot / odd.length);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamst = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`odd of ${teamst} ${odd}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);

// const uniqKeywords = new Set(allKeywords);
// console.log(uniqKeywords);
// uniqKeywords.add('coding');
// console.log(uniqKeywords);
// uniqKeywords.delete('business');
// console.log(uniqKeywords);
// const unqKeywordArray = [...uniqKeywords];
// console.log(unqKeywordArray);
// uniqKeywords.clear();
// console.log(uniqKeywords);

// const bookMap = new Map([
//   ['title', 'clean code'],
//   ['author', 'Robert Martin'],
// ]);
// bookMap.set('pages', 464);
// const tit = bookMap.get('title');
// const aut = bookMap.get('author');
// console.log(`${tit} by ${aut}`);
// console.log(bookMap.size);
// if (bookMap.has('author')) {
//   console.log(`the author of this book is known ${bookMap.get('author')}`);
// }

const firstBookMap = new Map(Object.entries(books[0]));
for (const [key, value] of firstBookMap) {
  // console.log(`${key} --> ${value}`);
  if (typeof value === 'number') {
    console.log(key);
  }
}
