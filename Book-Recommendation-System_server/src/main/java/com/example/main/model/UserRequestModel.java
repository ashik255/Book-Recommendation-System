package com.example.main.model;

import com.example.main.entity.Role;
import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UserRequestModel
{

    @NotNull(message = "username shouldn't be null")
    @Column(unique = true)
    @Min(6)
    private String password;
    @NotNull(message = "fullName shouldn't be null")
    private String fullName;
    @Email(message = "invalid email address")
    @Column(unique = true)
    private String email;
//    @Temporal(TemporalType.TIMESTAMP)
//    private Date dateRegistered;
    private Role role;
    private String address;
}