/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyalabel_config":"admin/liuyalabel/liuyalabel-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyalabel_config"],function(){
    var config = $.extend(layui.liuyalabel_config,{
        childrenPage:[
            {
                tabTitle:"更多信息",
                url:"admin/page/liuya_article/list",
                mcForeignName:"labelType"
            }        ],
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',labelName:'label_name'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: 'id', minWidth:100, align:"center",sort:true},

            {field: 'labelName', title: '标签名字', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.labelName) +'" class="magicalcoder-table-text layui-input security_list_table_form_labelName" name="labelName" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="标签名字"/>'
                }
                , sort:true
            },
        {title: '操作', minWidth:250, templet:'#newsListOperateTemplate',fixed:"right",align:"center"}
    ]];
    //表格中的一些事件
    var tableEvent = {
        "tool":function (obj,roleId) {//操作部分的按钮
            return true;//不阻止事件继续执行封装的事件
        },
        "sort":function (obj,safeOrderBy) {//排序
            return true;//不阻止事件继续执行封装的事件
        }
    }
    magicalcoderlist.bindTableArea(cols,tableEvent)
    magicalcoderlist.bindAreaEvents();
})
