
const removeDuplicates=(arr, key)=> {
    const seen = new Set();
    return arr.filter(obj => {
      const value = obj[key];
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }


const unfilterd_MOVIES=[
    {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 100.932,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 17806
      },
      {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 98.25,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 23656
      },
      {
        "adult": false,
        "backdrop_path": "/ejnlCzBd5pOGAYCpxC93NXSrdrz.jpg",
        "genre_ids": [
          35,
          14
        ],
        "id": 772071,
        "original_language": "es",
        "original_title": "Cuando Sea Joven",
        "overview": "70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as \"Maria\" to hide her true identity, she becomes the lead singer of her grandson's band and tries to recover her dream of singing, which she had to give up at some point.",
        "popularity": 28.385,
        "poster_path": "/6gIJuFHh5Lj4dNaPG3TzIMl7L68.jpg",
        "release_date": "2022-09-14",
        "title": "Cuando Sea Joven",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 213
      },
      {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 57.533,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 10775
      },
      {
        "adult": false,
        "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "genre_ids": [
          18,
          36,
          10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 51.98,
        "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 13995
      },
      {
        "adult": false,
        "backdrop_path": "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "id": 19404,
        "original_language": "hi",
        "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
        "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
        "popularity": 27.324,
        "poster_path": "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
        "release_date": "1995-10-19",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 4113
      },
      {
        "adult": false,
        "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
        "genre_ids": [
          16,
          10751,
          14
        ],
        "id": 129,
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "popularity": 85.662,
        "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "release_date": "2001-07-20",
        "title": "Spirited Away",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 14210
      },
      {
        "adult": false,
        "backdrop_path": "/tj6iPnz18hGfr0LKqWmG6Cp3niO.jpg",
        "genre_ids": [
          18
        ],
        "id": 389,
        "original_language": "en",
        "original_title": "12 Angry Men",
        "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        "popularity": 39.076,
        "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        "release_date": "1957-04-10",
        "title": "12 Angry Men",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7212
      },
      {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
          10749,
          16,
          18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        "popularity": 94.963,
        "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 9734
      },
      {
        "adult": false,
        "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
        "genre_ids": [
          35,
          53,
          18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "popularity": 72.256,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 15620
      },
      {
        "adult": false,
        "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
        "genre_ids": [
          18,
          28,
          80,
          53
        ],
        "id": 155,
        "original_language": "en",
        "original_title": "The Dark Knight",
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        "popularity": 83.151,
        "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "release_date": "2008-07-14",
        "title": "The Dark Knight",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 29578
      },
      {
        "adult": false,
        "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
        "genre_ids": [
          14,
          18,
          80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "popularity": 58.199,
        "poster_path": "/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg",
        "release_date": "1999-12-10",
        "title": "The Green Mile",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 15312
      },
      {
        "adult": false,
        "backdrop_path": "/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg",
        "genre_ids": [
          16,
          10751,
          12,
          14
        ],
        "id": 995133,
        "original_language": "en",
        "original_title": "The Boy, the Mole, the Fox and the Horse",
        "overview": "The unlikely friendship of a boy, a mole, a fox and a horse traveling together in the boy’s search for home.",
        "popularity": 29.753,
        "poster_path": "/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
        "release_date": "2022-12-25",
        "title": "The Boy, the Mole, the Fox and the Horse",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 309
      },
      {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
          53,
          80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "popularity": 68.574,
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 25040
      },
      {
        "adult": false,
        "backdrop_path": "/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg",
        "genre_ids": [
          10749,
          16
        ],
        "id": 372754,
        "original_language": "ja",
        "original_title": "同級生",
        "overview": "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
        "popularity": 12.556,
        "poster_path": "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
        "release_date": "2016-02-20",
        "title": "Dou kyu sei – Classmates",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 301
      },
      {
        "adult": false,
        "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
        "genre_ids": [
          37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        "popularity": 56.064,
        "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        "release_date": "1966-12-23",
        "title": "The Good, the Bad and the Ugly",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7347
      },
      {
        "adult": false,
        "backdrop_path": "/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "id": 13,
        "original_language": "en",
        "original_title": "Forrest Gump",
        "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "popularity": 62.225,
        "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        "release_date": "1994-06-23",
        "title": "Forrest Gump",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 24529
      },
      {
        "adult": false,
        "backdrop_path": "/uBZQOYZLIU9dBmd62fdzBAoropu.jpg",
        "genre_ids": [
          28,
          12,
          16,
          18
        ],
        "id": 704264,
        "original_language": "en",
        "original_title": "Primal: Tales of Savagery",
        "overview": "Genndy Tartakovsky's Primal: Tales of Savagery features a caveman and a dinosaur on the brink of extinction. Bonded by tragedy, this unlikely friendship becomes the only hope of survival.",
        "popularity": 15.35,
        "poster_path": "/9NBBkdxH0TjQEBSN2AzeE1sgsF9.jpg",
        "release_date": "2019-11-21",
        "title": "Primal: Tales of Savagery",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 262
      },
      {
        "adult": false,
        "backdrop_path": "/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg",
        "genre_ids": [
          12,
          14,
          28
        ],
        "id": 122,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        "popularity": 70.315,
        "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "release_date": "2003-12-01",
        "title": "The Lord of the Rings: The Return of the King",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 21488
      },
      {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "popularity": 39.718,
        "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "release_date": "1990-09-12",
        "title": "GoodFellas",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 11192
      },
      {
        "adult": false,
        "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
        "id": 934433,
        "title": "Scream VI",
        "original_language": "en",
        "original_title": "Scream VI",
        "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
        "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "popularity": 609.941,
        "release_date": "2023-03-08",
        "video": false,
        "vote_average": 7.374,
        "vote_count": 684
      },
      {
        "adult": false,
        "backdrop_path": "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
        "id": 868759,
        "title": "Ghosted",
        "original_language": "en",
        "original_title": "Ghosted",
        "overview": "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
        "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
        "media_type": "movie",
        "genre_ids": [
          10749,
          28,
          35
        ],
        "popularity": 619.83,
        "release_date": "2023-04-21",
        "video": false,
        "vote_average": 7.318,
        "vote_count": 359
      },
      {
        "adult": false,
        "backdrop_path": "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
        "id": 502356,
        "title": "The Super Mario Bros. Movie",
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "media_type": "movie",
        "genre_ids": [
          16,
          12,
          10751,
          14,
          35
        ],
        "popularity": 7212.464,
        "release_date": "2023-04-05",
        "video": false,
        "vote_average": 7.51,
        "vote_count": 1452
      },
      {
        "adult": false,
        "backdrop_path": "/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
        "id": 640146,
        "title": "Ant-Man and the Wasp: Quantumania",
        "original_language": "en",
        "original_title": "Ant-Man and the Wasp: Quantumania",
        "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
        "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          878
        ],
        "popularity": 9272.643,
        "release_date": "2023-02-15",
        "video": false,
        "vote_average": 6.526,
        "vote_count": 1879
      },
      {
        "adult": false,
        "backdrop_path": "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
        "id": 713704,
        "title": "Evil Dead Rise",
        "original_language": "en",
        "original_title": "Evil Dead Rise",
        "overview": "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        "poster_path": "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          53
        ],
        "popularity": 1898.367,
        "release_date": "2023-04-12",
        "video": false,
        "vote_average": 6.965,
        "vote_count": 201
      },
      {
        "adult": false,
        "backdrop_path": "/fUVK7iUF0k9dU3MwV5MIKWMKGys.jpg",
        "id": 298618,
        "title": "The Flash",
        "original_language": "en",
        "original_title": "The Flash",
        "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        "poster_path": "/5aZoKcR8VxYWhiENYOUg6ooGbc8.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          28,
          12
        ],
        "popularity": 170.114,
        "release_date": "2023-06-14",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/dQObIWkxfzKEDhtjOSoFnyCVgt0.jpg",
        "id": 447365,
        "title": "Guardians of the Galaxy Volume 3",
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Volume 3",
        "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          12,
          28
        ],
        "popularity": 235.884,
        "release_date": "2023-05-03",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
        "id": 76600,
        "title": "Avatar: The Way of Water",
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          12,
          28
        ],
        "popularity": 3471.132,
        "release_date": "2022-12-14",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 7530
      },
      {
        "adult": false,
        "backdrop_path": "/m0mLjT3TkTXYU2e1XP3wmYDlIml.jpg",
        "id": 873256,
        "title": "Kiss, Kiss!",
        "original_language": "pl",
        "original_title": "Gorzko, gorzko!",
        "overview": "Convinced he can charm any woman, a tenacious flirt sets his sights on a headstrong bride-to-be engaged to the son of an ambitious politician.",
        "poster_path": "/jLn0dg0n73v8L6lKkTkX5k8POyy.jpg",
        "media_type": "movie",
        "genre_ids": [
          10749,
          35
        ],
        "popularity": 41.779,
        "release_date": "2023-04-26",
        "video": false,
        "vote_average": 7.25,
        "vote_count": 4
      },
      {
        "adult": false,
        "backdrop_path": "/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",
        "id": 594767,
        "title": "Shazam! Fury of the Gods",
        "original_language": "en",
        "original_title": "Shazam! Fury of the Gods",
        "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
        "poster_path": "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          35,
          14
        ],
        "popularity": 4319.273,
        "release_date": "2023-03-15",
        "video": false,
        "vote_average": 6.848,
        "vote_count": 1215
      },
      {
        "adult": false,
        "backdrop_path": "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
        "id": 700391,
        "title": "65",
        "original_language": "en",
        "original_title": "65",
        "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
        "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          12,
          53,
          28
        ],
        "popularity": 1189.997,
        "release_date": "2023-03-02",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 756
      },
      {
        "adult": false,
        "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        "id": 603692,
        "title": "John Wick: Chapter 4",
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          53,
          80
        ],
        "popularity": 1312.743,
        "release_date": "2023-03-22",
        "video": false,
        "vote_average": 7.975,
        "vote_count": 1207
      },
      {
        "adult": false,
        "backdrop_path": "/pbMbDlOAkVuvnxovBA2ENin59xH.jpg",
        "id": 447277,
        "title": "The Little Mermaid",
        "original_language": "en",
        "original_title": "The Little Mermaid",
        "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        "media_type": "movie",
        "genre_ids": [
          12,
          10751,
          14,
          10749
        ],
        "popularity": 210.368,
        "release_date": "2023-05-18",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg",
        "id": 667538,
        "title": "Transformers: Rise of the Beasts",
        "original_language": "en",
        "original_title": "Transformers: Rise of the Beasts",
        "overview": "A ‘90s globetrotting adventure that introduces the Maximals, Predacons, and Terrorcons to the existing battle on earth between Autobots and Decepticons.",
        "poster_path": "/g1HcrEiN0UiSpjQMJ3Klzw8KOZS.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          878
        ],
        "popularity": 161.222,
        "release_date": "2023-06-07",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
        "id": 646385,
        "title": "Scream",
        "original_language": "en",
        "original_title": "Scream",
        "overview": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
        "poster_path": "/4qIV5WXP1xQvpPAHmgVxCmxvPh6.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "popularity": 373.035,
        "release_date": "2022-01-12",
        "video": false,
        "vote_average": 6.737,
        "vote_count": 2344
      },
      {
        "adult": false,
        "backdrop_path": "/3GLrNvvkVJjBiffV8RsEh9Xg1eS.jpg",
        "id": 997776,
        "title": "Justice League x RWBY: Super Heroes & Huntsmen, Part One",
        "original_language": "en",
        "original_title": "Justice League x RWBY: Super Heroes & Huntsmen, Part One",
        "overview": "Superman, Batman, Wonder Woman, Flash, Cyborg, Green Lantern and Vixen are transported to the strange world of Remnant and find themselves turned into teenagers. Meanwhile, Remnant heroes Ruby, Weiss, Blake and Yang must combine forces with the Justice League to uncover why their planet has been mysteriously altered before a superpowered Grimm destroys everything.",
        "poster_path": "/sjBFnG8DpouuWi161KbjbAER235.jpg",
        "media_type": "movie",
        "genre_ids": [
          16,
          28,
          14
        ],
        "popularity": 107.913,
        "release_date": "2023-04-25",
        "video": false,
        "vote_average": 8.238,
        "vote_count": 21
      },
      {
        "adult": false,
        "backdrop_path": "/z3Qc5a0grcCREAQKqI195P05dVf.jpg",
        "id": 813726,
        "title": "A Tourist's Guide to Love",
        "original_language": "en",
        "original_title": "A Tourist's Guide to Love",
        "overview": "After an unexpected break up, a travel executive accepts an assignment to go undercover and learn about the tourist industry in Vietnam. Along the way, she finds adventure and romance with her Vietnamese expat tour guide and they decide to hijack the tour bus in order to explore life and love off the beaten path.",
        "poster_path": "/uWkpjbBe4gRZilXRXbYfsMUZMhz.jpg",
        "media_type": "movie",
        "genre_ids": [
          10749,
          35,
          12
        ],
        "popularity": 275.635,
        "release_date": "2023-04-21",
        "video": false,
        "vote_average": 6.603,
        "vote_count": 39
      },
      {
        "adult": false,
        "backdrop_path": "/vcNXzOfACCXZA7vb8SNde0LUC9o.jpg",
        "id": 1068141,
        "title": "Mighty Morphin Power Rangers: Once & Always",
        "original_language": "en",
        "original_title": "Mighty Morphin Power Rangers: Once & Always",
        "overview": "After tragedy strikes, an unlikely young hero takes her rightful place among the Power Rangers to face off against the team's oldest archnemesis.",
        "poster_path": "/vc87upO8vcAGj9OmgH3AIz6ikKB.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          878,
          14
        ],
        "popularity": 238.666,
        "release_date": "2023-04-19",
        "video": false,
        "vote_average": 6.931,
        "vote_count": 131
      },
      {
        "adult": false,
        "backdrop_path": "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
        "id": 536554,
        "title": "M3GAN",
        "original_language": "en",
        "original_title": "M3GAN",
        "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
        "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          27,
          35
        ],
        "popularity": 724.995,
        "release_date": "2022-12-28",
        "video": false,
        "vote_average": 7.367,
        "vote_count": 2426
      },
      {
        "adult": false,
        "backdrop_path": "/xEn2SqJQ2uBAxSBfrcAqgiFDQCa.jpg",
        "id": 944152,
        "title": "Chokehold",
        "original_language": "tr",
        "original_title": "Boğa Boğa",
        "overview": "Evading a scandal, a couple from Istanbul starts over in a town on the Aegean coast — but quickly discover the locals are determined to get rid of them.",
        "poster_path": "/bW7NgAKpP24skkTjmJxNYWjOwdj.jpg",
        "media_type": "movie",
        "genre_ids": [
          53,
          18
        ],
        "popularity": 246.108,
        "release_date": "2023-04-21",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 15
      },
      {
        "adult": false,
        "backdrop_path": "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 713704,
        "original_language": "en",
        "original_title": "Evil Dead Rise",
        "overview": "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        "popularity": 1696.367,
        "poster_path": "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
        "release_date": "2023-04-12",
        "title": "Evil Dead Rise",
        "video": false,
        "vote_average": 7,
        "vote_count": 207
      },
      {
        "adult": false,
        "backdrop_path": "/5Y5pz0NX7SZS9036I733F7uNcwK.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 758323,
        "original_language": "en",
        "original_title": "The Pope's Exorcist",
        "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
        "popularity": 1073.229,
        "poster_path": "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
        "release_date": "2023-04-05",
        "title": "The Pope's Exorcist",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 143
      },
      {
        "adult": false,
        "backdrop_path": "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 980078,
        "original_language": "en",
        "original_title": "Winnie the Pooh: Blood and Honey",
        "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
        "popularity": 690.338,
        "poster_path": "/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg",
        "release_date": "2023-01-27",
        "title": "Winnie the Pooh: Blood and Honey",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 517
      },
      {
        "adult": false,
        "backdrop_path": "/sp7MPK2K60LLd7A6zjHKsfgjFil.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 296271,
        "original_language": "en",
        "original_title": "The Devil Conspiracy",
        "overview": "The hottest biotech company in the world has discovered they can clone history’s most influential people from the dead. Now, they are auctioning clones of Michelangelo, Galileo, Vivaldi, and others for tens of millions of dollars to the world’s ultra-rich. But when they steal the Shroud of Turin and clone the DNA of Jesus Christ, all hell breaks loose.",
        "popularity": 615.365,
        "poster_path": "/2lUYbD2C3XSuwqMUbDVDQuz9mqz.jpg",
        "release_date": "2023-01-13",
        "title": "The Devil Conspiracy",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 129
      },
      {
        "adult": false,
        "backdrop_path": "/fI5RsaM0NSU6TqztRhA2pal5ezv.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 524.606,
        "poster_path": "/jwMMQR69Xz9AYtX4u2uYJgfAAev.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
        "genre_ids": [
          10752,
          28
        ],
        "id": 840326,
        "original_language": "fi",
        "original_title": "Sisu",
        "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        "popularity": 364.899,
        "poster_path": "/dHx5yuBb05U9vNaNhIBD7jWyxPk.jpg",
        "release_date": "2023-01-27",
        "title": "Sisu",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 16
      },
      {
        "adult": false,
        "backdrop_path": "/qCW1DUmfWj2xLQRCRhrwkQyKROH.jpg",
        "genre_ids": [
          14,
          28,
          12
        ],
        "id": 455476,
        "original_language": "en",
        "original_title": "Knights of the Zodiac",
        "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
        "popularity": 318.281,
        "poster_path": "/ixLxaRJrJZoN3pg6tc2RAsheYmV.jpg",
        "release_date": "2023-04-27",
        "title": "Knights of the Zodiac",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 8
      },
      {
        "adult": false,
        "backdrop_path": "/3phD5uW41TZ8RavH9xjQv661MPw.jpg",
        "genre_ids": [
          12,
          10751,
          14,
          10749
        ],
        "id": 447277,
        "original_language": "en",
        "original_title": "The Little Mermaid",
        "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        "popularity": 246.482,
        "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        "release_date": "2023-05-18",
        "title": "The Little Mermaid",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/8c9c4xg0IdXDg627uQF35K54VpC.jpg",
        "genre_ids": [
          10749,
          35
        ],
        "id": 800301,
        "original_language": "en",
        "original_title": "What's Love Got to Do with It?",
        "overview": "Two childhood friends now in their thirties must decide whether to follow their heads or their hearts once the man decides to follow his parents' advice and enter into an arranged marriage in Pakistan.",
        "popularity": 243.462,
        "poster_path": "/14fGGPAL5PQxuesjO4CFoDJEH5G.jpg",
        "release_date": "2023-01-26",
        "title": "What's Love Got to Do with It?",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 43
      },
      {
        "adult": false,
        "backdrop_path": "/7TUp4uKIaX9c2TAZLPwjty5A0EP.jpg",
        "genre_ids": [
          878,
          12,
          28
        ],
        "id": 447365,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Volume 3",
        "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        "popularity": 239.132,
        "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        "release_date": "2023-05-03",
        "title": "Guardians of the Galaxy Volume 3",
        "video": false,
        "vote_average": 10,
        "vote_count": 1
      },
      {
        "adult": false,
        "backdrop_path": "/pr5B7Hb7711QQDirAyS5P7fKjts.jpg",
        "genre_ids": [
          53,
          28,
          27,
          12
        ],
        "id": 760741,
        "original_language": "en",
        "original_title": "Beast",
        "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
        "popularity": 191.355,
        "poster_path": "/f18rGcLlawKjNC5KRh36S0mvRlY.jpg",
        "release_date": "2022-08-11",
        "title": "Beast",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1077
      },
      {
        "adult": false,
        "backdrop_path": "/sxQuWAUnyZCSJnjXhcGrCP6ASUy.jpg",
        "genre_ids": [
          18,
          27,
          53
        ],
        "id": 931954,
        "original_language": "es",
        "original_title": "Venus",
        "overview": "Lucía, a club dancer on the run, takes refuge in a sinister building on the outskirts of Madrid where her sister Rocío lives with her daughter Alba.",
        "popularity": 164.762,
        "poster_path": "/vyQmDx5CF8x9T6WKCLuoFotGpjf.jpg",
        "release_date": "2022-12-02",
        "title": "Venus",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 82
      },
      {
        "adult": false,
        "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
        "genre_ids": [
          27,
          53,
          9648
        ],
        "id": 717728,
        "original_language": "en",
        "original_title": "Jeepers Creepers: Reborn",
        "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
        "popularity": 165.888,
        "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
        "release_date": "2022-09-15",
        "title": "Jeepers Creepers: Reborn",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 745
      },
      {
        "adult": false,
        "backdrop_path": "/bGfbeZ52aqTvxde9pjyC62jaSUg.jpg",
        "genre_ids": [
          18
        ],
        "id": 919570,
        "original_language": "ro",
        "original_title": "R.M.N.",
        "overview": "A few days before Christmas, having quit his job in Germany, Matthias returns to his Transylvanian village. He wishes to involve himself more in the education of his son, Rudi, left for too long in the care of his mother, Ana, and to rid him of the unresolved fears that have gripped him. He’s also eager to see his ex-lover Csilla and preoccupied about his old father, Otto. When a few new workers are hired at the small factory that Csilla manages, the peace of the community is disturbed, underlying fears grip the adults, and frustrations, conflicts and passions erupt through the thin sliver of apparent understanding and calm.",
        "popularity": 149.396,
        "poster_path": "/kDcEfgF7CUo0IYLIazUYYqxagTG.jpg",
        "release_date": "2022-06-03",
        "title": "R.M.N.",
        "video": false,
        "vote_average": 7,
        "vote_count": 60
      },
      {
        "adult": false,
        "backdrop_path": "/dnrUa6EXInBVfuPZLMDvkH7bMBi.jpg",
        "genre_ids": [
          18
        ],
        "id": 855263,
        "original_language": "en",
        "original_title": "A Thousand and One",
        "overview": "Struggling but unapologetically living on her own terms, Inez is moving from shelter to shelter in mid-1990s New York City. With her 6-year-old son Terry in foster care and unable to leave him again, she kidnaps him so they can build their life together. As the years go by, their family grows and Terry becomes a smart yet quiet teenager, but the secret that has defined their lives threatens to destroy the home they have so improbably built.",
        "popularity": 140.053,
        "poster_path": "/9WyipqK3wOf8lJLWqFX0r7aBodm.jpg",
        "release_date": "2023-03-31",
        "title": "A Thousand and One",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 11
      },
      {
        "adult": false,
        "backdrop_path": "/qElNES0sHVQcbzvGrTx7ccpGzij.jpg",
        "genre_ids": [
          878,
          28,
          18
        ],
        "id": 842675,
        "original_language": "zh",
        "original_title": "流浪地球2",
        "overview": "Humans built huge engines on the surface of the earth to find a new home. But the road to the universe is perilous. In order to save earth, young people once again have to step forward to start a race against time for life and death.",
        "popularity": 99.801,
        "poster_path": "/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
        "release_date": "2023-01-22",
        "title": "The Wandering Earth II",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 164
      },
      {
        "adult": false,
        "backdrop_path": "/kfKW0HBObLAd4Lj27XX5QoLWmGe.jpg",
        "genre_ids": [
          35,
          27,
          14
        ],
        "id": 649609,
        "original_language": "en",
        "original_title": "Renfield",
        "overview": "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
        "popularity": 106.081,
        "poster_path": "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
        "release_date": "2023-04-07",
        "title": "Renfield",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 78
      },
      {
        "adult": false,
        "backdrop_path": "/l2VqHMBEwAYZh6DeAZSlOzAXw7N.jpg",
        "genre_ids": [
          35
        ],
        "id": 933419,
        "original_language": "en",
        "original_title": "Champions",
        "overview": "A stubborn and hotheaded minor league basketball coach is forced to train a Special Olympics team when he is sentenced to community service.",
        "popularity": 100.151,
        "poster_path": "/yVgtsoXyTZBww7SWE4JE1U4Wcel.jpg",
        "release_date": "2023-03-09",
        "title": "Champions",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 85
      },
      {
        "adult": false,
        "backdrop_path": "/ndrZYPNv0jKMCO9Ne98vfNxTzkW.jpg",
        "genre_ids": [
          18,
          53
        ],
        "id": 878375,
        "original_language": "en",
        "original_title": "On a Wing and a Prayer",
        "overview": "After their pilot dies unexpectedly mid-flight, passenger Doug White must safely land a plane and save his entire family from insurmountable danger.",
        "popularity": 86.548,
        "poster_path": "/8GTJwaC2CeNa0Zg6QrPLwrfurpZ.jpg",
        "release_date": "2023-04-06",
        "title": "On a Wing and a Prayer",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 33
      },
      {
        "adult": false,
        "backdrop_path": "/jENycYiYGr5NvMs789zj06JkW5l.jpg",
        "genre_ids": [
          35,
          18
        ],
        "id": 497828,
        "original_language": "en",
        "original_title": "Triangle of Sadness",
        "overview": "A celebrity model couple are invited on a luxury cruise for the uber-rich, helmed by an unhinged, alcoholic captain. What first appears Instagrammable ends catastrophically, leaving the survivors stranded on a desert island in a struggle of hierarchy.",
        "popularity": 80.161,
        "poster_path": "/k9eLozCgCed5FGTSdHu0bBElAV8.jpg",
        "release_date": "2022-09-18",
        "title": "Triangle of Sadness",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1224
      }

]

export const  MOVIES=removeDuplicates(unfilterd_MOVIES,"id")