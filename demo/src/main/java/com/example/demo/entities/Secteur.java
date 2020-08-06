package com.example.demo.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
@Setter @Getter
public class Secteur {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String name;

    @OneToMany(mappedBy = "secteur")
   private Collection<Offre> offres;





}
