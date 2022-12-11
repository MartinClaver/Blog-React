<?php

namespace App\Entity;

class Post extends BaseEntity
{
    private int $id;
    private string $post;
    private int $userId;
    private string $username;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Post
     */
    public function setId(int $id): Post
    {
        $this->id = $id;
        return $this;
    }
    public function setUsername(string $username): Post
    {
        $this->username = $username;
        return $this;
    }
    public function getUsername(): string
    {
        return $this->username;
    }

    /**
     * @return string
     */
    public function getPost(): string
    {
        return $this->post;
    }
    
    /**
     * @param string $post
     * @return Post
     */
    public function setPost(string $post): Post
    {
        $this->post = $post;
        return $this;
    }

    /**
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * @param int $date
     * @return Post
     */
    public function setUserId(int $userId): Post
    {
        $this->userId = $userId;
        return $this;
    }

}