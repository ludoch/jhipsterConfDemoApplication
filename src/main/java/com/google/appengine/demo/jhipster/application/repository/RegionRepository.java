package com.google.appengine.demo.jhipster.application.repository;

import com.google.appengine.demo.jhipster.application.domain.Region;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Region entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {

}
