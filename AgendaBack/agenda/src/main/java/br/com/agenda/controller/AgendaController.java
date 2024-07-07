package br.com.agenda.controller;

import br.com.agenda.persistence.entity.AgendaEntity;
import br.com.agenda.persistence.repository.AgendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app-agenda/api/")

public class AgendaController {

    @Autowired
    AgendaRepository agendaRepository;

    @RequestMapping(value = "/getAllAgendas", method = RequestMethod.GET)
    public List<AgendaEntity> getAllUnit() {

        List<AgendaEntity> list = agendaRepository.findAll();

        return list;
    }

    @RequestMapping(value = "/addAgenda", method = RequestMethod.POST)
    public AgendaEntity addAgenda (@RequestBody AgendaEntity entity) {
        AgendaEntity newAgenda = agendaRepository.save(entity);
        return newAgenda;

    }

    @DeleteMapping("/delAgenda/{id}")
    public void delAgenda(@PathVariable Long id) {
        agendaRepository.deleteById(id);
    }

    @PutMapping("/updAgenda")
    public AgendaEntity updAgenda(@RequestBody AgendaEntity entity) {
        if (agendaRepository.existsById(entity.getId())) {
            return agendaRepository.save(entity);
        } else {
            throw new RuntimeException("Entity not found");
        }
    }

}
