<template>
    <div>
        <HEADER></HEADER>
        <el-container>
                <el-main>
                    <div class="one">
                        <div class="one_child">
                            <h1>Programmes</h1>
                            <span class="bor_bot"></span>
                            <span class="ss">
                                For more than a century, Le Cordon Bleu has enabled aspiring culinary professionals to turn their ambitions into reality. Nowadays we offer a wide range of culinary arts, wine, management and hospitality programmes and highly recognised cooking qualifications and certificates. Regardless of your background, by graduating with Le Cordon Bleu, you’ll become part of a great tradition of excellence, with credentials that will set you apart from the competition in a demanding and changing industry.
                            </span>
                            <button>
                                <i class="el-icon-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="two"></div>
                    <div class="three">
                        <div class="three_one">
                            Find out more about our wide range of programmes and courses by selecting either your preferred category or location. 
                        </div>
                        <div class="three_two">
                            <el-row>
                                <el-col :span="24" class="bgone">
                                    <div class="orange">
                                        <div class="title">Grand Diplôme®</div>
                                        <div class="bord"></div>
                                        <p>An intensive and comprehensive programme in classic French culinary techniques, combining our Diplôme de Pâtisserie and Diplôme de Cuisine, Le Grand Diplôme® is considered the passport to a world of career opportunities.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgtwo bg">
                                    <div class="bgall">
                                        <div class="title">Cuisine</div>
                                        <div class="bord"></div>
                                        <p>Master basic to advanced culinary techniques that apply to any style of cuisine. Explore French culinary traditions, global cuisines and current trends.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgthree bg">
                                    <div class="bgall">
                                        <div class="title">Pastry & Confectionery</div>
                                        <div class="bord"></div>
                                        <p>Discover the art of Pâtisserie. Courses range from specialized ateliers, basic through advanced levels of pastry and confectionary craft making, plated and boutique style desserts.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgsix bg">
                                    <div class="bgall">
                                        <div class="title">Hospitality Management & Gastronomy</div>
                                        <div class="bord"></div>
                                        <p>From running your own Hotel or Resort, Restaurant, Café or Boutique business, our diploma and degree programmes instill operational, supervisory and management knowledge, skills and application.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgfive bg">
                                    <div class="bgall">
                                        <div class="title">Bakery, Danish Pastries & Artisan Breads</div>
                                        <div class="bord"></div>
                                        <p>Learn typical French bread making techniques and processes for making bread. Make specialty danish, regional and artisan breads and learn how to apply advanced yeast production methods.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgfour bg">
                                    <div class="bgall">
                                        <div class="title">Gastronomy & Nutrition</div>
                                        <div class="bord"></div>
                                        <p>You are what you eat. Explore Gastronomy through practical culinary skills alongside the principles of Nutrition. Learn about current food trends and how nutrition, health and food interact. Adapt recipes, create innovative dishes using global flavours and acquire knowledge of seasonality and sustainability.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                
                                <el-col :span="12" class="bgseven bg">
                                    <div class="bgall">
                                        <div class="title">Culinary Arts & Business</div>
                                        <div class="bord"></div>
                                        <p>Create, practice and manage a world-class culinary business in a globally competitive environment. These innovative programs focus on developing knowledge and appreciation of fine food and wine in a ‘farm to plate’ context, and how this is successfully applied in a range of business oriented culinary.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgeight bg">
                                    <div class="bgall">
                                        <div class="title">Wine & Spirits</div>
                                        <div class="bord"></div>
                                        <p>Our wine and spirits programmes provide training with specific focus in various alcoholic beverages in order to best appreciate and serve them. Courses range from initiation modules to Food and Wine Pairing to Wine Management.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgnine bg">
                                    <div class="bgall">
                                        <div class="title">Gourmet & Short Courses</div>
                                        <div class="bord"></div>
                                        <p>For beginners, gourmet enthusiasts or those wanting to be the best house party host, a wide range of courses have been designed to satisfy the time and budget conscious. A great way to experience first-hand the world of Le Cordon Bleu.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgten bg">
                                    <div class="bgall">
                                        <div class="title">Les Petits Cordons Bleus</div>
                                        <div class="bord"></div>
                                        <p>Created especially for younger children, Les Petits Cordons Bleus is the perfect cooking course to foster and encourage children to develop their creativity and taste.</p>
                                        <button>VIEW THE PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgeleven bg">
                                    <div class="bgall">
                                        <div class="title">Other Programmes</div>
                                        <div class="bord"></div>
                                        <p>Still haven't found what you are looking for? Some institutes may offer unique courses specific to their campuses that will suit you and taste happy.</p>
                                        <button>VIEW THE PROGRAMMES</button>
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
                                width:200px;
                                border-radius:50px;
                                border: 1px solid white;
                                font-size:13px;
                                margin-top:53px;
                                transition: all 0.2s linear;
                            }
                            button:hover{
                                height: 60px;
                                width: 230px;
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
                                width:200px;
                                border-radius:50px;
                                border: 1px solid #988854;
                                font-size:13px;
                                margin-top:53px;
                                color:#988854;
                                transition: all 0.2s linear;
                            }
                            button:hover{
                                height:50px;
                                width: 230px;
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
                    .bgten{background-image: url("../../assets/img/clas11.jpg")}
                    .bgeleven{background-image: url("../../assets/img/clas12.jpg")}
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
