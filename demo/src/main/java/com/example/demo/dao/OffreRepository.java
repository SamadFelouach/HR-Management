package com.example.demo.dao;

import com.example.demo.entities.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface OffreRepository extends JpaRepository<Offre , Long> {
}
