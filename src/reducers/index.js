import { combineReducers } from 'redux';

// Book List reducer loaded with dummy data
const booksListReducer = () => {
  return [
        {  
          "title_suggest":"Can't Hurt Me: Master Your Mind and Defy the Odds",
          "publisher":[  
            "Lioncrest Publishing"
          ],
          "cover_i":8305903,
          "isbn":[  
            "9781544512280",
            "1544512287"
          ],
          "has_fulltext":false,
          "title":"Can't Hurt Me: Master Your Mind and Defy the Odds",
          "edition_key":[  
            "OL26618658M"
          ],
          "last_modified_i":1545255295,
          "edition_count":1,
          "author_name":[  
            "David Goggins"
          ],
          "cover_edition_key":"OL26618658M",
          "seed":[  
            "/books/OL26618658M",
            "/works/OL18108064W",
            "/authors/OL7440751A"
          ],
          "first_publish_year":2018,
          "publish_year":[  
            2018
          ],
          "key":"/works/OL18108064W",
          "text":[  
            "OL26618658M",
            "9781544512280",
            "1544512287",
            "David Goggins",
            "OL7440751A",
            "Can't Hurt Me: Master Your Mind and Defy the Odds",
            "/works/OL18108064W",
            "Lioncrest Publishing"
          ],
          "publish_date":[  
            "Dec 04, 2018"
          ],
          "author_key":[  
            "OL7440751A"
          ],
          "type":"work",
          "ebook_count_i":0
      },      {  
        "title_suggest":"Windows CE developer's handbook / Terence A. Goggin with David L. Heskett and Jason M. MacLean",
        "edition_key":[  
          "OL53148M"
        ],
        "has_fulltext":false,
        "text":[  
          "OL53148M",
          "Terence Goggin",
          "Heskett, David L.",
          "MacLean, Jason M.",
          "41518839",
          "OL34904A",
          "Windows CE developer's handbook / Terence A. Goggin with David L. Heskett and Jason M. MacLean",
          "Microsoft Windows (Computer file)",
          "Operating systems (Computers)",
          "/works/OL512337W",
          "SYBEX",
          "Windows CE developer's handbook / Terence A. Goggin with David L. Heskett and Jason M. MacLean.",
          "99061299"
        ],
        "author_name":[  
          "Terence Goggin"
        ],
        "seed":[  
          "/books/OL53148M",
          "/works/OL512337W",
          "/subjects/microsoft_windows_(computer_file)",
          "/subjects/operating_systems_(computers)",
          "/authors/OL34904A"
        ],
        "oclc":[  
          "41518839"
        ],
        "contributor":[  
          "Heskett, David L.",
          "MacLean, Jason M."
        ],
        "author_key":[  
          "OL34904A"
        ],
        "subject":[  
          "Microsoft Windows (Computer file)",
          "Operating systems (Computers)"
        ],
        "title":"Windows CE developer's handbook / Terence A. Goggin with David L. Heskett and Jason M. MacLean",
        "publish_date":[  
          "1999"
        ],
        "type":"work",
        "ebook_count_i":0,
        "publish_place":[  
          "San Francisco"
        ],
        "edition_count":1,
        "key":"/works/OL512337W",
        "publisher":[  
          "SYBEX"
        ],
        "language":[  
          "eng"
        ],
        "lccn":[  
          "99061299"
        ],
        "last_modified_i":1291450597,
        "publish_year":[  
          1999
        ],
        "first_publish_year":1999
    },
    {  
        "title_suggest":"The contributions of D. J. Goggin to the development of education in the North-West Territories, 1893-1902",
        "edition_key":[  
          "OL20016092M"
        ],
        "place":[  
          "Northwest Territories"
        ],
        "has_fulltext":false,
        "language":[  
          "eng"
        ],
        "edition_count":1,
        "last_modified_i":1343770102,
        "title":"The contributions of D. J. Goggin to the development of education in the North-West Territories, 1893-1902",
        "subject":[  
          "Training of",
          "Education",
          "Teachers",
          "History"
        ],
        "author_name":[  
          "Alphonse Daniel Selinger"
        ],
        "person":[  
          "David James Goggin"
        ],
        "seed":[  
          "/books/OL20016092M",
          "/works/OL12963379W",
          "/subjects/history",
          "/subjects/training_of",
          "/subjects/education",
          "/subjects/teachers",
          "/subjects/person:david_james_goggin",
          "/subjects/place:northwest_territories",
          "/authors/OL5884586A"
        ],
        "first_publish_year":1960,
        "publish_year":[  
          1960
        ],
        "key":"/works/OL12963379W",
        "text":[  
          "OL20016092M",
          "Alphonse Daniel Selinger",
          "OL5884586A",
          "The contributions of D. J. Goggin to the development of education in the North-West Territories, 1893-1902",
          "Training of",
          "Education",
          "Teachers",
          "History",
          "/works/OL12963379W",
          "David James Goggin",
          "Northwest Territories"
        ],
        "publish_date":[  
          "1960"
        ],
        "author_key":[  
          "OL5884586A"
        ],
        "type":"work",
        "ebook_count_i":0
    }
  ]
}



export default combineReducers({
  // term: searchTermReducer,
  bookList: booksListReducer 
})