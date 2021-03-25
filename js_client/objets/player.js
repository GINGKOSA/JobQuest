        var player = {
        aPlayer : null,
        isJumping : false,
        isAlive : true,
    
        initialiserPlayer : function()
        {
            if (jeu.sexe == true)
            {
                    this.aPlayer = jeu.scene.physics.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"player","sprite10");
                    console.log("vrai valeur")
            }
            else
            {
                this.aPlayer = jeu.scene.physics.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"player","sprite1");
            }
            this.aPlayer.setCollideWorldBounds(true);
            this.aPlayer.setOrigin(0.5,1);
        },
        generatePlayerAnimations : function()
           
            {
                jeu.scene.anims.create (
                    {
                        key : "playerGirlWalkRight",
                        frames : game.anims.generateFrameNames("player",{prefix:"sprite",start:6,end:9}),
                        frameRate : 10,
                        repeat : -1
                    });
                jeu.scene.anims.create (
                        {
                            key : "playerBoyWalkRight",
                            frames : game.anims.generateFrameNames("player",{prefix:"sprite",start:15,end:18}),
                            frameRate : 10,
                            repeat : -1
                        });
                jeu.scene.anims.create (
                    {
                        key : "playerGirlWalkLeft",
                        frames : game.anims.generateFrameNames("player",{prefix:"sprite",start:2,end:5}),
                        frameRate : 10,
                        repeat : -1
                    });
                jeu.scene.anims.create (
                    {
                        key : "playerBoyWalkLeft",
                        frames : game.anims.generateFrameNames("player",{prefix:"sprite",start:11,end:14}),
                        frameRate : 10,
                        repeat : -1
                    });
                jeu.scene.anims.create (
                    {
                        key : "playerGirlIdle",
                        frames : [{key : "player",frame : "sprite1"}],
                        frameRate : 1,
                        repeat : -1
                    });
                jeu.scene.anims.create (
                    {
                        key : "playerBoyIdle",
                        frames : [{key : "player",frame : "sprite10"}],
                        frameRate : 2,
                        repeat : -1
                    });
            },
    
        gererDeplacement : function()
            {
                
                    if(this.isAlive)
                        {
                            if(jeu.cursor.left.isDown)
                                {
                                    this.aPlayer.setVelocityX(-200);
                                } 
                            else if(jeu.cursor.right.isDown) 
                                {
                                    this.aPlayer.setVelocityX(200);
                                }
                            else 
                                {
                                    this.aPlayer.setVelocityX(0);
                                }
                    
                            if(jeu.cursor.up.isDown && this.aPlayer.body.onFloor()) 
                                {
                                    this.aPlayer.setVelocityY(-450);
                                }
            
                            if(this.aPlayer.body.onFloor())
                                {
                                    this.isJumping = false;
                                } 
                            else 
                                {
                                    this.isJumping = true;
                                }
                            if (jeu.sexe == false)
                            {
                                if(this.isJumping)
                                {
                                    if (jeu.cursor.left.isDown)
                                        {
                                            this.aPlayer.setTexture("player","sprite2");
                                        }
                                    else if (jeu.cursor.right.isDown)
                                        {
                                            this.aPlayer.setTexture("player","sprite6");
                                        }
                                    else
                                        {
                                            this.aPlayer.setTexture("player","sprite1");
                                        }
        
                                } 
                            else 
                                {
                                    if(jeu.cursor.left.isDown)
                                        {
                                            this.aPlayer.anims.play("playerGirlWalkLeft",true);
                                        } 
                                    else if(jeu.cursor.right.isDown) 
                                        {
                                            this.aPlayer.anims.play("playerGirlWalkRight",true);
                                        }
                                    else 
                                        {
                                            this.aPlayer.anims.play("playerGirlIdle",true);
                                        }
                                }
                            
                            }
                            else
                            {
                                if(this.isJumping)
                                {
                                    if (jeu.cursor.left.isDown)
                                        {
                                            this.aPlayer.setTexture("player","sprite11");
                                        }
                                    else if (jeu.cursor.right.isDown)
                                        {
                                            this.aPlayer.setTexture("player","sprite15");
                                        }
                                    else
                                        {
                                            this.aPlayer.setTexture("player","sprite10");
                                        }
        
                                } 
                            else 
                                {
                                    if(jeu.cursor.left.isDown)
                                        {
                                            this.aPlayer.anims.play("playerBoyWalkLeft",true);
                                        } 
                                    else if(jeu.cursor.right.isDown) 
                                        {
                                            this.aPlayer.anims.play("playerBoyWalkRight",true);
                                        }
                                    else 
                                        {
                                            this.aPlayer.anims.play("playerBoyIdle",true);
                                        }
                                }
                            }
                        } 
                    else 
                        {
                            this.aPlayer.setVelocityX(0);
                        }
        },
    
        killPlayer : function(){
            this.aPlayer.setTexture("player","sprite1");
            this.isAlive = false;
        }

    }

