// Nu uita sa iti pui propriul tau API KEY!
// Nu este safe sa pui cheia aici, dar fara un server n-ai cum sa fii safe oricum. Nu iti face griji, API-ul este gratuit, oricum.
const API_KEY = "024c9dca-d92c-4603-b2d4-cfa6a5a2ae92";
//Default "cce4027e-faf6-4eb5-ba9b-491c9b8f3571"
//my "024c9dca-d92c-4603-b2d4-cfa6a5a2ae92"

// Functie care returneaza endpoint-ul pentru o anumita categorie de stiri.
// pageNumber si pageSize au valori default, astfel incat daca nu le specifici o valoare la apel, vor primi automat valorile default.
export function getNewsCategoriesEndpoint(
  category,
  pageNumber = 1,
  pageSize = 21
) {
  // Construim query string-ul. Va contine api-key-ul, sectiunea, optiunea de afisare a campurilor stirii, precum și numarul de elemente returnate si numarul paginii.
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

  // Returnam link-ul aferent API-ului The Guardian.
  return `https://content.guardianapis.com/search${queryParams}`;
}

// Functie care returneaza endpoint-ul pentru o anumita stire.
export function getNewsDetailsEndpoint(newsId) {
  // Construim query string-ul. Va contine api-key-ul si optiunea de afisare a campurilor stirii.
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  // Returnam link-ul aferent API-ului The Guardian.
  return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
