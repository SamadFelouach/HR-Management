package com.example.demo.dao;

import com.example.demo.entities.Offre;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin("*")
@RepositoryRestResource
public interface OffreRepository extends JpaRepository<Offre , Long> {
   @RestResource(path ="/ByCategoriePage")
    public Page < Offre > findByDomaineContains(@Param("mc") String mc , Pageable pageable);
}
