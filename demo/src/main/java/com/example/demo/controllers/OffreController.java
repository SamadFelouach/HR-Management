package com.example.demo.controllers;

import com.example.demo.dao.OffreRepository;
import com.example.demo.entities.Offre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OffreController {

    @Autowired
    private OffreRepository offreRepository;


    @GetMapping(value = "/offres")
    public List<Offre> getoffre() {

        return offreRepository.findAll();
    }

    @GetMapping(value = "/offres/{id_offre}")
    public Offre getoffre(@PathVariable(name = "id") Long id_offre) {
        return offreRepository.findById(id_offre).get();
    }

    @PostMapping("/nvoffre")

    public Offre ajouterOffre(@RequestBody Offre nvoffre) {
        return offreRepository.save(nvoffre);
    }

    @PutMapping
    public Offre updateOffre(@RequestBody Offre nvoffre) {

        return offreRepository.save(nvoffre);
    }

    @DeleteMapping(value = "/deletOffre/{id}")
    public boolean deletCitoyen(@PathVariable(name = "id") Long id_offre) {
       offreRepository.deleteById(id_offre);
        return true;

    }
}

