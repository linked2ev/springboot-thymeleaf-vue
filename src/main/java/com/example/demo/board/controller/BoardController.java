package com.example.demo.board.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/views/board/")
public class BoardController {

    @GetMapping("/{boardId}")
    public ModelAndView view(@PathVariable(name="boardId", required = true) Long boardId) {
        ModelAndView mv = new ModelAndView();
        mv.addObject("boardId", boardId);
        mv.setViewName("views/board/view");
        return mv;
    }
}
