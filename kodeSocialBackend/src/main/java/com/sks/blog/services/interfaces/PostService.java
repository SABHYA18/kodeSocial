package com.sks.blog.services.interfaces;

import com.sks.blog.entity.Post;
import com.sks.blog.payloads.PostDto;
import com.sks.blog.payloads.PostResponse;


import java.util.List;


public interface PostService {
    PostDto createPost(PostDto postDto,Integer userId,Integer categoryId);// create post
    PostDto updatePost(PostDto postDto,Integer postId);                  // update post
    void deletePost(Integer postId);                                      // delete post
    PostResponse getAllPost(Integer pageNumber, Integer pageSize,String sortBy,String sortDir);        // get all post
    PostDto getPostById( Integer postId);                                   // get post by id
    List<PostDto> getPostByCategory(Integer categoryId);                       // get post by category
    List<PostDto> getPostByUser(Integer userId);                              // get post by user
    List<PostDto> searchPosts(String keyword);                                 // search post
}
