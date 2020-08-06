package com.example.demo.dao;

import com.example.demo.entities.Secteur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecteurRepository  extends JpaRepository<Secteur , Long> {
}
