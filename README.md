安装介绍
----
    bower install
    npm install
    composer update

目录结构
----
略


运行
--
    gulp serve
    在本地搭建d.mob.com的虚拟域名来访问，以便PHP为前端提供接口数据服务

CMS 备注
----
富文本编辑器：https://github.com/froala/angular-froala
保存草稿 保存成json文件存在php本地
图片上传 ng-file-upload

api控制使用lumen框架，对数据流进行认证，格式化，单元测试

lumen相关
----

登陆机制
----
通过 mob_session_key 判断用户是否已经登陆，如果没有登录，接口返回503

如何创建app，如何切换app，

js和css如何打包：

各个应用之间如何

