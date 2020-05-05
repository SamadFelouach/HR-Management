package com.example.demo.entities;


import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class Offre implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_offre;
    private String domaine;
    private String imageUrl;
    private String description;
    private String ville;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private Date dateOffre;

}
