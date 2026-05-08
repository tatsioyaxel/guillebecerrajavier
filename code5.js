gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDGreyButtonWithShadowObjects1= [];
gdjs.GameOverCode.GDGreyButtonWithShadowObjects2= [];
gdjs.GameOverCode.GDDinoObjects1= [];
gdjs.GameOverCode.GDDinoObjects2= [];
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects1= [];
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects2= [];
gdjs.GameOverCode.GDbloque_9595solidoObjects1= [];
gdjs.GameOverCode.GDbloque_9595solidoObjects2= [];
gdjs.GameOverCode.GDarribaObjects1= [];
gdjs.GameOverCode.GDarribaObjects2= [];
gdjs.GameOverCode.GDABAJOObjects1= [];
gdjs.GameOverCode.GDABAJOObjects2= [];
gdjs.GameOverCode.GDRIGHTObjects1= [];
gdjs.GameOverCode.GDRIGHTObjects2= [];
gdjs.GameOverCode.GDLEFTObjects1= [];
gdjs.GameOverCode.GDLEFTObjects2= [];
gdjs.GameOverCode.GDTXT_9595VIDAObjects1= [];
gdjs.GameOverCode.GDTXT_9595VIDAObjects2= [];
gdjs.GameOverCode.GDHotdog_9595SauceObjects1= [];
gdjs.GameOverCode.GDHotdog_9595SauceObjects2= [];
gdjs.GameOverCode.GDBronze_9595CoinObjects1= [];
gdjs.GameOverCode.GDBronze_9595CoinObjects2= [];
gdjs.GameOverCode.GDGold_9595CoinObjects1= [];
gdjs.GameOverCode.GDGold_9595CoinObjects2= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects1= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects2= [];
gdjs.GameOverCode.GDAgent_9595MikeObjects1= [];
gdjs.GameOverCode.GDAgent_9595MikeObjects2= [];
gdjs.GameOverCode.GDPineappleObjects1= [];
gdjs.GameOverCode.GDPineappleObjects2= [];
gdjs.GameOverCode.GDBulletObjects1= [];
gdjs.GameOverCode.GDBulletObjects2= [];
gdjs.GameOverCode.GDGreen_9595Grass_95959PatchObjects1= [];
gdjs.GameOverCode.GDGreen_9595Grass_95959PatchObjects2= [];
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects1= [];
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects2= [];
gdjs.GameOverCode.GDLong_9595side_9595rectangle_9595glassObjects1= [];
gdjs.GameOverCode.GDLong_9595side_9595rectangle_9595glassObjects2= [];
gdjs.GameOverCode.GDTileset_9595Piece_959514Objects1= [];
gdjs.GameOverCode.GDTileset_9595Piece_959514Objects2= [];
gdjs.GameOverCode.GDWalking_9595enemyObjects1= [];
gdjs.GameOverCode.GDWalking_9595enemyObjects2= [];
gdjs.GameOverCode.GDMoe_9595ScottyObjects1= [];
gdjs.GameOverCode.GDMoe_9595ScottyObjects2= [];
gdjs.GameOverCode.GDOgreObjects1= [];
gdjs.GameOverCode.GDOgreObjects2= [];
gdjs.GameOverCode.GDSkeletonObjects1= [];
gdjs.GameOverCode.GDSkeletonObjects2= [];
gdjs.GameOverCode.GDSkullGameOverDialogObjects1= [];
gdjs.GameOverCode.GDSkullGameOverDialogObjects2= [];
gdjs.GameOverCode.GDDevo_9595the_9595DevilObjects1= [];
gdjs.GameOverCode.GDDevo_9595the_9595DevilObjects2= [];
gdjs.GameOverCode.GDFlag_9595GreenObjects1= [];
gdjs.GameOverCode.GDFlag_9595GreenObjects2= [];
gdjs.GameOverCode.GDFlag_9595Green2Objects1= [];
gdjs.GameOverCode.GDFlag_9595Green2Objects2= [];
gdjs.GameOverCode.GDOrc_9595WarriorObjects1= [];
gdjs.GameOverCode.GDOrc_9595WarriorObjects2= [];
gdjs.GameOverCode.GDAmmo_95951Objects1= [];
gdjs.GameOverCode.GDAmmo_95951Objects2= [];
gdjs.GameOverCode.GDCactusObjects1= [];
gdjs.GameOverCode.GDCactusObjects2= [];
gdjs.GameOverCode.GDLaser_9595SpikesObjects1= [];
gdjs.GameOverCode.GDLaser_9595SpikesObjects2= [];
gdjs.GameOverCode.GDFlag_9595Green3Objects1= [];
gdjs.GameOverCode.GDFlag_9595Green3Objects2= [];
gdjs.GameOverCode.GDFlag_9595Green4Objects1= [];
gdjs.GameOverCode.GDFlag_9595Green4Objects2= [];
gdjs.GameOverCode.GDBlockObjects1= [];
gdjs.GameOverCode.GDBlockObjects2= [];
gdjs.GameOverCode.GDFlag_9595Green5Objects1= [];
gdjs.GameOverCode.GDFlag_9595Green5Objects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.GameOverCode.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGreyButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDGreyButtonWithShadowObjects1[k] = gdjs.GameOverCode.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPPAL", false);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.GameOverCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.GameOverCode.GDDinoObjects1.length = 0;
gdjs.GameOverCode.GDDinoObjects2.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GameOverCode.GDarribaObjects1.length = 0;
gdjs.GameOverCode.GDarribaObjects2.length = 0;
gdjs.GameOverCode.GDABAJOObjects1.length = 0;
gdjs.GameOverCode.GDABAJOObjects2.length = 0;
gdjs.GameOverCode.GDRIGHTObjects1.length = 0;
gdjs.GameOverCode.GDRIGHTObjects2.length = 0;
gdjs.GameOverCode.GDLEFTObjects1.length = 0;
gdjs.GameOverCode.GDLEFTObjects2.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GameOverCode.GDHotdog_9595SauceObjects1.length = 0;
gdjs.GameOverCode.GDHotdog_9595SauceObjects2.length = 0;
gdjs.GameOverCode.GDBronze_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDBronze_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDAgent_9595MikeObjects1.length = 0;
gdjs.GameOverCode.GDAgent_9595MikeObjects2.length = 0;
gdjs.GameOverCode.GDPineappleObjects1.length = 0;
gdjs.GameOverCode.GDPineappleObjects2.length = 0;
gdjs.GameOverCode.GDBulletObjects1.length = 0;
gdjs.GameOverCode.GDBulletObjects2.length = 0;
gdjs.GameOverCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.GameOverCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GameOverCode.GDLong_9595side_9595rectangle_9595glassObjects1.length = 0;
gdjs.GameOverCode.GDLong_9595side_9595rectangle_9595glassObjects2.length = 0;
gdjs.GameOverCode.GDTileset_9595Piece_959514Objects1.length = 0;
gdjs.GameOverCode.GDTileset_9595Piece_959514Objects2.length = 0;
gdjs.GameOverCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GameOverCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GameOverCode.GDMoe_9595ScottyObjects1.length = 0;
gdjs.GameOverCode.GDMoe_9595ScottyObjects2.length = 0;
gdjs.GameOverCode.GDOgreObjects1.length = 0;
gdjs.GameOverCode.GDOgreObjects2.length = 0;
gdjs.GameOverCode.GDSkeletonObjects1.length = 0;
gdjs.GameOverCode.GDSkeletonObjects2.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameOverCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.GameOverCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595GreenObjects1.length = 0;
gdjs.GameOverCode.GDFlag_9595GreenObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green2Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green2Objects2.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GameOverCode.GDAmmo_95951Objects1.length = 0;
gdjs.GameOverCode.GDAmmo_95951Objects2.length = 0;
gdjs.GameOverCode.GDCactusObjects1.length = 0;
gdjs.GameOverCode.GDCactusObjects2.length = 0;
gdjs.GameOverCode.GDLaser_9595SpikesObjects1.length = 0;
gdjs.GameOverCode.GDLaser_9595SpikesObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green3Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green3Objects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green4Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green4Objects2.length = 0;
gdjs.GameOverCode.GDBlockObjects1.length = 0;
gdjs.GameOverCode.GDBlockObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green5Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green5Objects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.GameOverCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.GameOverCode.GDDinoObjects1.length = 0;
gdjs.GameOverCode.GDDinoObjects2.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GameOverCode.GDarribaObjects1.length = 0;
gdjs.GameOverCode.GDarribaObjects2.length = 0;
gdjs.GameOverCode.GDABAJOObjects1.length = 0;
gdjs.GameOverCode.GDABAJOObjects2.length = 0;
gdjs.GameOverCode.GDRIGHTObjects1.length = 0;
gdjs.GameOverCode.GDRIGHTObjects2.length = 0;
gdjs.GameOverCode.GDLEFTObjects1.length = 0;
gdjs.GameOverCode.GDLEFTObjects2.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GameOverCode.GDHotdog_9595SauceObjects1.length = 0;
gdjs.GameOverCode.GDHotdog_9595SauceObjects2.length = 0;
gdjs.GameOverCode.GDBronze_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDBronze_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDAgent_9595MikeObjects1.length = 0;
gdjs.GameOverCode.GDAgent_9595MikeObjects2.length = 0;
gdjs.GameOverCode.GDPineappleObjects1.length = 0;
gdjs.GameOverCode.GDPineappleObjects2.length = 0;
gdjs.GameOverCode.GDBulletObjects1.length = 0;
gdjs.GameOverCode.GDBulletObjects2.length = 0;
gdjs.GameOverCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.GameOverCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GameOverCode.GDLong_9595side_9595rectangle_9595glassObjects1.length = 0;
gdjs.GameOverCode.GDLong_9595side_9595rectangle_9595glassObjects2.length = 0;
gdjs.GameOverCode.GDTileset_9595Piece_959514Objects1.length = 0;
gdjs.GameOverCode.GDTileset_9595Piece_959514Objects2.length = 0;
gdjs.GameOverCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GameOverCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GameOverCode.GDMoe_9595ScottyObjects1.length = 0;
gdjs.GameOverCode.GDMoe_9595ScottyObjects2.length = 0;
gdjs.GameOverCode.GDOgreObjects1.length = 0;
gdjs.GameOverCode.GDOgreObjects2.length = 0;
gdjs.GameOverCode.GDSkeletonObjects1.length = 0;
gdjs.GameOverCode.GDSkeletonObjects2.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameOverCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.GameOverCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595GreenObjects1.length = 0;
gdjs.GameOverCode.GDFlag_9595GreenObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green2Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green2Objects2.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GameOverCode.GDAmmo_95951Objects1.length = 0;
gdjs.GameOverCode.GDAmmo_95951Objects2.length = 0;
gdjs.GameOverCode.GDCactusObjects1.length = 0;
gdjs.GameOverCode.GDCactusObjects2.length = 0;
gdjs.GameOverCode.GDLaser_9595SpikesObjects1.length = 0;
gdjs.GameOverCode.GDLaser_9595SpikesObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green3Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green3Objects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green4Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green4Objects2.length = 0;
gdjs.GameOverCode.GDBlockObjects1.length = 0;
gdjs.GameOverCode.GDBlockObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595Green5Objects1.length = 0;
gdjs.GameOverCode.GDFlag_9595Green5Objects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
