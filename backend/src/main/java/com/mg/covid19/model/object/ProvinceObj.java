package com.mg.covid19.model.object;

import com.mg.covid19.model.model.StatisticModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProvinceObj {
    private long id;
    private String name;
    private StatisticModel statistic;
}
