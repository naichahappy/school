<template>
    <div>
        <HEADER></HEADER>
        <el-container>
                <el-main>
                    <div class="one">
                        <div class="one_child">
                            <h1>课程搜索与申请</h1>
                            <span class="bor_bot"></span>
                            <span class="ss">
                                参加蓝带的专业课程的每一位学生将成为蓝带卓越精神的继承人，在加入蓝带大家庭的瞬间便开始了自我创新和自我实现的旅程，也同时将自己拥有成功职业未来的可能性发挥到最大。而创办初期所追寻的“ 卓越精神”作为学校的宗旨被代代蓝带人所努力延续了下来。现在的蓝带，作为美食文化普及和技术革新的核心，针对不同时期和不同文化，持续为业界的新生代创造和新人们的职业未来策划所继续着自己的努力。                            </span>
                            <button>
                                <i class="el-icon-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="two"></div>
                    <div class="three">
                        <div class="three_one">
                            一个多世纪以来，蓝带国际学院专注于培养厨艺专业人才，使他们美梦成真。在众多报读蓝带国际学院的学生中，尽管许多已拥有一些厨艺经验，但仍有为数 不少来 自不同学科和专业背景的学生。有些学生开始寻找新的职业方向，有些学生则希望发展不同的兴趣或拓展现有的专业。我们的学生为了在以下行业赢取成功的职业生 涯而努力奋斗，其中包括餐厅厨房，餐饮，酒楼和旅店管理，新闻，咨询，餐饮服务，食品造型和教育。 
                        </div>
                        <div class="three_two">
                            <el-row>
                                <!-- <el-col :span="24" class="bgone">
                                    <div class="orange">
                                        <div class="title">Le Grand Diplôme®</div>
                                        <div class="bord"></div>
                                        <p>O mais completo programa em técnicas culinárias francesas clássicas. Integrando o Diplôme de Pâtisserie com o Diplôme de Cuisine, o Le Grand Diplôme® é considerado o passaporte para um mundo de oportunidades de carreira na gastronomia.</p>
                                        <button>VEJA OS PROGRAMMES</button>
                                    </div>
                                </el-col> -->
                                <el-col :span="12" class="bgtwo bg">
                                    <div class="bgall">
                                        <div class="title">料理课程</div>
                                        <div class="bord"></div>
                                        <p>精通基本至进阶的厨艺技巧并将其应用到任何风格的料理。探索法式厨艺传统，世界各地料理和当前潮流。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgthree bg">
                                    <div class="bgall">
                                        <div class="title">甜点和巧克力课程</div>
                                        <div class="bord"></div>
                                        <p>发现甜点的艺术。科目从专门的工作坊，基础到进阶的甜点和巧克力手作工艺、摆盘到精品级甜点、世界佳肴和精准的装饰技巧。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgsix bg">
                                    <div class="bgall">
                                        <div class="title">旅馆、餐厅 & 厨艺管理</div>
                                        <div class="bord"></div>
                                        <p>从经营自有旅馆、餐厅、咖啡厅,蓝带文凭及学位课程灌输学员在餐旅和食品业营运、领导和管理等相关的知识、技能和实际应用的能力。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgfive bg">
                                    <div class="bgall">
                                        <div class="title">进修教育 & 专业发展课程</div>
                                        <div class="bord"></div>
                                        <p>提供一系列的厨艺和高等教育课程以拓展知识、创造机会、职涯进阶或将课程朝新的方向发展以提升技能并鼓励创新思考和理解。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                            </el-row>
                            <a href="#" class="top"><span class="el-icon-arrow-up"></span>TOP</a>
                        </div>
                    </div>
                </el-main>
        </el-container>
        <FOOTER></FOOTER>
    </div>
</template>
<script>
import Header from '../header'
import Footer from '../footer'
export default {
    data(){
        return{

        }
    },
    components:{HEADER:Header,FOOTER:Footer}
}
</script>

