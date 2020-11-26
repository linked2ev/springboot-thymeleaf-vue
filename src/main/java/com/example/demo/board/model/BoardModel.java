package com.example.demo.board.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardModel {

    public Integer boardId;

    public String title;

    public String contents;

    public int hitCnt;

    public String regId;

    public String regDate;

}
