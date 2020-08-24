package com.ecommerce.service.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ecommerce.service.model.Tutorial;

public interface TutorialRepository extends MongoRepository<Tutorial, Long> {
	List<Tutorial> findByTitleContaining(String title);

	List<Tutorial> findByPublished(boolean published);
}
