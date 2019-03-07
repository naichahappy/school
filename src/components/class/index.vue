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
                                一个多世纪以来，蓝带国际学院专注于培养厨艺专业人才，使他们美梦成真。如今我们广泛提供烹饪艺术，葡萄
                                酒，管理和款带业等课程方案。不管你之前的背景为何，参加蓝带专业课程的每一位学生将成为蓝带卓越精神的继
                                承人，在加入蓝带大家庭的瞬间便开始了自我创新和自我实现的旅程，也同时将自己拥有成功职业未来的可能性发
                                挥到最大。
                            </span>
                            <button>
                                <i class="el-icon-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="two"></div>
                    <div class="three">
                        <div class="three_one">
                            选择你喜好的项目或地点以获取更多课程与项目等资讯。
                        </div>
                        <div class="three_two">
                            <el-row>
                                <el-col :span="24" class="bgone">
                                    <div class="orange">
                                        <div class="title">高级厨艺大文凭</div>
                                        <div class="bord"></div>
                                        <p>为一门密集且涉猎领域很广泛的经典法式厨艺技巧课程，结合甜点证书课程和料理证书课程，厨艺大证书被视为踏入国际工作舞台的通行证。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
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
                                        <p>从经营自有旅馆、餐厅、咖啡厅、精品店等事业，蓝带文凭及学位课程灌输学员在餐旅和食品业营运、领导和管理等相关的知识、技能和实际应用的能力。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgfive bg">
                                    <div class="bgall">
                                        <div class="title">美食 & 短期课程</div>
                                        <div class="bord"></div>
                                        <p>对于初学者、美食爱好者或想要成为最佳家庭聚会的主人而言，蓝带一系列的课程就是满足对于时间和预算有限的人而设计的。这是第一手体验蓝带厨艺领域最好的方式。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgfour bg">
                                    <div class="bgall">
                                        <div class="title">面包、丹麦面包 & 工匠面包课程</div>
                                        <div class="bord"></div>
                                        <p>学习典型的法式面包制作技巧和过程，包括特制的丹麦面包、区域性的面包、工匠型的面包并学会如何应用进阶的酵母制作方法。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                
                                <el-col :span="12" class="bgseven bg">
                                    <div class="bgall">
                                        <div class="title">奶酪课程</div>
                                        <div class="bord"></div>
                                        <p>从初学者晋身为专业人士的过程中，学员能学到许多不同的主题如奶酪的历史和文化、奶酪的制作方法和奶酪如何与葡萄酒及其它饮品搭配。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgeight bg">
                                    <div class="bgall">
                                        <div class="title">进修教育 & 专业发展课程</div>
                                        <div class="bord"></div>
                                        <p>提供一系列的厨艺和高等教育课程以拓展知识、创造机会、职涯进阶或将课程朝新的方向发展以提升技能并鼓励创新思考和理解。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgnine bg">
                                    <div class="bgall">
                                        <div class="title">旅游、会议 & 活动课程</div>
                                        <div class="bord"></div>
                                        <p>因为全球化的缘故，旅游业成为娱乐、旅行和进修的门户。学习构成绝佳旅游目的地的要素。</p>
                                        <button>选择一个位置</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgten bg">
                                    <div class="bgall">
                                        <div class="title">厨艺 & 商业课程</div>
                                        <div class="bord"></div>
                                        <p>在全球竞争的环境里创立、实务操作和管理世界级厨艺事业。这类创新课程计划重点在农场至餐桌的情境里，培养对于精美菜肴和葡萄酒的知识和赏析及如何成功地将它应用在与厨艺相关的事业体里。</p>
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
