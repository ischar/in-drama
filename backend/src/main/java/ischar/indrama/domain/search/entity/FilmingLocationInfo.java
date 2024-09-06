package ischar.indrama.domain.search.entity;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;

@AllArgsConstructor
@Getter
public class FilmingLocationInfo {

    private BigDecimal latitude;
    private BigDecimal longitude;

    @Column(name = "place_name", nullable = false)
    private String placeName;

    @Column(name = "place_type")
    private String placeType;

    @Column(name = "business_hours")
    private String businessHours;

    @Column(name = "break_time")
    private String breakTime;

    @Column(name = "closed_days")
    private String closedDays;

    private String location;

}
