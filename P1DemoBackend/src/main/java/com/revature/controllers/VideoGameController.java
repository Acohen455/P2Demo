package com.revature.controllers;

import com.revature.models.DTOs.IncomingGameDTO;
import com.revature.models.VideoGame;
import com.revature.services.VideoGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/games")
@CrossOrigin //allows HTTP requests from anywhere
public class VideoGameController {

    //autowire the service
    private final VideoGameService gameService;

    @Autowired
    public VideoGameController(VideoGameService gameService) {
        this.gameService = gameService;
    }

    //A method that inserts a new game into the DB
    @PostMapping
    public ResponseEntity<VideoGame> insertGame(@RequestBody IncomingGameDTO gameDTO){

        //send the DTO to the service and return the VideoGame object that comes back
        return ResponseEntity.accepted().body(gameService.insertGame(gameDTO));

    }

    //TODO: get games by user ID

}
