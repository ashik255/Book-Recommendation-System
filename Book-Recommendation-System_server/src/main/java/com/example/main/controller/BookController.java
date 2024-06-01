package com.example.main.controller;

import com.example.main.entity.BookEntity;
import com.example.main.model.BookRequestModel;
import com.example.main.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
private final BookService bookService;

    @PostMapping("/create")
    public ResponseEntity<Object> create (@RequestBody BookRequestModel bookRequestModel){
        return bookService.create(bookRequestModel);
    }
    @GetMapping("/all")
    public List<BookEntity> getAllBooks(){
        return bookService.getAllBooks();
    }
    @GetMapping("/id/{bookId}")
    public BookEntity getBook(@PathVariable ("bookId")Long bookID){
        return bookService.getBookByID(bookID);
    }
    @PutMapping("/update/{bookId}")
    public ResponseEntity<Object> update(@PathVariable ("bookId")Long bookId, @RequestBody BookRequestModel updatedBookModel){
        return bookService.update(bookId, updatedBookModel);
    }
    @DeleteMapping("/delete/{bookId}")
    public void delete (@PathVariable ("bookId")Long bookId){
        bookService.delete(bookId);
    }
    @GetMapping("/author/{authorName}")
    public List<BookEntity> getBookByAuthor(@PathVariable ("authorName")String authorName){
        return bookService.getBookByAuthorName(authorName);
    }

    @GetMapping("/author/{authorName}/{bookName}")
    public List<BookEntity> getBookByBookName(@PathVariable ("authorName")String authorName, @PathVariable ("bookName")String bookName){
        return bookService.getBookByAuthorNameAndBookName(authorName, bookName);
    }
    @GetMapping("/{bookName}")
    public List<BookEntity> getBooksByBookName(@PathVariable("bookName") String bookName){
        return bookService.getBooksByBookName(bookName);
    }
}
