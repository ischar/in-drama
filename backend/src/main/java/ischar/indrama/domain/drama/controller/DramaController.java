package ischar.indrama.domain.drama.controller;

import ischar.indrama.domain.drama.dto.DramaThumbnailListDto;
import ischar.indrama.domain.drama.service.DramaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/drama")
public class DramaController {
    private final DramaService dramaService;

    @GetMapping("/{genre}")
    public ResponseEntity<DramaThumbnailListDto> getDramaThumbnailList(@PathVariable String genre) {
        DramaThumbnailListDto responseData = dramaService.getDramaThumbnailList(genre);
        return ResponseEntity.ok(responseData);
    }
}
