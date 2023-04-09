package com.sks.blog.services.interfaces;

import com.sks.blog.payloads.UserDto;
import jakarta.persistence.criteria.CriteriaBuilder;

import java.util.List;

public interface UserService {
    public UserDto createUser(UserDto userDto);
    public  UserDto updateUser(UserDto user,Integer userID);
    public UserDto getUserById(Integer userId);
    public List<UserDto> getAllUsers();
    public void deleteUser(Integer userId);

}
