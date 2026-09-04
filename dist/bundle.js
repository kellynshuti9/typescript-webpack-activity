/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// ============================================
// PART 1: Book Class
// ============================================
class Book {
    constructor(title, author, year, id) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.id = id;
    }
}
// ============================================
// PART 3: Reviews Array
// ============================================
var reviews = [];
// ============================================
// PART 4: Add Review Function
// ============================================
function addReview(bookId, rating, comment) {
    if (rating < 1 || rating > 5) {
        return "Rating must be between 1 and 5";
    }
    var newReview = {
        bookId: bookId,
        rating: rating,
        comment: comment
    };
    reviews.push(newReview);
    return "Review added for book ID " + bookId + " with rating " + rating + "/5";
}
// ============================================
// PART 5: Display Book Function
// ============================================
function displayBook(book) {
    var container = document.getElementById("book-list");
    if (!container) {
        console.error("Book list element not found");
        return;
    }
    var bookDiv = document.createElement("div");
    bookDiv.style.cssText = "border:2px solid #3498db;padding:15px;margin:10px 0;background:#f8f9fa;border-radius:8px;";
    bookDiv.innerHTML = `
    <h2 style="color:#2c3e50;margin:0 0 10px 0;">${book.title}</h2>
    <p style="margin:5px 0;"><strong>Author:</strong> ${book.author}</p>
    <p style="margin:5px 0;"><strong>Year:</strong> ${book.year}</p>
    <p style="margin:5px 0;"><strong>Book ID:</strong> ${book.id}</p>
  `;
    container.appendChild(bookDiv);
}
// ============================================
// PART 6: Create and Display Books
// ============================================
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 1);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954, 2);
displayBook(book1);
displayBook(book2);
// ============================================
// PART 7: Test Reviews in Console
// ============================================
console.log(addReview(1, 5, "Excellent book! A masterpiece of fantasy."));
console.log(addReview(1, 4, "Great story, but a bit slow in parts."));
console.log(addReview(2, 5, "The greatest fantasy epic ever written."));
console.log(addReview(1, 6, "This rating is invalid"));
console.log("\n--- All Reviews ---");
for (var i = 0; i < reviews.length; i++) {
    console.log((i + 1) + ". Book " + reviews[i].bookId + ": " + reviews[i].rating + "/5 - \"" + reviews[i].comment + "\"");
}
console.log("\n--- Total Books ---");
console.log("Total books: 2");
console.log("Total reviews: " + reviews.length);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxhQUFhLGNBQWMsbUJBQW1CLGtCQUFrQjtBQUN0SDtBQUNBLDZCQUE2QixrQkFBa0IsSUFBSSxXQUFXO0FBQzlELDJCQUEyQiw2QkFBNkIsWUFBWTtBQUNwRSwyQkFBMkIsMkJBQTJCLFVBQVU7QUFDaEUsMkJBQTJCLDhCQUE4QixRQUFRO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay1hY3Rpdml0eS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBUlQgMTogQm9vayBDbGFzc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIEJvb2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHllYXIsIGlkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFSVCAzOiBSZXZpZXdzIEFycmF5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHJldmlld3MgPSBbXTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQVJUIDQ6IEFkZCBSZXZpZXcgRnVuY3Rpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBhZGRSZXZpZXcoYm9va0lkLCByYXRpbmcsIGNvbW1lbnQpIHtcbiAgICBpZiAocmF0aW5nIDwgMSB8fCByYXRpbmcgPiA1KSB7XG4gICAgICAgIHJldHVybiBcIlJhdGluZyBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNVwiO1xuICAgIH1cbiAgICB2YXIgbmV3UmV2aWV3ID0ge1xuICAgICAgICBib29rSWQ6IGJvb2tJZCxcbiAgICAgICAgcmF0aW5nOiByYXRpbmcsXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRcbiAgICB9O1xuICAgIHJldmlld3MucHVzaChuZXdSZXZpZXcpO1xuICAgIHJldHVybiBcIlJldmlldyBhZGRlZCBmb3IgYm9vayBJRCBcIiArIGJvb2tJZCArIFwiIHdpdGggcmF0aW5nIFwiICsgcmF0aW5nICsgXCIvNVwiO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBUlQgNTogRGlzcGxheSBCb29rIEZ1bmN0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaykge1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2stbGlzdFwiKTtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQm9vayBsaXN0IGVsZW1lbnQgbm90IGZvdW5kXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBib29rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib29rRGl2LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlcjoycHggc29saWQgIzM0OThkYjtwYWRkaW5nOjE1cHg7bWFyZ2luOjEwcHggMDtiYWNrZ3JvdW5kOiNmOGY5ZmE7Ym9yZGVyLXJhZGl1czo4cHg7XCI7XG4gICAgYm9va0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDIgc3R5bGU9XCJjb2xvcjojMmMzZTUwO21hcmdpbjowIDAgMTBweCAwO1wiPiR7Ym9vay50aXRsZX08L2gyPlxyXG4gICAgPHAgc3R5bGU9XCJtYXJnaW46NXB4IDA7XCI+PHN0cm9uZz5BdXRob3I6PC9zdHJvbmc+ICR7Ym9vay5hdXRob3J9PC9wPlxyXG4gICAgPHAgc3R5bGU9XCJtYXJnaW46NXB4IDA7XCI+PHN0cm9uZz5ZZWFyOjwvc3Ryb25nPiAke2Jvb2sueWVhcn08L3A+XHJcbiAgICA8cCBzdHlsZT1cIm1hcmdpbjo1cHggMDtcIj48c3Ryb25nPkJvb2sgSUQ6PC9zdHJvbmc+ICR7Ym9vay5pZH08L3A+XHJcbiAgYDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9va0Rpdik7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFSVCA2OiBDcmVhdGUgYW5kIERpc3BsYXkgQm9va3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgYm9vazEgPSBuZXcgQm9vayhcIlRoZSBIb2JiaXRcIiwgXCJKLlIuUi4gVG9sa2llblwiLCAxOTM3LCAxKTtcbnZhciBib29rMiA9IG5ldyBCb29rKFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzXCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTk1NCwgMik7XG5kaXNwbGF5Qm9vayhib29rMSk7XG5kaXNwbGF5Qm9vayhib29rMik7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFSVCA3OiBUZXN0IFJldmlld3MgaW4gQ29uc29sZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnNvbGUubG9nKGFkZFJldmlldygxLCA1LCBcIkV4Y2VsbGVudCBib29rISBBIG1hc3RlcnBpZWNlIG9mIGZhbnRhc3kuXCIpKTtcbmNvbnNvbGUubG9nKGFkZFJldmlldygxLCA0LCBcIkdyZWF0IHN0b3J5LCBidXQgYSBiaXQgc2xvdyBpbiBwYXJ0cy5cIikpO1xuY29uc29sZS5sb2coYWRkUmV2aWV3KDIsIDUsIFwiVGhlIGdyZWF0ZXN0IGZhbnRhc3kgZXBpYyBldmVyIHdyaXR0ZW4uXCIpKTtcbmNvbnNvbGUubG9nKGFkZFJldmlldygxLCA2LCBcIlRoaXMgcmF0aW5nIGlzIGludmFsaWRcIikpO1xuY29uc29sZS5sb2coXCJcXG4tLS0gQWxsIFJldmlld3MgLS0tXCIpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCByZXZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coKGkgKyAxKSArIFwiLiBCb29rIFwiICsgcmV2aWV3c1tpXS5ib29rSWQgKyBcIjogXCIgKyByZXZpZXdzW2ldLnJhdGluZyArIFwiLzUgLSBcXFwiXCIgKyByZXZpZXdzW2ldLmNvbW1lbnQgKyBcIlxcXCJcIik7XG59XG5jb25zb2xlLmxvZyhcIlxcbi0tLSBUb3RhbCBCb29rcyAtLS1cIik7XG5jb25zb2xlLmxvZyhcIlRvdGFsIGJvb2tzOiAyXCIpO1xuY29uc29sZS5sb2coXCJUb3RhbCByZXZpZXdzOiBcIiArIHJldmlld3MubGVuZ3RoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==