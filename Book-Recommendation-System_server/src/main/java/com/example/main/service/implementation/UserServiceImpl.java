package com.example.main.service.implementation;

import com.example.main.entity.SearchHistory;
import com.example.main.entity.UserEntity;
import com.example.main.model.AuthenticationResponse;
import com.example.main.model.UserRequestModel;
import com.example.main.repository.SearchHistoryRepository;
import com.example.main.repository.UserRepository;
import com.example.main.service.UserService;
import com.example.main.utlis.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    @Autowired
    private SearchHistoryRepository searchHistoryRepository;

    public ResponseEntity<Object> register(UserRequestModel requestModel) {
        UserEntity userEntity = UserEntity.builder()
                .email(requestModel.getEmail())
                .role(requestModel.getRole())
                .fullName(requestModel.getFullName())
                .password(passwordEncoder.encode(requestModel.getPassword()))
                .address(requestModel.getAddress())
                .build();
       userRepository.save(userEntity);
       AuthenticationResponse authenticationResponse = AuthenticationResponse.builder()
             .token(jwtService.generateToken(userEntity))
              .build();
       return new ResponseEntity<>(authenticationResponse, HttpStatus.CREATED);
    }

    @Override
    public UserEntity getAuthenticatedUser() {
        List<UserEntity> userEntities=userRepository.findAll();
        return (UserEntity) userEntities;
    }

    @Override
    public ResponseEntity<Object> updateAuthenticatedUser(Long id, UserEntity updatedUser) {
        UserEntity userEntity = userRepository.findById(id).get();
        userEntity.setEmail(updatedUser.getEmail());
        userEntity.setFullName(updatedUser.getFullName());
        userEntity.setPassword(updatedUser.getPassword());
        userEntity.setRole(updatedUser.getRole());
        userEntity.setAddress(updatedUser.getAddress());
        return new ResponseEntity<>(userRepository.save(userEntity),HttpStatus.OK);
    }
    public List<SearchHistory> getSearchHistory(Long userId) {
        return searchHistoryRepository.findByUserId(userId);
    }


    @Override
    public UserEntity findByEmail(String email) {
        return null;
    }

    public void saveSearchHistory(Long userId, String query) {
        UserEntity user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        SearchHistory searchHistory = new SearchHistory();
        searchHistory.setUser(user);
        searchHistory.setQuery(query);
        searchHistoryRepository.save(searchHistory);
    }
}

