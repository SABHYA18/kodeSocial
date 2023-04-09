package com.sks.blog.payloads;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;


public class UserDto {

    private int id;
    @NotEmpty
    @Size(min = 4,message = "Username must be min of 4 character!")
    private String name;
    @Email(message = "Email address is mot valid!")
    private String email;
    @NotEmpty
    @Size(min = 4,max = 10,message = "Password must be min of 3 characters and max of 10 characters!")
    private String password;
    @NotEmpty
    private String about;

    public UserDto() {
    }

    public UserDto(String name, String email, String password, String about) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.about = about;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", about='" + about + '\'' +
                '}';
    }
}

