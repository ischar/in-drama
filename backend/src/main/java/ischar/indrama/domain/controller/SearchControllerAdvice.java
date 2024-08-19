package ischar.indrama.domain.controller;

import ischar.indrama.domain.exception.LocationNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class SearchControllerAdvice {
    @ExceptionHandler({LocationNotFoundException.class})
    public ResponseEntity<Void> handleNotFoundException(RuntimeException e) {
        return ResponseEntity.notFound().build();
    }
}
