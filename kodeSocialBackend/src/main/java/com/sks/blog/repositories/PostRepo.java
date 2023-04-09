package com.sks.blog.repositories;

import com.sks.blog.entity.Category;
import com.sks.blog.entity.Post;
import com.sks.blog.entity.User;
import com.sks.blog.payloads.PostDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepo extends JpaRepository<Post,Integer> {
    List<Post> findByUser(User user);
    List<Post> findByCategory(Category category);

    List<Post> findByTitleContaining( String title);


}
