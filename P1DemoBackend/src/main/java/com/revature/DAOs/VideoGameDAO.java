package com.revature.DAOs;

import com.revature.models.VideoGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository //Make this Interface a bean
public interface VideoGameDAO extends JpaRepository<VideoGame, Integer > {

    //Find a list of games by their User's id
    public List<VideoGame> findByUser_UserId(int userId);

    //Why User_UserId?
    //We're digging into the User object in the VideoGame object
        //...in order to access the primary key field of User (userId)

}
