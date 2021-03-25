var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    overlapLayer : null,
    positionDebut : null,
    positionFin : null,
    test: null,
    gameOver : false,
    key: null,
    principal: null,
    debutJeu: true,
    menu: true,


    initialiserWorld : function(){
        this.tilemap = jeu.scene.make.tilemap({key: jeu.level});
        this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer = this.tilemap.createStaticLayer("bot",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tileset,0,0);
            this.positionDebut = this.tilemap.findObject("Objects", obj => obj.name === "debut");

        this.positionFin = this.tilemap.findObject("Objects", obj => obj.name === "fin");
        
        this.worldLayer.setCollisionByProperty({Collides : true});

        

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);

        var policeTitre = {
            fontSize : "32px",
            color : "#FF0000",
            fontFamily : "ZCOOL KuaiLe"
        }
        
        if (jeu.debutJeu == false && jeu.level == "levelHub" )
        {
            
            this.menu = jeu.scene.add.image (75 , 50, "menu").setScale(0.5);
            this.menu.setScrollFactor(0);
            this.menu.setInteractive();
            this.menu.on("pointerup", ()=>
            {
                jeu.debutJeu = true;

                jeu.scene.scene.restart();
            }
            )

        }

            emptyHud = jeu.scene.add.image (220 , 555, "emptyHUD");
            emptyHud.setScrollFactor(0);

 
        if (jeu.tomeArt == true)
        {
            this.test = jeu.scene.add.image (24 , 568, "tomeArt");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeFrench == true)
        {
            this.test = jeu.scene.add.image (63 , 568, "tomeFrench");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeEnglish == true)
        {
            this.test = jeu.scene.add.image (102 , 568, "tomeEnglish");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeAudioVisuel == true)
        {
            this.test = jeu.scene.add.image (141 , 568, "tomeAudioVisuel");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeMath == true)
        {
            this.test = jeu.scene.add.image (180 , 568, "tomeMath");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeScience == true)
        {
            this.test = jeu.scene.add.image (219 , 568, "tomeScience");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeJavaScript == true)
        {
            this.test = jeu.scene.add.image (258 , 568, "tomeJavaScript");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeBaseDonnee == true)
        {
            this.test = jeu.scene.add.image (297 , 568, "tomeBaseDonnee");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeHtml == true)
        {
            this.test = jeu.scene.add.image (336 , 568, "tomeHtml");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeCss == true)
        {
            this.test = jeu.scene.add.image (375 , 568, "tomeCss");
            this.test.setScrollFactor(0);
        }
        if (jeu.tomeReseau == true)
        {
            this.test = jeu.scene.add.image (414 , 568, "tomeReseau");
            this.test.setScrollFactor(0);
        }       


        if (jeu.cleReseau == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(1,67).destroy();
        }
        if (jeu.cleReseau == true)
        {
            key = jeu.scene.add.image(415 , 534, "cleReseau")
            key.setScrollFactor(0);
        }  
        if (jeu.cleArt == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(11,88).destroy();
        }
        if (jeu.cleArt == true)
            {
                key = jeu.scene.add.image(25 , 534, "cleArt")
                key.setScrollFactor(0);
            }
        

        if (jeu.cleEnglish == true && jeu.level == "levelHub" )
            {
                this.overlapLayer.removeTileAt(3,78).destroy();
            }
        if (jeu.cleEnglish == true)
            {
                key = jeu.scene.add.image(103 , 534, "cleEnglish")
                key.setScrollFactor(0);
            }
        if (jeu.cleFrench == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(4,68).destroy();
        }
        if (jeu.cleFrench == true)
        {
            key = jeu.scene.add.image(63 , 534, "cleFrench")
            key.setScrollFactor(0);
        }
        if (jeu.cleAudioVisuel == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(3,64).destroy();
        }
        if (jeu.cleAudioVisuel == true)
        {
            key = jeu.scene.add.image(141 , 534, "cleAudioVisuel")
            key.setScrollFactor(0);
        }
        if (jeu.cleMath == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(4,15).destroy();
        }
        if (jeu.cleMath == true)
        {
            key = jeu.scene.add.image(181 , 534, "cleMath")
            key.setScrollFactor(0);
        }
        if (jeu.cleScience == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(6,48).destroy();
        }
        if (jeu.cleScience == true)
        {
            key = jeu.scene.add.image(220 , 534, "cleScience")
            key.setScrollFactor(0);
        }   
        if (jeu.cleJavaScript == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(12,12).destroy();
        }
        if (jeu.cleJavaScript == true)
        {
            key = jeu.scene.add.image(259 , 534, "cleJavaScript")
            key.setScrollFactor(0);
        }   
        if (jeu.cleBaseDonnee == true && jeu.level == "levelHub" )
        {
        this.overlapLayer.removeTileAt(5,33).destroy();
        }

        if (jeu.cleBaseDonnee == true)
            {
                key = jeu.scene.add.image(298 , 534, "cleBaseDonnee")
                key.setScrollFactor(0);
            }  

        if (jeu.cleHtml == true && jeu.level == "levelHub" )
            {
                this.overlapLayer.removeTileAt(12,21).destroy();
            }

        if (jeu.cleHtml == true)
            {
                key = jeu.scene.add.image(337 , 534, "cleHtml")
                key.setScrollFactor(0);
            }  
        if (jeu.cleCss == true && jeu.level == "levelHub" )
            {
            this.overlapLayer.removeTileAt(1,29).destroy();
            }
        if (jeu.cleCss == true)
            {
                key = jeu.scene.add.image(376 , 534, "cleCss")
                key.setScrollFactor(0);
            }  
        if (jeu.debutJeu == true && jeu.level == "levelHub")
            {
                player.isAlive = false;
                jeu.scene.add.image(400, 5250,"menuHUD");
                var hud = jeu.scene.add.image(400, 5187,"playBtn");
                hud.setInteractive();
                hud.on("pointerup", ()=> 
                {
                    jeu.debutJeu = false;
                    jeu.scene.scene.restart();
                    player.isAlive = true;
                
                })
            var hud = jeu.scene.add.image(400, 5300,"optBtn");
            hud.setInteractive();
            hud.on("pointerup", ()=> 
            {
                jeu.debutJeu = false;
                jeu.optionMenu = true;
                jeu.scene.scene.restart();
            })
            var hud = jeu.scene.add.image(400, 5410,"abtBtn");
            hud.setInteractive();
            hud.on("pointerup", ()=> 
            {
                window.open("https://etudiant.u-pem.fr/~famosse/cvnumerique/cvnumerique.html");
                })
        }
        if (jeu.optionMenu == true && jeu.level == "levelHub")
        {



            var hud = jeu.scene.add.image(400, 5300,"optoff");
            var cheat = jeu.scene.add.image(400, 5200,"cheatOff")
            var optoff = false;
            var cheatHud = false;
            var hudok = jeu.scene.add.image(400, 5400,"ok");
            hud.setInteractive();
            hud.on("pointerup", ()=> 
            {
               if (optoff == false || jeu.optoff == false)
               {
                 jeu.scene.add.image(400, 5300,"opton");
                 
                 optoff = true;
                 jeu.optoff = true;
                 jeu.sexe = true;

               }
               else if (optoff == true)
               {
                 jeu.scene.add.image(400, 5300,"optoff");
                 optoff = false;
                 jeu.optoff = false;
                 jeu.sexe = false;
               }

            })
            hudok.setInteractive();
            hudok.on("pointerup",()=>
            {
                jeu.optionMenu = false;
                jeu.debutJeu = true;
                jeu.scene.scene.restart();
            }) 
            cheat.setInteractive();
            cheat.on("pointerup",()=>
            {
                if (cheatHud == false)
                {
                    jeu.scene.add.image(400, 5200,"cheatOn");
                    cheatHud = true;
                    jeu.cheat = true
                    jeu.level = "finalLevel"
                    player.isAlive = true;
                }
                else if (cheatHud == true)
                {
                    jeu.scene.add.image(400, 5200,"cheatOff");
                    cheatHud = false;
                    jeu.cheat = false;
                    player.isAlive = false;
                    jeu.level = "levelHub"
                }
            })
        }
    },
    gererCollider : function(){
        this.overlapLayer.setTileIndexCallback(51, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(52, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(53, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(54, this.collectGemme, this); 
        this.overlapLayer.setTileIndexCallback(55,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(56, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(57, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(58, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(59, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(60, this.collectGemme, this);
        this.overlapLayer.setTileIndexCallback(61, this.collectGemme, this);
        //this.overlapLayer.setTileIndexCallback(12,this.killPlayer,this);
        this.overlapLayer.setTileIndexCallback(41,this.artClass,this);
        this.overlapLayer.setTileIndexCallback(66,this.artClass,this);
        this.overlapLayer.setTileIndexCallback(45,this.frenchClass,this);
        this.overlapLayer.setTileIndexCallback(70,this.frenchClass,this);
        this.overlapLayer.setTileIndexCallback(69,this.englishClass,this);
        this.overlapLayer.setTileIndexCallback(44,this.englishClass,this);
        this.overlapLayer.setTileIndexCallback(63,this.audioVisuelClass,this);
        this.overlapLayer.setTileIndexCallback(38,this.audioVisuelClass,this);
        this.overlapLayer.setTileIndexCallback(64,this.javaScriptClass,this);
        this.overlapLayer.setTileIndexCallback(39,this.javaScriptClass,this);
        this.overlapLayer.setTileIndexCallback(40,this.baseDonneeClass,this);
        this.overlapLayer.setTileIndexCallback(65,this.baseDonneeClass,this);
        this.overlapLayer.setTileIndexCallback(67,this.mathClass,this);
        this.overlapLayer.setTileIndexCallback(42,this.mathClass,this);
        this.overlapLayer.setTileIndexCallback(68,this.scienceClass,this);
        this.overlapLayer.setTileIndexCallback(43,this.scienceClass,this);
        this.overlapLayer.setTileIndexCallback(71,this.htmlClass,this);
        this.overlapLayer.setTileIndexCallback(46,this.htmlClass,this);
        this.overlapLayer.setTileIndexCallback(72,this.cssClass,this);
        this.overlapLayer.setTileIndexCallback(47,this.cssClass,this);
        this.overlapLayer.setTileIndexCallback(73,this.reseauClass,this);
        this.overlapLayer.setTileIndexCallback(48,this.reseauClass,this);
        this.overlapLayer.setTileIndexCallback(74,this.finalLevel,this);
        this.overlapLayer.setTileIndexCallback(49,this.finalLevel,this);
        this.overlapLayer.setTileIndexCallback(50,this.hubLevel,this);
        this.overlapLayer.setTileIndexCallback(75,this.hubLevel,this);
        this.overlapLayer.setTileIndexCallback(76,this.englishTeacher,this);
        this.overlapLayer.setTileIndexCallback(77,this.htmlTeacher,this);
        this.overlapLayer.setTileIndexCallback(78,this.audioVisuelTeacher,this);
        this.overlapLayer.setTileIndexCallback(79,this.javaScriptTeacher,this);
        this.overlapLayer.setTileIndexCallback(80,this.reseauTeacher,this);
        this.overlapLayer.setTileIndexCallback(81,this.artTeacher,this);
        this.overlapLayer.setTileIndexCallback(82,this.mathTeacher,this);
        this.overlapLayer.setTileIndexCallback(83,this.principalTeacher,this);
        this.overlapLayer.setTileIndexCallback(84,this.frenchTeacher,this);
        this.overlapLayer.setTileIndexCallback(85,this.cssTeacher,this);
        this.overlapLayer.setTileIndexCallback(86,this.basedonneeTeacher,this);
        this.overlapLayer.setTileIndexCallback(87,this.scienceTeacher,this);
        

        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer)
        jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer);
    },
    finLevel : function(player,tile){
        if(player.x > this.positionFin.x - 2 && player.x < this.positionFin.x +2){
            if(!this.gameOver){
                this.gameOver = true;
                jeu.player.killPlayer();
                jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y,"panel").setScale(5,3);
                var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y+100,"validation").setInteractive();
                restartBouton.on("pointerup", function(){
                    jeu.scene.scene.restart();
                });
    
                var policeTitre = {
                    fontSize : "52px",
                    color : "#FFFFFF",
                    fontFamily : "ZCOOL KuaiLe"
                }
                jeu.scene.add.text (jeu.scene.cameras.main.midPoint.x-200,jeu.scene.cameras.main.midPoint.y-100, "Tu as gagné \n Recommencer ?", policeTitre);
            }
        }
    },
    artClass : function(player,tile)
    {
        if(jeu.cleArt == true)
        {

            jeu.level = "classRoomArt";
            jeu.scene.scene.restart();

        }
    },
    frenchClass : function(player,tile)
    {
        if(jeu.cleFrench == true)
        {
            jeu.level = "classRoomFrench";
            jeu.scene.scene.restart();
        }

    },
    englishClass : function(player,tile)
    {
        if (jeu.cleEnglish == true)
        {
            jeu.level = "classRoomAnglais";
            jeu.scene.scene.restart();
            jeu.scene.add.image(100,500, "cleEnglish");
        }

    },
    audioVisuelClass : function(player,tile)
    {
        if (jeu.cleAudioVisuel == true)
        {
            jeu.level = "classRoomAudioVisuel";
            jeu.scene.scene.restart();
        }

    },
    javaScriptClass : function(player,tile)
    {
        if (jeu.cleJavaScript == true)
        {
            jeu.level = "classRoomJavaScript";
            jeu.scene.scene.restart();
        }

    },
    baseDonneeClass : function(player,tile)
    {
        if (jeu.cleBaseDonnee == true)
        {
            jeu.level = "classRoomBaseDonnee";
            jeu.scene.scene.restart();
        }

    },
    mathClass : function(player,tile)
    {
        if (jeu.cleMath == true)
        {
            jeu.level = "classRoomMath";
            jeu.scene.scene.restart();
        }

    },
    scienceClass : function(player,tile)
    {
        if (jeu.cleScience == true)
        {
            jeu.level = "classRoomScience";
            jeu.scene.scene.restart();
        }

    },
    htmlClass : function(player,tile)
    {
        if (jeu.cleHtml == true)
        {
            jeu.level = "classRoomHtml";
            jeu.scene.scene.restart();
        }

    },
    cssClass : function(player,tile)
    {
        if (jeu.cleCss == true)
        {
            jeu.level = "classRoomCss";
            jeu.scene.scene.restart();
        }

    },
    reseauClass : function(player,tile)
    {
        if (jeu.cleReseau == true)
        {
            jeu.level = "classRoomReseau";
            jeu.scene.scene.restart();
        }

    },
    finalLevel: function(player,tile)
    {
        if (jeu.tomeReseau == true && jeu.tomeArt == true && jeu.tomeFrench == true && jeu.tomeEnglish == true && jeu.tomeAudioVisuel == true && jeu.tomeMath && jeu.tomeScience == true && jeu.tomeJavaScript == true && jeu.tomeBaseDonnee == true && jeu.tomeHtml == true && jeu.tomeCss == true )
        {
            jeu.level = "finalLevel";
            jeu.scene.scene.restart();
        }

    },    
    hubLevel : function(player,tile)
    {
        jeu.level = "levelHub"
        jeu.scene.scene.restart();
        jeu.debutJeu = false;
    },
    englishTeacher : function(player,tile)
    {
        jeu.tomeEnglish = true;
        if (jeu.tomeEnglish == true)
        {
            this.test = jeu.scene.add.image (102 , 568, "tomeEnglish");
            this.test.setScrollFactor(0);
        }
        this.showMessageBox("Hello,\nWelcome in MMI,This year,in English\nwe're going to be working a lot on\ncommunication and are going to interpret \na lot of theatrical roles. \nRevise your irregular verbs carefully ! ",500,500,"englishTeacher");

    },
    htmlTeacher : function(player,tile)
    {
        jeu.tomeHtml = true;
        if (jeu.tomeHtml == true)
        {
            this.test = jeu.scene.add.image (336 , 568, "tomeHtml");
            this.test.setScrollFactor(0);
        }
        this.showMessageBox("Bonjour,\nBienvenu en MMI,cette année,en intégration\nnous allons apprendre le Html.\nLe Html permet d'écrire un site internet.\nVoici un exmple de code html: \n<p>Bonjour,bienvenue sur mon site</p>\nqui permet simplement d'écrire un paragraphe",500,500,"htmlTeacher");

    },
    javaScriptTeacher : function(player,tile)
    {
        jeu.tomeJavaScript = true;
        if (jeu.tomeJavaScript == true)
        {
            this.test = jeu.scene.add.image (258 , 568, "tomeJavaScript");
            this.test.setScrollFactor(0);
            
        }
        this.showMessageBox("Bonjour,\nBienvenu en MMI,cette année,en programation\nnous allons apprendre le JavaScript.\nQui nous permettra de rendre nos sites \ninternet interractif. \nVoici un exemple de code en JavaScript:\n alerte('Hello world');",500,500,"javaScriptTeacher");

    },
    reseauTeacher : function(player,tile)
    {
        jeu.tomeReseau = true;
        if (jeu.tomeReseau == true)
        {
            this.test = jeu.scene.add.image (414 , 568, "tomeReseau");
            this.test.setScrollFactor(0);
        }     
        this.showMessageBox("Bonjour,\nBienvenu en MMI. Cette Année en réseau nous allons \napprendre à parametrer et comprendre différent \ntype d'architecture réseau. Nous allons ainsi \npouvoir faire communiquer toto et titi\nensemble. Voici une adresse IP: '192.168.0.1' \net voici une adresse mac:'5E:FF:56:A2:AF:15' ",500,500,"reseauTeacher");

    },
    artTeacher : function(player,tile)
    {
        jeu.tomeArt = true;
        if (jeu.tomeArt == true)
        {
            this.test = jeu.scene.add.image (25 , 568, "tomeArt");
            this.test.setScrollFactor(0);
        }
        this.showMessageBox("Bonjour,bienvenu en MMI. Cette année en art,\nnous allons nous ouvrir l'esprit sur divers \nsujet comme le début du cinéma,\nl'art de la guerre jusqu'a la signification\ndes couleurs. Vous réaliserez également\nquelques oeuvres qui vous demanderons \nuniquement de l'imagination et de la créativité... ",500,500,"artTeacher");


        
    },
    mathTeacher : function(player,tile)
    {
        jeu.tomeMath = true;
        if (jeu.tomeMath == true)
        {
            this.test = jeu.scene.add.image ( 180, 568, "tomeMath");
            this.test.setScrollFactor(0);
        }
        this.showMessageBox("Bonjour,\nbienvenu en MMI. Cette année en Math, nous \nreviendrons sur des mathématiques de niveau \nlycée. Que vous avez normalement vue au cours\ndes années précédentes. \Trigonométrie,Vecteur,Equations...",500,500,"mathTeacher");

    },
    principalTeacher : function(player,tile)
    {
        player.isAlive = false;
        this.principal = jeu.scene.add.image(400, 300,"principalTestHUD");
        var tome = jeu.scene.add.image (25 , 568, "tomeArt");
        tome.setInteractive();
        tome.on("pointerup", ()=>
        {
            jeu.scene.add.image(400, 300,"artJob");
               this.overlapLayer.removeTileAt(3,3).destroy();
               jeu.scene.scene.remove("principalTestHUD")
               var end = jeu.scene.add.image(750, 560,"speakNextButton").setScale(0.1);
               end.setInteractive();
               end.on("pointerup",()=>
               {
                   jeu.level = "levelHub"
                jeu.scene.scene.restart();
               }
               )
        }
        )
        var tome = jeu.scene.add.image (336 , 568, "tomeHtml");
        tome.setInteractive();
        tome.on("pointerup", ()=>
        {
            jeu.scene.add.image(400, 300,"webJob");
               this.overlapLayer.removeTileAt(3,3).destroy();
               jeu.scene.scene.remove("principalTestHUD")
               var end = jeu.scene.add.image(750, 560,"speakNextButton").setScale(0.1);
               end.setInteractive();
               end.on("pointerup",()=>
               {
                   jeu.level = "levelHub"
                jeu.scene.scene.restart();
               }
               )
        }
        )
        var tome = jeu.scene.add.image (375 , 568, "tomeCss");
        tome.setInteractive();
        tome.on("pointerup", ()=>
        {
            jeu.scene.add.image(400, 300,"webJob");
               this.overlapLayer.removeTileAt(3,3).destroy();
               jeu.scene.scene.remove("principalTestHUD")
               var end = jeu.scene.add.image(750, 560,"speakNextButton").setScale(0.1);
               end.setInteractive();
               end.on("pointerup",()=>
               {
                   jeu.level = "levelHub"
                jeu.scene.scene.restart();
               })
        })
        var tome = jeu.scene.add.image (414 , 568, "tomeReseau");
        tome.setInteractive();
        tome.on("pointerup", ()=>
        {
            jeu.scene.add.image(400, 300,"reseauJob");
               this.overlapLayer.removeTileAt(3,3).destroy();
               jeu.scene.scene.remove("principalTestHUD")
               var end = jeu.scene.add.image(750, 560,"speakNextButton").setScale(0.1);
               end.setInteractive();
               end.on("pointerup",()=>
               {
                   jeu.level = "levelHub"
                jeu.scene.scene.restart();
               })
        })
        var tome = jeu.scene.add.image (141 , 568, "tomeAudioVisuel");
        tome.setInteractive();
        tome.on("pointerup", ()=>
        {
            jeu.scene.add.image(400, 300,"audioVisuelJob");
               this.overlapLayer.removeTileAt(3,3).destroy();
               jeu.scene.scene.remove("principalTestHUD")
               var end = jeu.scene.add.image(750, 560,"speakNextButton").setScale(0.1);
               end.setInteractive();
               end.on("pointerup",()=>
               {
                   jeu.level = "levelHub"
                jeu.scene.scene.restart();
               })
        })
        var tome = jeu.scene.add.image (258 , 568, "tomeJavaScript");
        tome.setInteractive();
        tome.on("pointerup", ()=>
        {
            jeu.scene.add.image(400, 300,"programmationJob");
               this.overlapLayer.removeTileAt(3,3).destroy();
               jeu.scene.scene.remove("principalTestHUD")
               var end = jeu.scene.add.image(750, 560,"speakNextButton").setScale(0.1);
               end.setInteractive();
               end.on("pointerup",()=>
               {
                   jeu.level = "levelHub"
                jeu.scene.scene.restart();
               })
        })
        var tome = jeu.scene.add.image (297 , 568, "tomeBaseDonnee");
        tome.setInteractive();
        tome.on("pointerup", ()=>
        {
            jeu.scene.add.image(400, 300,"programmationJob");
               this.overlapLayer.removeTileAt(3,3).destroy();
               jeu.scene.scene.remove("principalTestHUD")
               var end = jeu.scene.add.image(750, 560,"speakNextButton").setScale(0.1);
               end.setInteractive();
               end.on("pointerup",()=>
               {
                   jeu.level = "levelHub"
                jeu.scene.scene.restart();
               })
        })
        
        jeu.scene.add.image (63 , 568, "tomeFrench");
        jeu.scene.add.image (102 , 568, "tomeEnglish");
        jeu.scene.add.image ( 180, 568, "tomeMath");
        jeu.scene.add.image (219 , 568, "tomeScience");
        
        
        jeu.scene.add.image (336 , 568, "tomeHtml");
        
        
        
    },
    frenchTeacher : function(player,tile)
    {
            this.showMessageBox("Bonjour,\nBienvenue en MMI. Cette,année en Francais\nnous allons apprendre a faire des C.V,\ndes lettres de motivation, mais également\nà travailler la communication de groupe grâce \nà la C.N.V. Vous ferez également du Marketing \nainsi que du Droit. Ajouté nous sur Linkedin ! ",500,500,"frenchTeacher");
            jeu.tomeFrench = true;
            if (jeu.tomeFrench == true)
            {
                this.test = jeu.scene.add.image (63 , 568, "tomeFrench");
                this.test.setScrollFactor(0);
            }
    },
    cssTeacher : function(player,tile)
    {
        this.showMessageBox("Bonjour,\nBienvenue en MMI. Cette,année en integration, \nnous allons apprendre à coder en css. \nLe Css s'utilise en complément du html pour \nsyliser la page internet, apporter des \néléments de décoration.Voici un exemple de code \nCss: 'body{color:blue; background-color:black;}' . ",500,500,"htmlTeacher");
        jeu.tomeCss = true;
        if (jeu.tomeCss == true)
        {
            this.test = jeu.scene.add.image (375 , 568, "tomeCss");
            this.test.setScrollFactor(0);
        }
    },
    basedonneeTeacher : function(player,tile)
    {
        this.showMessageBox("Bonjour,\nBienvenue en MMI.Cette année en programation \nnous allons apprendre a stocker des donnée dans\nune base(de la base de donnée) que  nous \ncréerons nous même. Nous apprendrons également \nle langage SQL et PHP. Exemple de code php:\n'<?php echo '<p>Bonjour le monde</p>'; ?>' ",500,500,"basedonneeTeacher");
        jeu.tomeBaseDonnee = true;
        if (jeu.tomeBaseDonnee == true)
        {
            this.test = jeu.scene.add.image (297 , 568, "tomeBaseDonnee");
            this.test.setScrollFactor(0);
        }
    },
    scienceTeacher : function(player,tile)
    {
        this.showMessageBox("Bonjour,\nBienvenu en MMI. Cette année en science\nnous allons étudier ce qui ce cache derrière\nles formats vidéo et photo.Comment sont elle\ncodé et comment les compresser pour perdre du\npoids.Nous étudierons également l'audio\net les dangers qui en découle...",500,500,"scienceTeacher");
        jeu.tomeScience = true;
        if (jeu.tomeScience == true)
        {
            this.test = jeu.scene.add.image (219 , 568, "tomeScience");
            this.test.setScrollFactor(0);
        }
    },
    audioVisuelTeacher : function(player,tile)
    {
        this.showMessageBox("Bonjour,\nBienvenu en MMI.Cette année en audio-visuel\nnous allons travailler aussi bien en tant que\nspectateur qu'en tant que réalisateur. \nVous étudirez les rouages d'un film et vous en\nréaliserez ! Regarder un maximum de film,\nen faisant bien attention aux détails !",500,500,"audioVisuelTeacher");
        jeu.tomeAudioVisuel = true;
        if (jeu.tomeAudioVisuel == true)
        {
            this.test = jeu.scene.add.image (141 , 568, "tomeAudioVisuel");
            this.test.setScrollFactor(0);
        }
    },
    gererCamera : function(){
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },
    collectGemme : function (player, tile){
        jeu.scene.sound.play("gemmeSound");
        console.log(tile.properties);
        this.genererParticules(tile.getCenterX(), tile.getCenterY());
        this.addScoreGemme(tile.properties.item);
        this.overlapLayer.removeTileAt(tile.x,tile.y).destroy();
        if (jeu.cleArt == true)
        {
            key = jeu.scene.add.image(25 , 534, "cleArt")
            key.setScrollFactor(0);
        }
        if (jeu.cleFrench == true)
        {
            key = jeu.scene.add.image(64 , 534, "cleFrench")
            key.setScrollFactor(0);
        }
        if (jeu.cleEnglish == true)
        {
            key = jeu.scene.add.image(103 , 534, "cleEnglish")
            key.setScrollFactor(0);
        }
        if (jeu.cleAudioVisuel == true)
        {
            key = jeu.scene.add.image(141 , 534, "cleAudioVisuel")
            key.setScrollFactor(0);
        }
        if (jeu.cleMath == true)
        {
            key = jeu.scene.add.image(181 , 534, "cleMath")
            key.setScrollFactor(0);
        }
        if (jeu.cleScience == true)
        {
            key = jeu.scene.add.image(220 , 534, "cleScience")
            key.setScrollFactor(0);
        }
        if (jeu.cleJavaScript == true)
        {
            key = jeu.scene.add.image(259 , 534, "cleJavaScript")
            key.setScrollFactor(0);
        }
        if (jeu.cleBaseDonnee == true)
        {
            key = jeu.scene.add.image(298 , 534, "cleBaseDonnee")
            key.setScrollFactor(0);
        }
        if (jeu.cleHtml == true)
        {
            key = jeu.scene.add.image(337 , 534, "cleHtml")
            key.setScrollFactor(0);
        }
        if (jeu.cleCss == true)
        {
            key = jeu.scene.add.image(376 , 534, "cleCss")
            key.setScrollFactor(0);
        }
        if (jeu.cleReseau == true)
        {
            key = jeu.scene.add.image(415 , 534, "cleReseau")
            key.setScrollFactor(0);
        }
    },
    addScoreGemme : function(item)
    {

        if(item === "cleReseau")
        {
            jeu.cleReseau = true;
        }
        else if(item === "cleArt")
        {
            jeu.cleArt = true;
        }
        else if(item === "cleFrench")
        {
            jeu.cleFrench = true;
        }
        else if(item === "cleEnglish"){
            jeu.cleEnglish = true;
        }
        else if(item === "cleAudioVisuel")
        {
            jeu.cleAudioVisuel = true;
        }
        else if(item === "cleMath")
        {
            jeu.cleMath = true;
        }
        else if(item === "cleScience")
        {
            jeu.cleScience = true;
        }
        else if(item === "cleJavaScript")
        {
            jeu.cleJavaScript = true;
        }  
        else if(item === "cleBaseDonnee")
        {
            jeu.cleBaseDonnee = true;
        }
        else if(item === "cleHtml")
        {
            jeu.cleHtml = true;
        }
        else if(item === "cleCss")
        {
            jeu.cleCss = true;
        }
    },
    genererParticules : function(posX, posY){
        var particules = jeu.scene.add.particles("spark");

        var configParticules = {
            x : posX,
            y : posY,
            speed : 200,
            angle : {min : 180, max : 360},
            lifeSpan : {min : 100, max :300},
            scale : {start : 0.1, end : 0.1},
            blendMode : "ADD"
        }
        var emitter = particules.createEmitter(configParticules);

        jeu.scene.time.delayedCall(300, function(){
            particules.destroy();
        })
    },
    /*killPlayer : function(){
        if(!this.gameOver){
            this.gameOver = true;
            jeu.player.killPlayer();
            jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y,"panel").setScale(5,3);
            var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y+100,"validation").setInteractive();
            restartBouton.on("pointerup", function(){
                jeu.scene.scene.restart();
            });

            var policeTitre = {
                fontSize : "52px",
                color : "#FFFFFF",
                fontFamily : "ZCOOL KuaiLe"
            }
            jeu.scene.add.text (jeu.scene.cameras.main.midPoint.x-200,jeu.scene.cameras.main.midPoint.y-100, "Tu es mort \n Recommencer ?", policeTitre);
        }
    },*/
    showMessageBox(text, w, h, TeacherIs) 
    {
        if (this.msgBox) {
            this.msgBox.destroy(true);
        }

        var msgBox = jeu.scene.add.group();

        //portrait Teacher
        var teacherPor = String ;
         if (TeacherIs == "englishTeacher")
         {
             TeacherPor = "englishTeacher";
         }
         else if(TeacherIs == "htmlTeacher") 
         {
            TeacherPor = "htmlTeacher";
         }
         else if(TeacherIs == "javaScriptTeacher") 
         {
            TeacherPor = "javaScriptTeacher";
         }
         else if(TeacherIs == "basedonneeTeacher") 
         {
            TeacherPor = "javaScriptTeacher";
         }
         else if(TeacherIs == "artTeacher") 
         {
            TeacherPor = "artTeacher";
         }
         else if(TeacherIs == "frenchTeacher") 
         {
            TeacherPor = "englishTeacher";
         }
         else if(TeacherIs == "reseauTeacher") 
         {
            TeacherPor = "reseauTeacher";
         }
         else if(TeacherIs == "audioVisuelTeacher") 
         {
            TeacherPor = "audioVisuelTeacher";
         }
         else if(TeacherIs == "mathTeacher") 
         {
            TeacherPor = "scienceTeacher";
         }
         else if(TeacherIs == "scienceTeacher") 
         {
            TeacherPor = "scienceTeacher";
         }
         else if (TeacherIs == "principalTeacher")
         {
             TeacherPor = "principalTeacher"
         }
         var Teacher = jeu.scene.add.image(460, 380, TeacherPor);
         
        var back = jeu.scene.add.image(750, 500, "dlgBox").setScale(1.3);

        var closeButton = jeu.scene.add.image(980, 530, "speakNextButton").setScale(0.07);

        var text1 = jeu.scene.add.text(510, 460, text);

        back.width = w;
        back.height = h;

        
        msgBox.add(back);
        msgBox.add(closeButton);
        msgBox.add(text1);
        msgBox.add(Teacher);

        closeButton.setInteractive();
        closeButton.on("pointerup", ()=>{
            this.hideBox();
            })
  
        msgBox.x = 500;
        msgBox.y = 200;
        
        this.msgBox = msgBox;
    },
    
    hideBox()
    {
        this.msgBox.destroy(true);
    }
}