<template>
    <div>
        <el-container>
            <el-header>
                <div class="head">
                    <el-row>
                        <el-col :span="12">
                            <div class="logo">
                                <router-link to="clas"><img src="../../assets/img/logo.png"/></router-link>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="top_right">
                                <el-row>
                                    <el-col :span="4" class="border">
                                        <a href="#">校园</a>
                                    </el-col>
                                    <el-col :span="4" class="border">
                                        <a href="#">中文</a>
                                    </el-col>
                                    <el-col :span="8" class="border">
                                        <a href="#">书包:项目为0</a>
                                    </el-col>
                                    <el-col :span="4" class="border">
                                        <a href="#">登录</a>
                                    </el-col>
                                    <el-col :span="4">
                                        <a href="#"><i class="el-icon-search"></i></a>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="head_bottom">
                    <el-row>
                        <el-col :span="4">
                            <div class="bord blo" @mouseover="over()" @mouseout="out()">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a class="tu" href="#">校区位置</a>
                                <div class="white"></div>
                                <transition name="el-fade-in-linear">
                                    <div class="hide" v-show="showHide">
                                        <el-row class="row_two">
                                            <el-col :span="6">
                                                <div class="one">
                                                    <div class="title">欧洲校区</div>
                                                    <ul>
                                                        <li><router-link to="paris"> <a>> 巴黎, 法国</a></router-link></li>
                                                        <li><router-link to="london"><a>> 伦敦, 英国</a></router-link></li>
                                                        <li><a href="#">> 马德里, 西班牙</a></li>
                                                        <li><a href="#">> 伊斯坦堡, 土耳其</a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                    </ul>
                                                </div>
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="one">
                                                    <div class="title">美洲校区</div>
                                                    <ul>
                                                        <li><router-link to="canada"><a>> 渥太华, 加拿大</a></router-link></li>
                                                        <li><router-link to="shengbaoluo"><a>> 圣保罗, 巴西</a></router-link></li>
                                                        <li><a href="#">> 里约热内卢, 巴西</a></li>
                                                        <li><a href="#">> 墨西哥市, 墨西哥</a></li>
                                                        <li><a href="#">> 利马, 秘鲁</a></li>
                                                        <li><a href="#">> 美国</a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                    </ul>
                                                </div>
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="one">
                                                    <div class="title">大洋洲校区</div>
                                                    <ul>
                                                        <li><router-link to="ade"><a>> 阿得雷德, 澳洲</a></router-link></li>
                                                        <li><router-link to="melbourne"><a>> 墨尔本, 澳洲</a></router-link></li>
                                                        <li><a href="#">> Brisbane, Australia</a></li>
                                                        <li><a href="#">> 澳大利亚</a></li>
                                                        <li><a href="#">> 柏斯, 澳洲</a></li>
                                                        <li><a href="#">> 悉尼, 澳洲</a></li>
                                                        <li><a href="#">> 惠灵顿, 新西兰</a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                    </ul>
                                                </div>
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="one">
                                                    <div class="title">亚洲校区</div>
                                                    <ul>
                                                        <li><router-link to="shanghai"><a>> 上海, 中国</a></router-link></li>
                                                        <li><router-link to="japan"><a>> 东京, 日本</a></router-link></li>
                                                        <li><a href="#">> 古尔冈, 印度</a></li>
                                                        <li><a href="#">> Beirut, Lebanon</a></li>
                                                        <li><a href="#">> 神户, 日本</a></li>
                                                        <li><a href="#">> 首尔, 韩国</a></li>
                                                        <li><a href="#">> 吉隆坡, 马来西亚</a></li>
                                                        <li><a href="#">> 高雄, 台湾地区</a></li>
                                                        <li><a href="#">> 曼谷, 泰国</a></li>
                                                    </ul>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </transition>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="bord">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a class="tu" href="#">蓝带故事</a>
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="bord"><a class="tu" href="#">课程</a></div>
                        </el-col>
                        <el-col :span="3">
                            <div class="bord"><a class="tu" href="#">手册</a></div>
                        </el-col>
                        <el-col :span="4">
                            <div class="bord"><a class="tu" href="#">新闻与活动</a></div>
                        </el-col>
                        <el-col :span="3">
                            <div class="bord"><a class="tu" href="#">联系</a></div>
                        </el-col>
                        <el-col :span="3">
                            <div class="btn">
                                <a href="#"><button>申请</button></a>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-header>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showHide:false

        }
    },
    methods:{
        over(){
            this.showHide=true
        },
        out(){
            this.showHide=false
        }
    }
}
</script>

<style lang="scss" scoped>
ul li{
    list-style: none;
}
a{
    text-decoration: none;
}
.el-header{
    width: 100%;
    padding: 0px!important;
    z-index: 1000;
    height: 100%!important;
    background-color: white;
    .head{
        width: 100%;
        padding:20px 160px;
        border-bottom: 1px solid #dcdcdc;
        .el-row{
            .el-col{
                .logo{
                    img{
                        width:80%;
                    }
                }
                .top_right{
                    padding:40px 0px 0px 280px;
                    .el-row{
                        text-align: center;
                        .el-col{
                            a{
                                font-size: 12px;
                                color: black;
                            }
                            a:hover{
                                text-decoration: underline;
                            }
                        }
                        .border{
                            border-right:1px solid #dcdcdc;
                        }
                    }
                }
            }
        }
    }
    .head_bottom{
        width: 100%;
        padding-top: 20px;
        padding-right:100px;
        .el-row{
            font-size: 14px;
            .el-col{
                text-align: center;
                cursor: pointer;
                div{
                    .tu{
                        color: #988854;
                    }
                    .white{
                        widows: 100%;
                        height:30px;
                        background-color: white;
                    }
                }
            }
            .el-col .blo .hide{
                background-color: #07265c;
                position: fixed;
                width: 100%;
                padding:60px 300px 90px 90px;
                transition: all 0.2s linear;
                cursor: default;
                .row_two{
                    padding: 0px 50px;
                    .one{
                    text-align: left;
                        .title{
                            color:#b8bcc4;
                            font-size: 14px;
                        }
                        ul{
                            li{
                                line-height:30px;
                                a{
                                    color: white;
                                    font-size: 14px;
                                }
                                a:hover{
                                    text-decoration:underline;
                                }
                            }
                        } 
                    }
                }
            }
            .el-col:hover .bord .tu{
                border-bottom: 2px solid #988854;
            }
            .el-col:hover .btn{
                border: 0px !important;
            }
            .el-col .btn a button{
                padding: 5px 35px 5px 35px;
                border-radius:50px;
                background-color: #988854;
                color: white;
                transition: all 0.2s linear;
                border:2px solid #988854;
            }
            .el-col .btn a button:hover{
                color: #988854;
                transition: all 0.2s linear;
                background-color: white;
            }
        }
    }
}
</style>
