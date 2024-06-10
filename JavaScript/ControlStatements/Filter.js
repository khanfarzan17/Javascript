// Foreach does not have any Return type so for replace we use filter in javaScript  to get a return a value//

let Nums=[1,2,3,4,5,6,7,8,9]

let newMy=Nums.filter(num => num>5) 
console.log(newMy)// output will be [6,7,8,9]

let numbers=[1,2,3,4,6,7,8,9,10]

let evennumber= numbers.filter(numbers=>numbers%2==0)
console.log(evennumber)


/// Filter with scope //
 let number=[12,34,56,77,99]

 let divi=number.filter((number) =>{
     return number%2==0 // with scope we need to return // when you start a scope//

 })

 console.log(divi)//[12,34,56]


 ///// now applying filter for JSON Data in Array///
 const books= [
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "publishedYear": 1951,
      "genre": "Fiction"
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publishedYear": 1960,
      "genre": "Fiction"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "publishedYear": 1949,
      "genre": "Dystopian Fiction"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publishedYear": 1925,
      "genre": "Classic"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "publishedYear": 1937,
      "genre": "Fantasy"
    },
    {
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "publishedYear": 1967,
      "genre": "Magical Realism"
    },
    {
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "publishedYear": 1932,
      "genre": "Dystopian Fiction"
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "publishedYear": 1954,
      "genre": "Fantasy"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "publishedYear": 1813,
      "genre": "Classic"
    },
    {
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "publishedYear": 1851,
      "genre": "Adventure"
    },
    {
      "title": "The Shining",
      "author": "Stephen King",
      "publishedYear": 1977,
      "genre": "Horror"
    },
    {
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "publishedYear": 1939,
      "genre": "Classic"
    },
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "publishedYear": 1988,
      "genre": "Philosophical Fiction"
    },
    {
      "title": "Jane Eyre",
      "author": "Charlotte Brontë",
      "publishedYear": 1847,
      "genre": "Gothic Fiction"
    },
    {
      "title": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "publishedYear": 1950,
      "genre": "Fantasy"
    },
    {
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "publishedYear": 1979,
      "genre": "Science Fiction"
    },
    {
      "title": "Wuthering Heights",
      "author": "Emily Brontë",
      "publishedYear": 1847,
      "genre": "Gothic Fiction"
    },
    {
      "title": "Slaughterhouse-Five",
      "author": "Kurt Vonnegut",
      "publishedYear": 1969,
      "genre": "Satire"
    },
    {
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "publishedYear": 1890,
      "genre": "Gothic Fiction"
    },
    {
      "title": "The Road",
      "author": "Cormac McCarthy",
      "publishedYear": 2006,
      "genre": "Post-Apocalyptic Fiction"
    },
    {
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "publishedYear": 1953,
      "genre": "Dystopian Fiction"
    },
    {
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "publishedYear": 1818,
      "genre": "Gothic Fiction"
    },
    {
      "title": "The Outsiders",
      "author": "S.E. Hinton",
      "publishedYear": 1967,
      "genre": "Young Adult"
    },
    {
      "title": "The Count of Monte Cristo",
      "author": "Alexandre Dumas",
      "publishedYear": 1844,
      "genre": "Adventure"
    },
    {
      "title": "The Scarlet Letter",
      "author": "Nathaniel Hawthorne",
      "publishedYear": 1850,
      "genre": "Romance"
    },
    {
      "title": "Animal Farm",
      "author": "George Orwell",
      "publishedYear": 1945,
      "genre": "Satire"
    }
]
const BookUser=books.filter((item) => item.title==='The Count of Monte Cristo')
console.log(BookUser)
// item.publishedYear >= 1950 && item.publishedYear <= 2010//
books.forEach((bk)=>{// for each //
    console.log(bk);
})

