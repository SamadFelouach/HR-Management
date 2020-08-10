package com.example.demo.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class Condidat {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_condidat;
    private String nom;
    private String prenom;
    private String phonenumber;
    private String email;

}
