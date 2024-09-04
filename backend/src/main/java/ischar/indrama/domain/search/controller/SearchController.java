package ischar.indrama.domain.search.controller;

import ischar.indrama.domain.search.dto.SearchResultDto;
import ischar.indrama.domain.search.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/search")
public class SearchController {

    private final SearchService searchService;

    @GetMapping("/{dramaName}")
    public ResponseEntity<SearchResultDto> search(@PathVariable String dramaName) {

        SearchResultDto responseData = searchService.getLocations(dramaName);
        return ResponseEntity.ok(responseData);
    }
}
