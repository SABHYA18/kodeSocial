package com.sks.blog.payloads;

import com.sks.blog.entity.Category;
import com.sks.blog.entity.User;

public class PostDto {
    private Integer postId;
    private String title;
    private String content;
    private String imageName;
    private CategoryDto category;
    private UserDto user;
    public PostDto() {
    }

    public PostDto(Integer postId, String title, String content) {
        this.postId = postId;
        this.title = title;
        this.content = content;
    }

    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public CategoryDto getCategory() {
        return category;
    }

    public void setCategory(CategoryDto category) {
        this.category = category;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "PostDto{" +
                "postId=" + postId +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", imageName='" + imageName + '\'' +
                ", category=" + category +
                ", user=" + user +
                '}';
    }
}
