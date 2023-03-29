package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.VideoCardEntity;
import com.ComputerPartChecker.server.repository.VideoCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideoCardService extends BaseService<VideoCardEntity, Integer, VideoCardRepository> {
    @Autowired
    public VideoCardService(VideoCardRepository repository) {
        super(repository);
    }
}
