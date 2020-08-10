package com.example.demo.controllers;

import com.example.demo.dao.MessageRepository;
import com.example.demo.entities.Message;
import com.example.demo.entities.Offre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {
    @Autowired
      private MessageRepository messageRepository;

    //lire les messages
    @GetMapping(value = "/messages")
    public List<Message> getmessage() {

        return messageRepository.findAll();
    }

//fonction d'ecrire un message
    @PostMapping("/newmessage")

    public Message ajouterMessage(@RequestBody Message nvmessage)
    {

        return messageRepository.save(nvmessage);
    }
}
