package com.google.appengine.demo.jhipster.application.repository;

import com.google.appengine.demo.jhipster.application.domain.Task;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Task entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}
