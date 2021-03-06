import lebron from './components/images/lebron.jpg'
import kawhi from './components/images/kawhi.jpg'
import harden from './components/images/harden.jpg'
import durant from './components/images/durant.jpg'
import philjackson from './components/images/philjackson.jpg'
const stuff = {
    user:{
  player: true,
  username: 'TheRealLebronJames',
  suspended: false,
  name: "Lebron James",
  image: lebron,
  description: 'Point guard for the Los Angeles Lakers. 4 time NBA champion, 4x Finals MVP, 4x Regular Season MVP.',
  location: "Los Angeles CA, USA",
  organization: "Los Angeles Lakers",
  sports:"Basketball",
  contact: "",
  accomplishments: ["4x NBA Champion", '4x NBA Finals MVP', '4x NBA MVP', '16x NBA All Star', '13x All-NBA First Team'],
  experience: [{title: 'Point Guard', organization: 'Los Angeles Lakers', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
  description: 'Led Lakers to a championship in the NBA Bubble 2020, averaging almost 30 ppg in the Finals against the Miami Heat',
  years: '2018-2020'},
  {title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
  description: 'Made the NBA Finals in all four years, came back from a 3-1 deficit and won a championship in the 2016 NBA FInals', years: '2014-2018'},
  {title: 'Small Forward', organization: 'Miami Heat', league: "NBA", stats:{},
  description: 'Made the NBA Finals in all four years, delivered two championships and won Finals MVP in 2012 and 2013', years: '2010-2014'},
  {title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
  description: 'Took the team to an NBA Finals in 2009, averaged over 25 ppg', years: '2003-2010'}]
  },
users: [
  {
    player: true,
    username: 'TheRealLebronJames',
    suspended: false,
    name: "Lebron James",
    image: lebron,
    description: 'Point guard for the Los Angeles Lakers. 4 time NBA champion, 4x Finals MVP, 4x Regular Season MVP.',
    location: "Los Angeles CA, USA",
    organization: "Los Angeles Lakers",
    sports:"Basketball",
    contact: "",
    accomplishments: ["4x NBA Champion", '4x NBA Finals MVP', '4x NBA MVP', '16x NBA All Star', '13x All-NBA First Team'],
    experience: [{id: '0', title: 'Point Guard', organization: 'Los Angeles Lakers', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
        description: 'Led Lakers to a championship in the NBA Bubble 2020, averaging almost 30 ppg in the Finals against the Miami Heat',
        years: '2018-2020'},
        {id: '1', title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
        description: 'Made the NBA Finals in all four years, came back from a 3-1 deficit and won a championship in the 2016 NBA FInals', years: '2014-2018'},
        {id: '2', title: 'Small Forward', organization: 'Miami Heat', league: "NBA", stats:{},
        description: 'Made the NBA Finals in all four years, delivered two championships and won Finals MVP in 2012 and 2013', years: '2010-2014'},
        {id: '3', title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
        description: 'Took the team to an NBA Finals in 2009, averaged over 25 ppg', years: '2003-2010'}]
  },
  {
    player: true,
    username: 'rapsowemeone',
    name: "Kawhi Leonard",
    suspended: false,
    image: kawhi,
    description: 'SF for the Los Angeles Clippers. 2 time NBA champion, 2x Finals MVP, 2x Defensive Player of the Year.',
    location: "Los Angeles CA, USA",
    organization: "Los Angeles Clippers",
    sports:"Basketball",
    contact: "",
    accomplishments: ["2x NBA Champion", '2x NBA Finals MVP', '2x NBA DPOY', '4x NBA All Star', '2x All-NBA First Team', '2x NBA All-Defensive First Team'],
    experience: [{title: 'Short Forward', organization: 'Los Angeles Clippers', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
    description: 'Led Clippers to 2nd seed in the Western Conference, reached the semifinals of NBA Bubble Playoffs 2020, averaging almost 30 ppg.',
    years: '2019-2020'},
    {title: 'Small Forward', organization: 'Toronto Raptors', league: "NBA", stats:{},
    description: 'Delivered the first championship in team history, won Finals MVP averaging 30ppg in the playoffs.', years: '2018-2019'},
    {title: 'Small Forward', organization: 'San Antonio Spurs', league: "NBA", stats:{},
    description: 'Won NBA Finals MVP in 2014 after defeating the Miami Heat in the NBA Finals 4-1', years: '2011-2019'}
    ]
  },
  {
    player: true,
    username: 'xXx_JamesHarden_xXx',
    name: "James Harden",
    suspended: false,
    image: harden,
    description: 'SG for the Houston Rockets. 3x NBA Scoring Champion, 2017-2018 MVP',
    location: "Houston TX, USA",
    organization: "Houston Rockets",
    sports:"Basketball",
    contact: "",
    accomplishments: ["3x NBA Scoring Champion", '6x NBA All-Star', '6x All-NBA First Team', 'NBA Most Valuable Player (2017-2018)'],
    experience: [{title: 'Shooting Guard', organization: 'Houston Rockets', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
    description: 'Led Houston to the longest current playoff streak in the league. Reached the Western Conference Finals against the Golden State Warriors.',
    years: '2013-2020'},
    {title: 'Shooting Guard', organization: 'Oklahoma City Thunder', league: "NBA", stats:{},
    description: 'Won Sixth Man of the Year and helped the Thunder reach the NBA Finals in 2012.', years: '2009-2013'}
    ]
  },
  {
    player: true,
    username: 'coolguy123',
    suspended: false,
    name: "Kevin Durant",
    image: durant,
    description: 'SF for the Brooklyn Nets. 2x NBA Finals MVP, 2x NBA Champion, 10x NBA All-Star',
    location: "Brooklyn NY, USA",
    organization: "Brooklyn Nets",
    sports:"Basketball",
    contact: "",
    accomplishments: ["2x NBA Finals MVP", "2x NBA Champion", "4x NBA Scoring Champion", '10x NBA All-Star'],
    experience: [{title: 'Small Forward', organization: 'Golden State Warriors', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
    description: 'Led the Golden State Warriors to two straight NBA championships against Lebron James.',
    years: '2016-2019'},
    {title: 'Small Forward', organization: 'Oklahoma City Thunder', league: "NBA", stats:{},
    description: 'Won many league awards and led the Thunder to the NBA Finals in 2012.', years: '2009-2016'}
    ]
  },
  {
    player: false,
    username: 'PhilJackson',
    suspended: false,
    name: "Phil Jackson",
    image: philjackson,
    description: '1996 Coach of the Year, Ex-coach of the Chicago Bulls and Los Angeles Lakers',
    location: "Brooklyn NY, USA",
    organization: "New York Knicks",
    sports:"Basketball",
    contact: "",
    accomplishments: ["11x NBA Champion", "1996 Coach of the Year"],
    experience: [{title: 'Coach', organization: 'L.A. Lakers', league: "NBA",
    description: 'Led the Los Angeles Lakers to two straight NBA championships.',
    years: '2008-2010'},
    {title: 'Coach', organization: 'Chicago Bulls', league: "NBA", stats:{},
    description: 'Won two sets of three straight NBA Champtionships', years: '1990-1993, 1995-1998'}
    ]
  }
],
posts: [
  {user: {username: 'TheRealLebronJames', name: 'Lebron James', image: lebron}, text: "Finals MVP, 2020!!!", likes: 2, 
  comments: [{user: {name: 'Kawhi Leonard', username: 'rapsowemeone', image: kawhi}, text: "I wish I were a Laker..."}, {user: {name: 'Kevin Durant', username: 'coolguy123', image: durant}, text: "Great post!"}]}, 
  {user: {name: 'Lebron James', image: lebron, location: "Los Angeles CA, USA",
  organization: "Los Angeles Lakers",
  sports:"Basketball",}, text: "Lakers have reached the Finals", likes: 5, 
  comments: [{user: {name: 'James Harden', username: 'xXx_JamesHarden_xXx', image: harden}, text: "Good match..."}, 
  {user: {name: 'Kevin Durant', username: 'coolguy123', image: durant}, text: "You are a great player!"}]}]}