package ischar.indrama.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;

@AllArgsConstructor
@Getter
public class Location {
    private BigDecimal latitude;
    private BigDecimal longitude;
}
