package com.example.demo.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/views/example/")
public class ExampleController {

    @GetMapping("template")
    public ModelAndView template() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("views/example/template");
        return mv;
    }
}
