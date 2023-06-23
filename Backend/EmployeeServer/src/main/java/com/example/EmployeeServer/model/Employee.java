package com.example.EmployeeServer.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employeeId;

    @NotNull(message = "First name cannot be null")
    @NotBlank(message = "First name cannot be blank")
    @NotEmpty(message = "First name cannot be empty")
    private String firstName;

    @NotNull(message = "Last name cannot be null")
    @NotBlank(message = "Last name cannot be blank")
    @NotEmpty(message = "Last name cannot be empty")
    private String lastName;

    @Column(unique = true)
    @Email
    @NotNull(message = "Email cannot be null")
    @NotBlank(message = "Email cannot be blank")
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    @NotNull(message = "Phone cannot be null")
    @NotBlank(message = "Phone cannot be blank")
    @NotEmpty(message = "Phone cannot be empty")
    @Size(min=10,max=10,message="Mobile should be 10 characters.")
    @Pattern(regexp = "^[6-9][0-9]{9}",message="Mobile should contains only numbers")
    @Column(unique = true)
    private String mobile;

}