<style lang="scss" scoped>
.el-container{
    .el-main{
        padding: 0px 0px 200px 0px;
        width: 100%;
        .one{
            background-image: url("../../assets/img/31630.jpg");
            background-repeat: no-repeat;
            background-size:100%;
            width: 100%;
            color: white;
            text-align: center;
            .one_child{
                background-color:rgba(6,43,104,.4);
                height: 100%;
                padding-top:120px;
                h1{
                    font-size:72px;
                    font-weight:500;
                    margin: 0px;
                }
                .bor_bot{
                    display: inline-block;
                    width:70px;
                    border-bottom: 2px solid white;
                }
                .ss{
                    display: inline-block;
                    padding-top:45px;
                    font-size: 17px;
                    line-height:35px;
                    padding:60px 340px 100px 340px;
                }
                button{
                    border-radius: 50%;
                    height: 80px;
                    width: 80px;
                    border: 2px solid white;
                    background-color:rgba(255, 255, 255, 0.1);
                    transition: all 0.2s linear;
                    color: white;
                    margin-bottom:50px;
                    i{
                        font-size:60px;
                    }
                }
                button:hover{
                    background-color:rgba(255, 255, 255, 0.5);
                    transition: all 0.2s linear;
                }
            }
        }
        .two{
            width:100%;
            height:60px;
            border-bottom: 1px solid #dcdcdc;;
        }
        .three{
            padding: 10px 110px 0px 110px;
            width: 100%;
            .three_one{
                padding: 40px 22px 100px 22px;
                color: #787878;
                font-size: 17px;
            }
            .three_two{
                padding:0px 22px 0px 22px;
                .el-row{
                    text-align: center;
                    .bgone{
                        height: 500px;
                        background-size:100%;
                        background-repeat: no-repeat;
                        background-image: url("../../assets/img/clas1.jpg");
                        .orange{
                            background-color: rgba(152,136,84,.8);
                            width: 100%;
                            padding: 80px 370px;
                            color: white;
                            .title{
                                font-size: 35px;
                            }
                            .bord{
                                height:10px;
                                width: 70px;
                                border-bottom: 2px solid white;
                            }
                            p{
                                font-size: 17px;
                                line-height:35px;
                                margin-top:40px;
                            }
                            button{
                                background-color: rgba(255,255,255,0);
                                height: 60px;
                                width:100px;
                                border-radius:50px;
                                border: 1px solid white;
                                font-size:13px;
                                margin-top:53px;
                                transition: all 0.2s linear;
                            }
                            button:hover{
                                height: 60px;
                                width: 150px;
                                border-radius:40px;
                                background-color: rgba(255,255,255,0.5);
                                transition: all 0.2s linear;
                                font-size:15px;
                            }
                        }
                    }
                    .bg{
                        background-size: 100%;
                        background-repeat: no-repeat;
                        .bgall{
                            background-color: rgba(255,255,255,.8);
                            padding: 80px 40px;
                            border: 2px solid white;
                            .title{
                                font-size: 35px;
                                color: #062b68;
                            }
                            .bord{
                                border-top: 2px solid #062b68;
                                width: 70px;
                                height:20px;
                                margin-top: 10px;
                            }
                            p{
                                color: #062b68;
                                font-size: 17px;
                            }
                            button{
                                background-color: rgba(255,255,255,0);
                                height:50px;
                                width:100px;
                                border-radius:50px;
                                border: 1px solid #988854;
                                font-size:13px;
                                margin-top:53px;
                                color:#988854;
                                transition: all 0.2s linear;
                            }
                            button:hover{
                                height:50px;
                                width: 150px;
                                border-radius:40px;
                                background-color:#988854;
                                color: white;
                                transition: all 0.2s linear;
                            }
                        }
                    }
                    .bgtwo{background-image: url("../../assets/img/clas2.jpg")}
                    .bgthree{background-image: url("../../assets/img/clas3.jpg")}
                    .bgfour{background-image: url("../../assets/img/clas4.jpg")}
                    .bgfive{background-image: url("../../assets/img/clas5.jpg")}
                    .bgsix{background-image: url("../../assets/img/clas6.jpg")}
                    .bgseven{ background-image: url("../../assets/img/clas7.jpg")}
                    .bgeight{background-image: url("../../assets/img/clas8.jpg")}
                    .bgnine{background-image: url("../../assets/img/clas9.jpg")}
                    .bgten{background-image: url("../../assets/img/clas10.jpg")}
                }
                .top{
                    position:absolute;
                    right: 0;
                    background-color: #062b68;
                    font-size:17px;
                    color: white;
                    text-align: center;
                    border-radius: 4px 0 0 4px;
                    padding: 8px 15px 10px;
                    span{
                        display: block;
                    }
                }
            }
        }
    }
    @media (max-width:1470px){
        .el-main{
            .one{
                .one_child{
                    padding-top: 20px;
                    .ss{
                        padding:40px 320px 80px 320px;
                    }
                }
            }
        }    
    }
    @media (max-width:1220px){
        .el-main{
            .one{
                .one_child{
                    h1{
                        font-size: 50px;
                    }
                    .ss{
                        padding:20px 230px 60px 230px;
                    }
                    button{
                        height: 60px;
                        width: 60px;
                        i{font-size: 40px;}
                    }
                }
            }
        }    
    }    
    @media (max-width:1020px) {
        .el-main{
            .one{
                .one_child{
                    h1{
                        font-size: 40px;
                    }
                    .ss{
                        padding:20px 160px 60px 160px;
                        font-size: 14px;
                    }
                    button{
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }
    @media (max-width:870px){
        .el-main{
            .one{
                .one_child{
                    h1{
                        font-size: 30px;
                    }
                    .ss{
                        padding:20px 100px 40px 100px;
                        font-size: 14px;
                    }
                    button{
                        margin-bottom:10px;
                    }
                }
            }
        }
    }
    @media (max-width:750px) {
        .el-main{
            .one{
                height:600px;
                background-image: url("../../assets/img/31630.jpg");
                background-size: 200%;
                .one_child{
                    h1{
                        font-size:50px;
                    }
                    .ss{
                        padding:60px 80px 40px 80px;
                        font-size: 17px;
                    }
                    button{
                        height: 80px;
                        width: 80px;
                        i{font-size:60px;}
                    }
                }
            }
        }
    }
    @media (max-width: 616px) {
        .el-main{
            .one{
                background-size: 600%;
                .one_child{
                    h1{
                        font-size:30px;
                    }
                    .ss{
                        padding:40px 20px 20px 20px;
                        font-size: 15px;
                    }
                    button{
                        height: 60px;
                        width: 60px;
                        i{font-size:30px;}
                    }
                }
            }
        }
    }
}

</style>
