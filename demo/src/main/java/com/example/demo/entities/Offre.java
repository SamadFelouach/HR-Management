package com.example.demo.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
public class Offre {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_offre;
    private String domaine;
    private String imageUrl;
    private String description;
    private String ville;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateOffre;

}
