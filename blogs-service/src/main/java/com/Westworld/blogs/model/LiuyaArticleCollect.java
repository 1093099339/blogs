package com.Westworld.blogs.model;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.math.*;
import java.io.Serializable;
import lombok.Data;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/
@Data
public class LiuyaArticleCollect implements Serializable{

    private Integer id;//自增列
    private String articleId;//收藏文章的id
    private Integer userId;//收藏人的id
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp collectCreatetime;//收藏的创建时间


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public String getArticleId(){
        return articleId;
    }
    public void setArticleId(String articleId){
        this.articleId = articleId;
    }

    public Integer getUserId(){
        return userId;
    }
    public void setUserId(Integer userId){
        this.userId = userId;
    }

    public Timestamp getCollectCreatetime(){
        return collectCreatetime;
    }
    public void setCollectCreatetime(Timestamp collectCreatetime){
        this.collectCreatetime = collectCreatetime;
    }
}
