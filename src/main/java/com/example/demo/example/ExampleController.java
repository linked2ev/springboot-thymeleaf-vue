package com.example.demo.example;

import com.example.demo.board.model.BoardModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/example/")
public class ExampleController {

    @GetMapping("component")
    public ModelAndView component() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("views/example/component");
        return mv;
    }

    @GetMapping("list-checkbox")
    public ModelAndView listCheckbox() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("views/example/list-checkbox");
        return mv;
    }

    @GetMapping("api/boards")
    public List<BoardModel> getBoardList() {
        List<BoardModel> retData = new ArrayList<>();
        BoardModel board = new BoardModel();

        for (var i=0; i<10; i++) {
            board = new BoardModel();
            board.setBoardId(i);
            board.setTitle("게시판 제목_" + i);
            board.setContents("게시판 내용입니다_" + i);
            board.setHitCnt(10 + i);
            retData.add(board);
        }

        return retData;
    }
}
