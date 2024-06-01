package com.example.main.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class SearchHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String query;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
//    @ManyToOne
//    @JoinColumn(name = "book_store_id")
//    private BookEntity bookStore;
}
