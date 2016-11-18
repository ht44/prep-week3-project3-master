/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/



// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.
var me = {
  name: "Hayden",
  city: "Austin",
  jobTitle: "Copywriter"
};

document.getElementById("q1").innerHTML += "<p>" + me.name + "</p>";
document.getElementById("q1").innerHTML += "<p>" + me.city + "</p>";
document.getElementById("q1").innerHTML += "<p>" + me.jobTitle + "</p>";




// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family = ['Jackson', 'Mom', 'Dad'];
document.getElementById("q2").innerHTML = me.family.join(", ");





// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.

document.getElementById("q3").innerHTML += "<p>" + me.city + "</p>";
document.getElementById("q3").innerHTML += "<p>" + me["city"] + "</p>";






// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById("q4").innerHTML = invitees.adults[0].dinnerChoice[1];
// 5. Access Pablo's table number.
document.getElementById("q5").innerHTML = invitees.children[1].table;
// 6. Access Lauren's seating specialConsideration.
document.getElementById("q6").innerHTML = invitees.adults[2].specialConsiderations.seating;
// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById("q7").innerHTML = invitees.adults[1].dinnerChoice[2];
// 8. Access Ada's allergies.
document.getElementById("q8").innerHTML = invitees.children[2].allergies;
// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
document.getElementById("q9").innerHTML = "Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + ". She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner and has selected " + invitees.adults[2].dinnerChoice[2] + " as her dessert.";





// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = new Object();
// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates = ["Robert", "Jeff", "Nick", "Christina", "Cecilia"];
document.getElementById("q11").innerHTML = jsWorkshop.classmates.join(", ");
// 12. Get the length of the fourth classmate's name.
document.getElementById("q12").innerHTML = jsWorkshop.classmates[3].length;
// 13. Clear the classmates value.
jsWorkshop.classmates = '';





// ADVANCED TRACK
// A. Create an empty object called "books".
var books = {};

// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }


books.ISBN11111 = {
      title: "Moby Dick",
      author: "Herman Melville",
      pages: 123
    };
books.ISBN22222 = {
      title: "Crime and Punishment",
      author: "Fyodor Dostoyevsky",
      pages: 456
    };
books.ISBN33333 = {
      title: "Heart of Darkness",
      author: "Joseph Conrad",
      pages: 789
    };

document.getElementById("qb").innerHTML += "<p>" + books.ISBN11111.title + " (Author = " + books.ISBN11111.author + ", Pages = " + books.ISBN11111.pages + ")</p>";
document.getElementById("qb").innerHTML += "<p>" + books.ISBN22222.title + " (Author = " + books.ISBN22222.author + ", Pages = " + books.ISBN22222.pages + ")</p>";
document.getElementById("qb").innerHTML += "<p>" + books.ISBN33333.title + " (Author = " + books.ISBN33333.author + ", Pages = " + books.ISBN33333.pages + ")</p>";


// C. Access the author of the first book.
document.getElementById("qc").innerHTML = books.ISBN11111.author;
// D. Get the length of the author the the third book.
document.getElementById("qd").innerHTML = books.ISBN33333.author.length;
// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
books.ISBN11111.dateRead = 1905;
books.ISBN22222.dateRead = 1605;
books.ISBN33333.dateRead = 2006;

document.getElementById("qe").innerHTML += "<p>Read " + books.ISBN11111.title + " in " + books.ISBN11111.dateRead + ".</p>";
document.getElementById("qe").innerHTML += "<p>Read " + books.ISBN22222.title + " in " + books.ISBN22222.dateRead + ".</p>";
document.getElementById("qe").innerHTML += "<p>Read " + books.ISBN33333.title + " in " + books.ISBN33333.dateRead + ".</p>";

// F. Remove the second book from the books object.
delete books.ISBN22222;
console.log(books);
// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
