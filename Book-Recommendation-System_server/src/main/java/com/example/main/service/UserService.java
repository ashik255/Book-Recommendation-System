package com.example.main.service;

import com.example.main.entity.SearchHistory;
import com.example.main.entity.UserEntity;
import com.example.main.model.UserRequestModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    ResponseEntity<Object> register(UserRequestModel requestModel);
    UserEntity getAuthenticatedUser();
    ResponseEntity<Object> updateAuthenticatedUser(Long id, UserEntity updatedUser);
    List<SearchHistory> getSearchHistory(Long userId);
   UserEntity findByEmail(String email);
}
