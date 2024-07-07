package br.com.agenda.persistence.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
@Table(name = "agenda")
public class AgendaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "contact", length = 20, nullable = false)
    private String contact;

    @Column(name = "phone", length = 15, nullable = false)
    private String phone;

    @Column(name= "email", length = 50, nullable = false)
    private String email;

    @Column(name = "birthdate", nullable = false)
    private Date birthdate;

    @Column(name= "description", length = 200, nullable = true)
    private String description;

}
