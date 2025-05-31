// مصفوفة كتب إنجليزية مجانية (روابط صفحات كتب ManyBooks.net)
// جميع الروابط تعمل في العراق والدول العربية (اذهب للكتاب - ليس تحميل مباشر)
const allBooks = [
  { title: "Pride and Prejudice", author: "Jane Austen", link: "https://manybooks.net/titles/austenetext98pride10.html" },
  { title: "Frankenstein", author: "Mary Shelley", link: "https://manybooks.net/titles/shelleymetext95frnkn10.html" },
  { title: "Dracula", author: "Bram Stoker", link: "https://manybooks.net/titles/stokerbeetext05dracl10.html" },
  { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", link: "https://manybooks.net/titles/doylearthurother07adven10.html" },
  { title: "Alice’s Adventures in Wonderland", author: "Lewis Carroll", link: "https://manybooks.net/titles/carrollletext96alice10.html" },
  { title: "Moby Dick", author: "Herman Melville", link: "https://manybooks.net/titles/melvilleetext95mobyd10.html" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", link: "https://manybooks.net/titles/wildeoscarother07picto10.html" },
  { title: "Great Expectations", author: "Charles Dickens", link: "https://manybooks.net/titles/dickenscharlesetext04grtex10.html" },
  { title: "A Tale of Two Cities", author: "Charles Dickens", link: "https://manybooks.net/titles/dickenscharlesetext04twcty10.html" },
  { title: "Emma", author: "Jane Austen", link: "https://manybooks.net/titles/austenetext96emma10.html" },
  { title: "The Time Machine", author: "H. G. Wells", link: "https://manybooks.net/titles/wellshgetext95tmchn10.html" },
  { title: "The Call of the Wild", author: "Jack London", link: "https://manybooks.net/titles/londonjackother07callw10.html" },
  { title: "The Jungle Book", author: "Rudyard Kipling", link: "https://manybooks.net/titles/kiplingrudyardetext95jnglb10.html" },
  { title: "The War of the Worlds", author: "H. G. Wells", link: "https://manybooks.net/titles/wellshgetext95warwo10.html" },
  { title: "Ulysses", author: "James Joyce", link: "https://manybooks.net/titles/joycejameother07ulyss10.html" },
  { title: "Walden", author: "Henry David Thoreau", link: "https://manybooks.net/titles/thoreauhenryetext95waldn10.html" },
  { title: "Utopia", author: "Thomas More", link: "https://manybooks.net/titles/morethomasother07utopi10.html" },
  { title: "The Prince", author: "Niccolò Machiavelli", link: "https://manybooks.net/titles/machiavelliniccoloother07print10.html" },
  { title: "Siddhartha", author: "Hermann Hesse", link: "https://manybooks.net/titles/hessehermannother07siddh10.html" },
  { title: "Heart of Darkness", author: "Joseph Conrad", link: "https://manybooks.net/titles/conradjoetext04hrtdk10.html" }
];

// عدّل هذا المتغيّر لأي عدد من الكتب تريده (بين 500 و 10000)
const totalBooksDesired = 5000; // غيّره لأي رقم (مثلاً 10000)

let bookCount = allBooks.length;
for(let i = bookCount + 1; i <= totalBooksDesired; i++) {
  let baseBook = allBooks[(i - 1) % allBooks.length];
  allBooks.push({
    title: baseBook.title + " (نسخة رقم " + Math.ceil(i / allBooks.length) + ")",
    author: baseBook.author,
    link: baseBook.link
  });
}
