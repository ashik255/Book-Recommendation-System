package com.example.main.service.implementation;

import com.example.main.entity.BookEntity;
import com.example.main.model.BookRequestModel;
import com.example.main.repository.BookRepository;
import com.example.main.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    public ResponseEntity<Object> create(BookRequestModel bookRequestModel) {
        BookEntity bookEntity = BookEntity.builder()
                .price(bookRequestModel.getPrice())
                .bookName(bookRequestModel.getBookName())
                .authorName(bookRequestModel.getAuthorName())
                .description(bookRequestModel.getDescription())
                .rating( bookRequestModel.getRating() )
                .genre(bookRequestModel.getGenre())
                .build();
        BookEntity savedBookEntity = bookRepository.save(bookEntity);
        return new ResponseEntity<>(savedBookEntity, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Object> update(Long bookId, BookRequestModel updatedBookModel) {
        BookEntity bookEntity = bookRepository.findById(bookId).get();
        bookEntity.setPrice(updatedBookModel.getPrice());
        bookEntity.setBookName(updatedBookModel.getBookName());
        bookEntity.setAuthorName(updatedBookModel.getAuthorName());
        bookEntity.setDescription(updatedBookModel.getDescription());
        bookEntity.setRating(updatedBookModel.getRating());
        bookEntity.setGenre(updatedBookModel.getGenre());
        return new ResponseEntity<>(bookRepository.save(bookEntity), HttpStatus.OK);
    }
    @Override
    public List<BookEntity> getAllBooks() {
        List<BookEntity> bookModelList = bookRepository.findAll();
        return bookModelList;
    }

    @Override
    public void delete(Long bookId) {
        BookEntity bookEntity = bookRepository.findById(bookId).get();
        bookRepository.delete(bookEntity);
    }


    @Override
    public BookEntity getBookByID(Long bookId) {
        return bookRepository.findById(bookId).get();
    }

    @Override
    public List<BookEntity> getBookByAuthorName(String authorName) {
        return bookRepository.getBookByAuthorName(authorName);
    }

    @Override
    public List<BookEntity> getBookByAuthorNameAndBookName(String authorName, String bookName) {
        return bookRepository.getBookByAuthorNameAndBookName(authorName, bookName);
    }
    @Override
   public List<BookEntity> getBooksByBookName(String bookName){
       return bookRepository.getBooksByBookName(bookName);
    }
}
