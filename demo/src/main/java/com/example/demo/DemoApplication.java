package com.example.demo;

import com.example.demo.dao.OffreRepository;
import com.example.demo.entities.Offre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private OffreRepository offreRepository;
    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;
    public static void main(String[] args) {

        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        repositoryRestConfiguration.exposeIdsFor(Offre.class);



        /*
        offreRepository.save(new Offre(null,"Economie", "assets/images/entr1.jpg", "tesxt2 ", new Date()));
        offreRepository.save(new Offre(null,"Genie Civil", "assets/image/logo.png", "text", new Date()));
        */
    }

}
