var config = {
    type : Phaser.AUTO,
    backgroundColor : "black",
    width : 800,
    height : 600,
    scene : {
        preload : preload,
        create : create,
        update : update
    },
    physics : {
        default : "arcade",
        arcade : {
        gravity : {y : 500}
        }
    }
}

const game = new Phaser.Game(config);
var sexe;
var jeu = {
    scene : null,
    world : world,
    player : player,
    cursor : null,
    level: "levelHub",
    cleReseau: false,
    cleArt:false,
    cleFrench:false,
    cleEnglish:false,
    cleAudioVisuel: false,
    cleMath: false,
    cleScience: false,
    cleJavaScript: false,
    cleBaseDonnee: false,
    cleHtml: false,
    cleCss: false,
    cleFinal: false,
    tomeReseau: false,
    tomeArt: false,
    tomeFrench: false,
    tomeEnglish: false,
    tomeAudioVisuel: false,
    tomeMath: false,
    tomeScience: false,
    tomeJavaScript: false,
    tomeBaseDonnee: false,
    tomeHtml: false,
    tomeCss: false,
    debutJeu: true,
    optionMenu: false,
    sexe: false,
    cheat: false,
    menuAbout: true,
}


function preload()
    {
        jeu.scene = this;
        jeu.scene.load.image("tiles","assets/images/tilesheet.png");
        jeu.scene.load.tilemapTiledJSON("levelHub","assets/json/LevelHub.json");
        jeu.scene.load.tilemapTiledJSON("classRoomAnglais","assets/json/classRoomAnglais.json");
        jeu.scene.load.tilemapTiledJSON("classRoomArt","assets/json/classRoomArt.json");
        jeu.scene.load.tilemapTiledJSON("classRoomFrench","assets/json/classRoomFrench.json");
        jeu.scene.load.tilemapTiledJSON("classRoomAudioVisuel","assets/json/classRoomAudioVisuel.json");
        jeu.scene.load.tilemapTiledJSON("classRoomJavaScript","assets/json/classRoomJavaScript.json");
        jeu.scene.load.tilemapTiledJSON("classRoomBaseDonnee","assets/json/classRoomBaseDonnee.json");
        jeu.scene.load.tilemapTiledJSON("classRoomMath","assets/json/classRoomMath.json");
        jeu.scene.load.tilemapTiledJSON("classRoomScience","assets/json/classRoomScience.json");
        jeu.scene.load.tilemapTiledJSON("classRoomHtml","assets/json/classRoomHtml.json");
        jeu.scene.load.tilemapTiledJSON("classRoomCss","assets/json/classRoomCss.json");
        jeu.scene.load.tilemapTiledJSON("classRoomReseau","assets/json/classRoomReseau.json");
        jeu.scene.load.tilemapTiledJSON("finalLevel","assets/json/finalLvl.json");
        jeu.scene.load.atlas("player","assets/images/spritesheet643.png","assets/json/sprites643.json");
        jeu.scene.load.image("spark","assets/images/particle.png");
        jeu.scene.load.audio("gemmeSound","assets/sounds/gemmeSound.ogg");
        jeu.scene.load.image("speakNextButton","assets/images/ui/closeButton.png");
        jeu.scene.load.image("dlgBox","assets/images/ui/dlgbox.png");
        jeu.scene.load.image("englishTeacher","assets/images/englishFace.png");
        jeu.scene.load.image("frenchTeacher","assets/images/englishFace.png");
        jeu.scene.load.image("htmlTeacher","assets/images/integrationFace.png");
        jeu.scene.load.image("cssTeacher","assets/images/integrationFace.png");
        jeu.scene.load.image("artTeacher","assets/images/artFace.png");
        jeu.scene.load.image("audioVisuelTeacher","assets/images/audioVisuelFace.png");
        jeu.scene.load.image("principalTeacher","assets/images/principalFace.png");
        jeu.scene.load.image("reseauTeacher","assets/images/reseauFace.png");
        jeu.scene.load.image("scienceTeacher","assets/images/scienceFace.png");
        jeu.scene.load.image("javaScriptTeacher","assets/images/programationFace.png");
        jeu.scene.load.image("emptyTome","assets/images/emptyTomeHUD.png");
        jeu.scene.load.image("tomeArt","assets/images/tomeArt.png");
        jeu.scene.load.image("tomeFrench","assets/images/tomeFrench.png");
        jeu.scene.load.image("tomeEnglish","assets/images/tomeEnglish.png");
        jeu.scene.load.image("tomeAudioVisuel","assets/images/tomeAudioVisuel.png");
        jeu.scene.load.image("tomeMath","assets/images/tomeMath.png");
        jeu.scene.load.image("tomeScience","assets/images/tomeScience.png");
        jeu.scene.load.image("tomeJavaScript","assets/images/tomeJavaScript.png");
        jeu.scene.load.image("tomeBaseDonnee","assets/images/tomeBaseDonnee.png");
        jeu.scene.load.image("tomeHtml","assets/images/tomeHtml.png");
        jeu.scene.load.image("tomeCss","assets/images/tomeCss.png");
        jeu.scene.load.image("tomeReseau","assets/images/tomeReseau.png");
        jeu.scene.load.image("emptyHUD","assets/images/emptyHUD.png");
        jeu.scene.load.image("cleArt","assets/images/cleArt.png");
        jeu.scene.load.image("cleFrench","assets/images/cleFrench.png");
        jeu.scene.load.image("cleEnglish","assets/images/cleEnglish.png");
        jeu.scene.load.image("cleAudioVisuel","assets/images/cleAudioVisuel.png");
        jeu.scene.load.image("cleMath","assets/images/cleMath.png");
        jeu.scene.load.image("cleScience","assets/images/cleScience.png");
        jeu.scene.load.image("cleJavaScript","assets/images/cleJavaScript.png");
        jeu.scene.load.image("cleBaseDonnee","assets/images/cleBaseDonnee.png");
        jeu.scene.load.image("cleHtml","assets/images/cleHtml.png");
        jeu.scene.load.image("cleCss","assets/images/cleCss.png");
        jeu.scene.load.image("cleReseau","assets/images/cleReseau.png");
        jeu.scene.load.image("principalTestHUD","assets/images/principalTestHUD.png");
        jeu.scene.load.image("artJob","assets/images/artJob.png");
        jeu.scene.load.image("webJob","assets/images/webJob.png");
        jeu.scene.load.image("audioVisuelJob","assets/images/audioVisuelJob.png");
        jeu.scene.load.image("reseauJob","assets/images/reseauJob.png");
        jeu.scene.load.image("programmationJob","assets/images/programmationJob.png");
        jeu.scene.load.image("menuHUD","assets/images/menuHUD.png");
        jeu.scene.load.image("playBtn","assets/images/playBtn.png");
        jeu.scene.load.image("optBtn","assets/images/optBtn.png");
        jeu.scene.load.image("abtBtn","assets/images/abtBtn.png");
        jeu.scene.load.image("optoff","assets/images/titleoptoff.png");
        jeu.scene.load.image("opton","assets/images/titleopton.png");
        jeu.scene.load.image("optBack","assets/images/titleoptbg.png");
        jeu.scene.load.image("ok","assets/images/OK.png");
        jeu.scene.load.image("menu","assets/images/menu.png");
        jeu.scene.load.image("cheatOff","assets/images/cheatModOptOff.png");
        jeu.scene.load.image("cheatOn","assets/images/cheatModOpt.png");
        jeu.world.gameOver = false;

        
    }


function create()
    {
            {
                jeu.world.initialiserWorld();    
                jeu.player.initialiserPlayer();           
                jeu.player.generatePlayerAnimations();
                jeu.world.gererCollider();
                jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();
                jeu.world.gererCamera();
            }
    }
 
function update(time, delta)
    {
        {
            jeu.player.gererDeplacement();
            ajusterTailleEcran();
            jeu.world.gererCollider;
        }                 
    }

 


function ajusterTailleEcran(){
    var canvas = document.querySelector("canvas");

    var fenetreWidth = window.innerWidth;
    var fenetreHeight = window.innerHeight;
    var fenetreRatio = fenetreWidth / fenetreHeight;

    var jeuRatio = config.width/config.height;

    if(fenetreRatio < jeuRatio){
        canvas.style.width = fenetreWidth + "px";
        canvas.style.height = (fenetreWidth/jeuRatio) +"px";
    } else {
        canvas.style.width = (fenetreHeight * jeuRatio) + "px";
        canvas.style.height = fenetreHeight + "px";
    }
}
