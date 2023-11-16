const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

const allBooksRented = books.every(book => book.rented > 0);

if (allBooksRented){
    console.log("Tous les livres ont été loué au moins une fois")
} else {
    console.log("Tous les livres n'ont pas été loué au moins une fois")
};



console.log("Quel livre est le plus emprunté ?");

const mostRentedBook = Math.max(...books.map(book => book.rented));

function isMostRentedBook(book) {
    return book.rented === mostRentedBook
}
console.log(books.find(isMostRentedBook));



console.log("Quel livre est le moins emprunté ?");

const lessRentedBook = Math.min(...books.map(book => book.rented));

function isLessRentedBook(book) {
    return book.rented === lessRentedBook
}
console.log(books.find(isLessRentedBook));



console.log("Trouve le livre avec l'ID : 873495");

function isIdBook(book) {
    return book.id === 873495;
}

console.log(books.find(isIdBook));


console.log("Supprime le livre avec l'ID : 133712");

const idRechercheToRemove = 133712;
const newBooks = books.filter(book => book.id !== idRechercheToRemove);
console.log(newBooks)



console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé) ");

const booksSort = newBooks.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    return 0;
});

console.log(booksSort)

