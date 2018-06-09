package com.google.appengine.demo.jhipster.application.repository;

import com.google.appengine.demo.jhipster.application.domain.Country;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Country entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {

}
