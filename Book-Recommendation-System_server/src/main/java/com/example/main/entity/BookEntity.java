package com.example.main.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "booksStore")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    private  String bookName;
    private  String authorName;
    private  String description;
    private  String price;
    private String rating;
    private  String genre;
//    @OneToMany(mappedBy = "bookStore", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<SearchHistory> searchHistory;
}
