/*const stateSeed = [
  {
    name: "Alabama",
    houseDems: 32,
    houseGOP: 72,
    houseOther: 0,
    senateDems: 8,
    senateGOP: 26,
    senateOther: 1,
    speaker: "Mac McCutcheon",
    houseMajority: "Nathaniel Ledbetter",
    houseMinority: "Anthony Daniels",
    senateMajority: "Greg Reed",
    senateMinority: "Bill Beasley",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/2000px-Flag_of_Alabama.svg.png",
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Alabama_State_House_Apr2009.jpg/280px-Alabama_State_House_Apr2009.jpg"
  },
   {
    name: "Alaska",
    houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
 
  {
    name: "Arizona",
    houseDems: 25,
    houseGOP: 35,
    houseOther: 0,
    senateDems: 13,
    senateGOP: 17,
    senateOther: 0,
    speaker: "J.D. Mesnard",
    houseMajority: "John Allen",
    houseMinority: "Rebecca Rios",
    senateMajority: "Kimberly Yee",
    senateMinority: "Katie Hobbs",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/255px-Flag_of_Arizona.svg.png",
    mainImage: "http://thehill.com/sites/default/files/styles/thumb_small_article/public/statecapitolbuildings_arizona_phoenix_thinkstock.jpg?itok=FX0bfXtw"
  },
   {
    name: "Arkansas",
    houseDems: 24,
    houseGOP: 76,
    houseOther: 0,
    senateDems: 9,
    senateGOP: 25,
    senateOther: 0,
    speaker: "Jeremy Gillam",
    houseMajority: "Ken Bragg",
    houseMinority: "Michael John Gray",
    senateMajority: "Jim Hendren",
    senateMinority: "Keith Ingram",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/1200px-Flag_of_Arkansas.svg.png",
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/OldStateHouseLittleRock2008.jpg/1200px-OldStateHouseLittleRock2008.jpg"
  },
   {
    name: "California",
    houseDems: 55,
    houseGOP: 25,
    houseOther: 0,
    senateDems: 25,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Anthony Rendon",
    houseMajority: "Ian Calderon",
    houseMinority: "Brian Dahle",
    senateMajority: "Bill Monning",
    senateMinority: "Patricia Bates",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1200px-Flag_of_California.svg.png",
    mainImage: "https://static1.squarespace.com/static/5472abbae4b0859145039552/t/55de2131e4b03ad19811b8ff/1441209732165/California+State+House.jpg?format=1500w"
  },
   {
    name: "Colorado",
    houseDems: 26,
    houseGOP: 29,
    houseOther: 0,
    senateDems: 16,
    senateGOP: 18,
    senateOther: 1,
    speaker: "Crisanta Duran",
    houseMajority: "KC Becker",
    houseMinority: "Patrick Neville",
    senateMajority: "Chris Holbert",
    senateMinority: "Lucia Guzman",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/255px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png",
    mainImage: "https://coloradopeakpolitics.com/wp-content/uploads/2012/11/Colorado-State-House.jpg"
  },
   {
    name: "Connecticut",
    houseDems: 80,
    houseGOP: 71,
    houseOther: 2,
    senateDems: 18,
    senateGOP: 18,
    senateOther: 0,
    speaker: "Joe Aresimowicz",
    houseMajority: "Matthew Ritter",
    houseMinority: "Themis Klarides",
    senateMajority: "Bob Duff",
    senateMinority: "none",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/220px-Flag_of_Connecticut.svg.png",
    mainImage: "https://media-cdn.tripadvisor.com/media/photo-s/06/42/96/14/connecticut-state-house.jpg"
  },
   {
    name: "Delaware",
    houseDems: 25,
    houseGOP: 16,
    houseOther: 0,
    senateDems: 11,
    senateGOP: 10,
    senateOther: 0,
    speaker: "Peter Schwartzkopf",
    houseMajority: "Valerie Longhurst",
    houseMinority: "Daniel Short ",
    senateMajority: "Margaret Rose Henry",
    senateMinority: "F. Gary Simpson",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/2000px-Flag_of_Delaware.svg.png",
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Old_State_House%2C_Dover%2C_March_2013.jpg/1200px-Old_State_House%2C_Dover%2C_March_2013.jpg"
  },
   {
    name: "Florida",
    houseDems: 41,
    houseGOP: 75,
    houseOther: 0,
    senateDems: 16,
    senateGOP: 23,
    senateOther: 0,
    speaker: "Richard Corcoran",
    houseMajority: "Ray Rodrigues",
    houseMinority: "Janet Cruz",
    senateMajority: "Wilton Simpson",
    senateMinority: "Oscar Braynon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/255px-Flag_of_Florida.svg.png",
    mainImage: "http://sunshinestatenews.com/sites/default/files/styles/article_370w/public/story_images/floridacapitol-sunshinestatenews_1.jpg?itok=1R7_Dkgz"
  },
   {
    name: "Georgia",
    houseDems: 19,
    houseGOP: 37,
    houseOther: 0,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "David Ralston",
    houseMajority: "Jon G. Burns",
    houseMinority: "Robert Trammell",
    senateMajority: "Bill Cowsert",
    senateMinority: "Steve Henson",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/255px-Flag_of_Georgia_%28U.S._state%29.svg.png",
    mainImage: "http://beattye.pbworks.com/f/1209530146/georgiastatehouse.jpg"
  },
   {
    name: "Hawaii",
    houseDems: 46,
    houseGOP: 5,
    houseOther: 0,
    senateDems: 25,
    senateGOP: 0,
    senateOther: 0,
    speaker: "Scott Saiki",
    houseMajority: "Cindy Evans",
    houseMinority: "Andria Tupola",
    senateMajority: "J. Kalani English",
    senateMinority: "none",
    flag: "https://cdn.britannica.com/64/1164-004-0CD31DB5.jpg",
    mainImage: "https://www.uhpa.org/wp-content/uploads/2014/07/hawaii-state-capitol.jpg"
  },
   {
    name: "Idaho",
      houseDems: 11,
    houseGOP: 59,
    houseOther: 0,
    senateDems: 6,
    senateGOP: 29,
    senateOther: 0,
    speaker: "Scott Bedke",
    houseMajority: "Mike Moyle",
    houseMinority: "Mat Erpelding",
    senateMajority: "Chuck Winder",
    senateMinority: "Michelle Stennett",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/2000px-Flag_of_Idaho.svg.png",
    mainImage: "https://legislature.idaho.gov/wp-content/uploads/9-IdahoStateCapitol-Vistor.jpg"
  },
   {
    name: "Illinois",
      houseDems: 51,
    houseGOP: 67,
    houseOther: 0,
    senateDems: 37,
    senateGOP: 21,
    senateOther: 1,
    speaker: "Michael Madigan",
    houseMajority: "Barbara Flynn Currie",
    houseMinority: "Jim Durkin",
    senateMajority: "James Clayborne",
    senateMinority: "Bill Brady",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/2000px-Flag_of_Illinois.svg.png",
    mainImage: "http://www.ilstatehouse.com/images/BarnardExt.jpg"
  },
   {
    name: "Indiana",
      houseDems: 30,
    houseGOP: 70,
    houseOther: 0,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Brian C. Bosma",
    houseMajority: "Matthew Lehman",
    houseMinority: "Terry Goodin",
    senateMajority: "Rodric Bray",
    senateMinority: "Timothy Lanane",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/2000px-Flag_of_Indiana.svg.png",
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/StateCapitolIndiana.jpg/1200px-StateCapitolIndiana.jpg"
  },
   {
    name: "Iowa",
       houseDems: 41,
    houseGOP: 59,
    houseOther: 0,
    senateDems: 20,
    senateGOP: 29,
    senateOther: 1,
    speaker: "Linda Upmeyer",
    houseMajority: "Chris Hagenow",
    houseMinority: "Mark Smith",
    senateMajority: "Jack Whitver",
    senateMinority: "Janet Petersen",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/248px-Flag_of_Iowa.svg.png",
    mainImage: "https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/1/f7/1f75a45e-e8ec-11e6-ba4c-5334c9208714/5892945df0ef1.image.jpg?resize=1200%2C799"
  },
   {
    name: "Kansas",
        houseDems: 40,
    houseGOP: 85,
    houseOther: 0,
    senateDems: 9,
    senateGOP: 30,
    senateOther: 1,
    speaker: "Ron Ryckman Jr.",
    houseMajority: "Don Hineman",
    houseMinority: "Jim Ward",
    senateMajority: "Jim Denning",
    senateMinority: "Anthony Hensley",
    flag: "https://www.50states.com/flag/image/nunst024.gif",
    mainImage: "https://www.jedunn.com/sites/default/files/project_images/KS%20Statehouse_E_H_Exterior%201%20copy.jpg"
  },
   {
    name: "Kentucky",
    houseDems: 37,
    houseGOP: 63,
    houseOther: 0,
    senateDems: 11,
    senateGOP: 27,
    senateOther: 0,
    speaker: "David Osborne",
    houseMajority: "Jonathan Shell",
    houseMinority: "Rocky Adkins",
    senateMajority: "Damon Thayer",
    senateMinority: "Ray S. Jones II",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Louisiana",
        houseDems: 41,
    houseGOP: 60,
    houseOther: 3,
    senateDems: 14,
    senateGOP: 25,
    senateOther: 0,
    speaker: "Taylor Barras",
    houseMajority: "none",
    houseMinority: "none",
    senateMajority: "Danny Martiny",
    senateMinority: "none",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/255px-Flag_of_Louisiana.svg.png",
    mainImage: "https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2017/06/28134203/Louisiana-state-capitol-building-feat-2.jpg"
  },
   {
    name: "Maine",
      houseDems: 74,
    houseGOP: 70,
    houseOther: 9,
    senateDems: 17,
    senateGOP: 18,
    senateOther: 0,
    speaker: "Sara Gideon",
    houseMajority: "Erin Herbig",
    houseMinority: "Kenneth Fredette",
    senateMajority: "Garrett Mason",
    senateMinority: "Troy Jackson",
    flag: "https://www.united-states-flag.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/m/a/maine.jpg",
    mainImage: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/MaineCapitolAugusta.jpg"
  },
   {
    name: "Maryland",
       houseDems: 91,
    houseGOP: 50,
    houseOther: 0,
    senateDems: 33,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Michael E. Busch",
    houseMajority: "William Frick",
    houseMinority: "Nicholaus R. Kipke",
    senateMajority: "Douglas J. J. Peters",
    senateMinority: "J. B. Jennings",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/2000px-Flag_of_Maryland.svg.png",
    mainImage: "http://www.davidhochhauser.com/gallery3/var/albums/State-Capitols/Annapolis%2C-MD/IMG_2740%20-%20MD%20State%20House%2C%20Annapolis.JPG?m=1337913706"
  },
   {
    name: "Massachusetts",
       houseDems: 117,
    houseGOP: 34,
    houseOther: 2,
    senateDems: 31,
    senateGOP: 7,
    senateOther: 0,
    speaker: "Robert DeLeo",
    houseMajority: "Ronald Mariano",
    houseMinority: "Bradley Jones, Jr.",
    senateMajority: "Cynthia Stone Creem",
    senateMinority: "Bruce Tarr",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/2000px-Flag_of_Massachusetts.svg.png",
    mainImage: "https://www.boston-discovery-guide.com/image-files/800-state-house-flag.jpg"
  },
   {
    name: "Michigan",
      houseDems: 47,
    houseGOP: 63,
    houseOther: 0,
    senateDems: 11,
    senateGOP: 27,
    senateOther: 0,
    speaker: "Tom Leonard",
    houseMajority: "Dan Lauwers",
    houseMinority: "Sam Singh",
    senateMajority: "Arlan Meekhof",
    senateMinority: "Jim Ananich",
    flag: "https://www.50states.com/flag/image/nunst035.gif",
    mainImage: "http://fw-d7.freedomworks.org.s3.amazonaws.com/field/image/o-MICHIGAN-STATE-CAPITOL-facebook.jpg"
  },
   {
    name: "Minnesota",
     houseDems: 56,
    houseGOP: 76,
    houseOther: 0,
    senateDems: 33,
    senateGOP: 33,
    senateOther: 0,
    speaker: "Kurt Daudt",
    houseMajority: "none",
    houseMinority: "Melissa Hortman",
    senateMajority: "Paul Gazelka,
    senateMinority: "Tom Bakk",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/255px-Flag_of_Minnesota.svg.png",
    mainImage: "https://www.house.leg.state.mn.us/SessionDaily/VSDImagesFull/052217-PhotoFeature-SunCap_3-PB.jpg"
  },
   {
    name: "Mississippi",
        houseDems: 48,
    houseGOP: 72,
    houseOther: 0,
    senateDems: 19,
    senateGOP: 33,
    senateOther: 0,
    speaker: "Philip Gunn",
    houseMajority: "none",
    houseMinority: "Tyrone Ellis",
    senateMajority: "none",
    senateMinority: "none",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/255px-Flag_of_Mississippi.svg.png",
    mainImage: "https://data.christianpost.com/full/80874/img.jpg"
  },
   {
    name: "Missouri",
       houseDems: 47,
    houseGOP: 114,
    houseOther: 0,
    senateDems: 10,
    senateGOP: 24,
    senateOther: 0,
    speaker: "Todd Richardson",
    houseMajority: "Rob Vescovo",
    houseMinority: "Gail McCann Beatty",
    senateMajority: "none",
    senateMinority: "Gina Walsh",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/255px-Flag_of_Missouri.svg.png",
    mainImage: "http://mediad.publicbroadcasting.net/p/kwmu/files/styles/x_large/public/201505/MissouriCapitol.jpg"
  },
   {
    name: "Montana",
        houseDems: 41,
    houseGOP: 59,
    houseOther: 0,
    senateDems: 18,
    senateGOP: 32,
    senateOther: 0,
    speaker: "Austin Knudsen",
    houseMajority: "Ron Ehli",
    houseMinority: "Jenny Eck",
    senateMajority: "Fred Thomas",
    senateMinority: "Jon Sesso",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/255px-Flag_of_Montana.svg.png",
    mainImage: "https://s-i.huffpost.com/gen/2118824/images/o-MONTANA-STATEHOUSE-facebook.jpg"
  },
   {
    name: "Nebraska",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Nevada",
      houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "New Hampshire",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "New Jersey,
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "New Mexico",
      houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "New York",
     houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "North Carolina",
      houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "North Dakota",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Ohio,
     houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Oklahoma",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Oregon",
      houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Pennsylvania",
        houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Rhode Island",
        houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "South Carolina",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "South Dakota",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Tennessee",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Texas",
      houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Utah",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Vermont",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Virginia",
        houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Washington",
        houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "West Virginia",
       houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Wisconsin",
        houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  },
   {
    name: "Wyoming",
    houseDems: 17,
    houseGOP: 21,
    houseOther: 2,
    senateDems: 6,
    senateGOP: 14,
    senateOther: 0,
    speaker: "Bryce Edgmon",
    houseMajority: "Chris Tuck",
    houseMinority: "Charrisse Millett",
    senateMajority: "Peter Micciche",
    senateMinority: "Berta Gardner",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2000px-Flag_of_Alaska.svg.png",
    mainImage: "https://krbd-org.s3.amazonaws.com/wp-content/uploads/2013/10/Alaska_State_Capitol-e1381353775419.jpg"
  }

];

db.State
  .remove({})
  .then(() => db.State.collection.insertMany(stateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });*/



  /*const stateSeed = [
  {
    title: "Title",
    author: "Jesse Stoler",
    text: "This is one blog",
    state: "Alabama"
  },
  {
    title: "Second Title",
    author: "Slowdive",
    text: "Fuck Yes",
    state: "Kansas"
  }
];

db.Blog
  .remove({})
  .then(() => db.Blog.collection.insertMany(stateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });*/

  /*const stateSeed = [
    {
      name: "Mac McCutcheon",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 1,
      state: "Alabama",
      party: "Republican",
      district: "2nd",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
    
    },
    {
      name: "Nathaniel Ledbetter",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 2,
      state: "Alabama",
      party: "Republican",
       district: "3rd",
       bio: "No information yet. Click on the edit button to contribute!",
       committees: "Judiciary"
      
    },
    {
      name: "Anthony Daniels",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 3,
      state: "Alabama",
      party: "Democrat",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
      
    },
     {
      name: "Bryce Edgmon",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 4,
      state: "Alaska",
      party: "Democrat",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
    },
    {
      name: "David Mills",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 5,
      state: "Alaska",
      party: "Republican",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
      
    },
    {
      name: "William Somerset",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 6,
      state: "Alaska",
      party: "Democrat",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
    },
     {
      name: "Laura Brown",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 7,
      state: "Arizona",
      party: "Republican",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
     
    },
    {
      name: "Clarissa Vaughan",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 2,
      state: "Arizona",
      party: "Republican",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
      
    },
    {
      name: "Virginia Woolf",
      image: "https://assets3.thrillist.com/v1/image/1667077/size/tmg-article_default_mobile;jpeg_quality=20.jpg",
      firstYear: 3,
      state: "Arizona",
      party: "Democrat",
      bio: "No information yet. Click on the edit button to contribute!",
      committees: "Judiciary"
      
    }
  ];
  
  db.Senator
    .remove({})
    .then(() => db.Senator.collection.insertMany(stateSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });*/

  /*  const stateSeed = [
      {
        name: "Carol",
        sponsor: "Todd Haynes",
        image: "https://media.istockphoto.com/photos/dollar-sign-isolated-picture-id652872508?k=6&m=652872508&s=612x612&w=0&h=v-pgy795Ht-pbI2LSBwv9yQ8n0XPnaxPV7fyiPJ9B3A=",
        summary: "Lesbians fall in love in the 50s.",
        text: "She hurries from the house, wearing a coat too heavy for the weather. It is 1941. Another war has begun. She has left a note for Leonard, and another for Vanessa. She walks purposefully toward the river, certain of what she‘ll do, but even now she is almost distracted by the sight of the downs, the church, and a scattering of sheep, incandescent, tinged with a faint hint of sulfur, grazing under a darkening sky. She pauses, watching the sheep and the sky, then walks on. The voices murmur behind her; bombers drone in the sky, though she looks for the planes and can‘t see them. She walks past one of the farm workers (is his name John?), a robust, small-headed man wearing a potato-colored vest, cleaning the ditch that runs through the osier bed. He looks up at her, nods, looks down again into the brown water. As she passes him on her way to the river she thinks of how successful he is, how fortunate, to be cleaning a ditch in an osier bed. She herself has failed. She is not a writer at all, really; she is merely a gifted eccentric.",
        state: "New York",
        likes: "0",
        dislikes: "0",
        popularity: "0",
        votes: "0"
      },
      {
        name: "La La Land",
        sponsor: "Damien Chazelle",
        image: "https://media.istockphoto.com/photos/dollar-sign-isolated-picture-id652872508?k=6&m=652872508&s=612x612&w=0&h=v-pgy795Ht-pbI2LSBwv9yQ8n0XPnaxPV7fyiPJ9B3A=",
        summary: "A musical romance between two aspiring artists.",
        text: "She hurries from the house, wearing a coat too heavy for the weather. It is 1941. Another war has begun. She has left a note for Leonard, and another for Vanessa. She walks purposefully toward the river, certain of what she‘ll do, but even now she is almost distracted by the sight of the downs, the church, and a scattering of sheep, incandescent, tinged with a faint hint of sulfur, grazing under a darkening sky. She pauses, watching the sheep and the sky, then walks on. The voices murmur behind her; bombers drone in the sky, though she looks for the planes and can‘t see them. She walks past one of the farm workers (is his name John?), a robust, small-headed man wearing a potato-colored vest, cleaning the ditch that runs through the osier bed. He looks up at her, nods, looks down again into the brown water. As she passes him on her way to the river she thinks of how successful he is, how fortunate, to be cleaning a ditch in an osier bed. She herself has failed. She is not a writer at all, really; she is merely a gifted eccentric.",
        state: "Idaho",
        likes: "0",
        dislikes: "0",
        popularity: "0",
        votes: "0"
      },
      {
        name: "Dunkirk",
        sponsor: "Christopher Nolan",
        image: "https://media.istockphoto.com/photos/dollar-sign-isolated-picture-id652872508?k=6&m=652872508&s=612x612&w=0&h=v-pgy795Ht-pbI2LSBwv9yQ8n0XPnaxPV7fyiPJ9B3A=",
        summary: "Soldiers fight to stay alive during the evacuation at Dunkirk.",
        text: "She hurries from the house, wearing a coat too heavy for the weather. It is 1941. Another war has begun. She has left a note for Leonard, and another for Vanessa. She walks purposefully toward the river, certain of what she‘ll do, but even now she is almost distracted by the sight of the downs, the church, and a scattering of sheep, incandescent, tinged with a faint hint of sulfur, grazing under a darkening sky. She pauses, watching the sheep and the sky, then walks on. The voices murmur behind her; bombers drone in the sky, though she looks for the planes and can‘t see them. She walks past one of the farm workers (is his name John?), a robust, small-headed man wearing a potato-colored vest, cleaning the ditch that runs through the osier bed. He looks up at her, nods, looks down again into the brown water. As she passes him on her way to the river she thinks of how successful he is, how fortunate, to be cleaning a ditch in an osier bed. She herself has failed. She is not a writer at all, really; she is merely a gifted eccentric.",
        state: "Colorado",
        likes: "0",
        dislikes: "0",
        popularity: "0",
        votes: "0"
      }
    
    ];
    
    db.Bill
      .remove({})
      .then(() => db.Bill.collection.insertMany(stateSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });*/
    