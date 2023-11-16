const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


// trier ordre alphabétique nom de famille
const yearRecherche = 1970;
const entrepreneursFiltres = entrepreneurs.filter(entrepreneur => entrepreneur.year === yearRecherche);
console.log(entrepreneursFiltres);

// sortir array avec noms et prénoms (sans year quoi)
const entrepreneursNames = entrepreneurs.map(({ first, last }) => ({ first, last }));
console.log(entrepreneursNames)

// âge des entrepreneurs aujourd'hui
const entrepreneursAge = entrepreneurs.map(({ year }) => {
    return 2023 - year
});
console.log(entrepreneursAge);

// trier par ordre alphabétique du nom de famille
const entrepreneursSort = entrepreneurs.sort((a, b) => {
    const lastA = a.last.toUpperCase();
    const lastB = b.last.toUpperCase()
    if (lastA < lastB) {
        return -1;
    }
    if (lastA > lastB) {
        return 1;
    }

    return 0;
});
console.log(entrepreneursSort)