package com.example.main.repository;

import com.example.main.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<BookEntity,Long> {
//    public BookEntity findByEmail(String email);

    List<BookEntity> getBookByAuthorName(String authorName);

    List<BookEntity> getBookByAuthorNameAndBookName(String authorName, String bookName);

    List<BookEntity> getBooksByBookName(String bookName);
}
