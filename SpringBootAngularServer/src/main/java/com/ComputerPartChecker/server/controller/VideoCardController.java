package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.VideoCardEntity;
import com.ComputerPartChecker.server.repository.VideoCardRepository;
import com.ComputerPartChecker.server.service.VideoCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/videoCard")
@RestController
public class VideoCardController extends BaseController<VideoCardEntity, Integer, VideoCardRepository, VideoCardService> {
    @Autowired
    public VideoCardController(VideoCardService baseService) {
        super(baseService);
    }
}
