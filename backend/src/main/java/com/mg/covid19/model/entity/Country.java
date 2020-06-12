package com.mg.covid19.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@ToString
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Country implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)     //toDo dont use(increment) table field id on error
    private long id;

    @Column(unique=true)
    String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "statistic_id", referencedColumnName = "id")
    private Statistic statistic;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "code_id", referencedColumnName = "id")
    private Code code;

    //@OneToOne(cascade = CascadeType.ALL)
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;

}


/*
---------------------------------------------------------
{
    "name": "Italy"
}
---------------------------------------------------------
{
    "name": "Italy",
    "statistic":
        {
            "active": 333,
            "confirmed":333,
            "recovered":1050802,
            "critical":50962,
            "deaths":233873,
            "lastChange":"2020-05-01T01:57:04+02:00",
            "lastUpdate":"2020-05-01T02:00:04+02:00"
        },
    "code":
        {
            "code":"AF",
            "alpha2code":"AF",
            "alpha3code":"AFG"
        },
    "location":
    	{
		    "latitude":41.87194,
		    "longitude":12.56738
		}
}
---------------------------------------------------------
*/