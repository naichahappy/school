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
Depuis plus d’un siècle, Le Cordon Bleu a permis aux personnes qui  souhaitent faire carrière dans les arts culinaires de concrétiser leurs ambitions.

Nous proposons un large éventail de programmes autour des arts culinaires, des métiers du vin, du management et de l’hôtellerie.

Le Cordon Bleu, synonyme d'excellence depuis toujours, offre à tous ses diplômés des formations de référence qui les distinguent de la concurrence, quel que soit leur parcours, et dans un environnement exigeant en constante évolution.
                            </span>
                            <button>
                                <i class="el-icon-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="two"></div>
                    <div class="three">
                        <div class="three_one">
                            Découvrez tous les programmes et cours que nous dispensons en choisissant, la catégorie de programmes ou l'école de votre choix. 
                        </div>
                        <div class="three_two">
                            <el-row>
                                <el-col :span="24" class="bgone">
                                    <div class="orange">
                                        <div class="title">Grand Diplôme®</div>
                                        <div class="bord"></div>
                                        <p>Programme intense et complet sur les techniques culinaires françaises classiques, combinant le Diplôme de Pâtisserie et le Diplôme de Cuisine, le Grand Diplôme est un véritable passeport vers des opportunités professionnelles variées.</p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgtwo bg">
                                    <div class="bgall">
                                        <div class="title">Cuisine</div>
                                        <div class="bord"></div>
                                        <p>Des techniques de base aux plus avancées, applicables à tous les styles de cuisine, tout en explorant les traditions culinaires françaises, les cuisines du monde et les tendances actuelles.</p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgthree bg">
                                    <div class="bgall">
                                        <div class="title">Pâtisserie & Confiserie</div>
                                        <div class="bord"></div>
                                        <p>Découvrez l'art de la Pâtisserie. Les cours sont composés d'ateliers spécialisés, du niveau de base à avancé, en pâtisserie et confiserie, desserts à l'assiette et de boutique.</p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgsix bg">
                                    <div class="bgall">
                                        <div class="title">Management en Hôtellerie</div>
                                        <div class="bord"></div>
                                        <p>Afin de gérer votre propre hôtel, restaurant, café ou boutique, nos diplômes et formations supérieures dispensent les connaissances opérationnelles et managériales et leur mise en pratique dans les industries culinaires et hôtelières.</p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgfive bg">
                                    <div class="bgall">
                                        <div class="title">Boulangerie & Viennoiserie</div>
                                        <div class="bord"></div>
                                        <p>Apprenez les techniques de réalisation de pains français traditionnels et les procédés de fabrication du pain en général. Fabriquez des viennoiseries spéciales, des pains artisanaux et régionaux et apprenez à appliquer les méthodes de production avancées à base de levure.</p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgfour bg">
                                    <div class="bgall">
                                        <div class="title">Formation Continue </div>
                                        <div class="bord"></div>
                                        <p>Des programmes de formation culinaire et d'enseignement supérieur sont proposés pour développer ses propres connaissances, se créer de nouvelles opportunités professionnelles ou découvrir de nouveaux horizons, accroitre ses compétences et encourager.</p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                
                                <el-col :span="12" class="bgseven bg">
                                    <div class="bgall">
                                        <div class="title">Vins & Spiritueux</div>
                                        <div class="bord"></div>
                                        <p>Nos programmes Vins et Spiritueux sont axés autour de l'étude d'une large gamme de boissons, de leur service et de l'appréciation des saveurs. Les formations proposent des cours allant de l'initiation à des accords mets et vins spécialisés, en passant par la pratique du.</p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgeight bg">
                                    <div class="bgall">
                                        <div class="title">Ateliers & Cours Gourmets</div>
                                        <div class="bord"></div>
                                        <p>Pour les débutants, les gourmets ou tous ceux qui souhaitent recevoir des convives, nous avons créé une gamme d'ateliers pour satisfaire les impératifs horaires et budgétaires de chacun. </p>
                                        <button>VOIR LES PROGRAMMES</button>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="bgnine bg">
                                    <div class="bgall">
                                        <div class="title">Les Petits Cordons Bleus</div>
                                        <div class="bord"></div>
                                        <p>Créés tout spécialement pour les enfants, Les Petits Cordons Bleus, c'est le cours idéal pour encourager les enfants à développer leur créativité et leur goût.</p>
                                        <button>VOIR LES PROGRAMMES</button>
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
                                width:230px;
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
                    .bgfour{background-image: url("../../assets/img/clas8.jpg")}
                    .bgfive{background-image: url("../../assets/img/clas4.jpg")}
                    .bgsix{background-image: url("../../assets/img/clas6.jpg")}
                    .bgseven{ background-image: url("../../assets/img/clas7.jpg")}
                    .bgeight{background-image: url("../../assets/img/clas5.jpg")}
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
