import genreData from "@/features/library/constants/book-genres.json"
import bookData from "@/features/library/constants/books.json"
import type { Book, BookGenre } from "@/features/library/schemas/book.schema"

/** Validated against booksSchema and bookGenresSchema in tests, not at runtime. */
export const books: Book[] = bookData
export const bookGenres: BookGenre[] = genreData
