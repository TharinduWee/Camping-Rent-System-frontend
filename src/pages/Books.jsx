import React from 'react';
import './Books.css';

export const Books = () => {
  const booksData = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: 19.99,
      imageUrl: './images/book1.jpeg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: 14.99,
      imageUrl: 'https://example.com/book2.jpg',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      price: 12.99,
      imageUrl: 'https://example.com/book3.jpg',
    },
    {
      id: 4,
      title: 'Book 4',
      author: 'Author 4',
      price: 9.99,
      imageUrl: 'https://example.com/book4.jpg',
    },
    // Add more book data as needed
  ];

  return (
    <div>
      <h1>Welcome to our Bookstore</h1>
      <div className="book-container">
        {booksData.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.imageUrl} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
