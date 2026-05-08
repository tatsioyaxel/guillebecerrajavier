gdjs.MenuPPALCode = {};
gdjs.MenuPPALCode.localVariables = [];
gdjs.MenuPPALCode.idToCallbackMap = new Map();
gdjs.MenuPPALCode.GDNewTextObjects1= [];
gdjs.MenuPPALCode.GDNewTextObjects2= [];
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1= [];
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects2= [];
gdjs.MenuPPALCode.GDRedExplosionObjects1= [];
gdjs.MenuPPALCode.GDRedExplosionObjects2= [];
gdjs.MenuPPALCode.GDDinoObjects1= [];
gdjs.MenuPPALCode.GDDinoObjects2= [];
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects1= [];
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects2= [];
gdjs.MenuPPALCode.GDbloque_9595solidoObjects1= [];
gdjs.MenuPPALCode.GDbloque_9595solidoObjects2= [];
gdjs.MenuPPALCode.GDarribaObjects1= [];
gdjs.MenuPPALCode.GDarribaObjects2= [];
gdjs.MenuPPALCode.GDABAJOObjects1= [];
gdjs.MenuPPALCode.GDABAJOObjects2= [];
gdjs.MenuPPALCode.GDRIGHTObjects1= [];
gdjs.MenuPPALCode.GDRIGHTObjects2= [];
gdjs.MenuPPALCode.GDLEFTObjects1= [];
gdjs.MenuPPALCode.GDLEFTObjects2= [];
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects1= [];
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects2= [];
gdjs.MenuPPALCode.GDHotdog_9595SauceObjects1= [];
gdjs.MenuPPALCode.GDHotdog_9595SauceObjects2= [];
gdjs.MenuPPALCode.GDBronze_9595CoinObjects1= [];
gdjs.MenuPPALCode.GDBronze_9595CoinObjects2= [];
gdjs.MenuPPALCode.GDGold_9595CoinObjects1= [];
gdjs.MenuPPALCode.GDGold_9595CoinObjects2= [];
gdjs.MenuPPALCode.GDtxt_9595monedasObjects1= [];
gdjs.MenuPPALCode.GDtxt_9595monedasObjects2= [];
gdjs.MenuPPALCode.GDAgent_9595MikeObjects1= [];
gdjs.MenuPPALCode.GDAgent_9595MikeObjects2= [];
gdjs.MenuPPALCode.GDPineappleObjects1= [];
gdjs.MenuPPALCode.GDPineappleObjects2= [];
gdjs.MenuPPALCode.GDBulletObjects1= [];
gdjs.MenuPPALCode.GDBulletObjects2= [];
gdjs.MenuPPALCode.GDGreen_9595Grass_95959PatchObjects1= [];
gdjs.MenuPPALCode.GDGreen_9595Grass_95959PatchObjects2= [];
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects1= [];
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects2= [];
gdjs.MenuPPALCode.GDLong_9595side_9595rectangle_9595glassObjects1= [];
gdjs.MenuPPALCode.GDLong_9595side_9595rectangle_9595glassObjects2= [];
gdjs.MenuPPALCode.GDTileset_9595Piece_959514Objects1= [];
gdjs.MenuPPALCode.GDTileset_9595Piece_959514Objects2= [];
gdjs.MenuPPALCode.GDWalking_9595enemyObjects1= [];
gdjs.MenuPPALCode.GDWalking_9595enemyObjects2= [];
gdjs.MenuPPALCode.GDMoe_9595ScottyObjects1= [];
gdjs.MenuPPALCode.GDMoe_9595ScottyObjects2= [];
gdjs.MenuPPALCode.GDOgreObjects1= [];
gdjs.MenuPPALCode.GDOgreObjects2= [];
gdjs.MenuPPALCode.GDSkeletonObjects1= [];
gdjs.MenuPPALCode.GDSkeletonObjects2= [];
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects1= [];
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects2= [];
gdjs.MenuPPALCode.GDDevo_9595the_9595DevilObjects1= [];
gdjs.MenuPPALCode.GDDevo_9595the_9595DevilObjects2= [];
gdjs.MenuPPALCode.GDFlag_9595GreenObjects1= [];
gdjs.MenuPPALCode.GDFlag_9595GreenObjects2= [];
gdjs.MenuPPALCode.GDFlag_9595Green2Objects1= [];
gdjs.MenuPPALCode.GDFlag_9595Green2Objects2= [];
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects1= [];
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects2= [];
gdjs.MenuPPALCode.GDAmmo_95951Objects1= [];
gdjs.MenuPPALCode.GDAmmo_95951Objects2= [];
gdjs.MenuPPALCode.GDCactusObjects1= [];
gdjs.MenuPPALCode.GDCactusObjects2= [];
gdjs.MenuPPALCode.GDLaser_9595SpikesObjects1= [];
gdjs.MenuPPALCode.GDLaser_9595SpikesObjects2= [];
gdjs.MenuPPALCode.GDFlag_9595Green3Objects1= [];
gdjs.MenuPPALCode.GDFlag_9595Green3Objects2= [];
gdjs.MenuPPALCode.GDFlag_9595Green4Objects1= [];
gdjs.MenuPPALCode.GDFlag_9595Green4Objects2= [];
gdjs.MenuPPALCode.GDBlockObjects1= [];
gdjs.MenuPPALCode.GDBlockObjects2= [];
gdjs.MenuPPALCode.GDFlag_9595Green5Objects1= [];
gdjs.MenuPPALCode.GDFlag_9595Green5Objects2= [];


gdjs.MenuPPALCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1[k] = gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena1", true);
}
}

}


};

gdjs.MenuPPALCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuPPALCode.GDNewTextObjects1.length = 0;
gdjs.MenuPPALCode.GDNewTextObjects2.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects1.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects2.length = 0;
gdjs.MenuPPALCode.GDDinoObjects1.length = 0;
gdjs.MenuPPALCode.GDDinoObjects2.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.MenuPPALCode.GDarribaObjects1.length = 0;
gdjs.MenuPPALCode.GDarribaObjects2.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects1.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects2.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects1.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects2.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects1.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects2.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.MenuPPALCode.GDHotdog_9595SauceObjects1.length = 0;
gdjs.MenuPPALCode.GDHotdog_9595SauceObjects2.length = 0;
gdjs.MenuPPALCode.GDBronze_9595CoinObjects1.length = 0;
gdjs.MenuPPALCode.GDBronze_9595CoinObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPALCode.GDAgent_9595MikeObjects1.length = 0;
gdjs.MenuPPALCode.GDAgent_9595MikeObjects2.length = 0;
gdjs.MenuPPALCode.GDPineappleObjects1.length = 0;
gdjs.MenuPPALCode.GDPineappleObjects2.length = 0;
gdjs.MenuPPALCode.GDBulletObjects1.length = 0;
gdjs.MenuPPALCode.GDBulletObjects2.length = 0;
gdjs.MenuPPALCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.MenuPPALCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.MenuPPALCode.GDLong_9595side_9595rectangle_9595glassObjects1.length = 0;
gdjs.MenuPPALCode.GDLong_9595side_9595rectangle_9595glassObjects2.length = 0;
gdjs.MenuPPALCode.GDTileset_9595Piece_959514Objects1.length = 0;
gdjs.MenuPPALCode.GDTileset_9595Piece_959514Objects2.length = 0;
gdjs.MenuPPALCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MenuPPALCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MenuPPALCode.GDMoe_9595ScottyObjects1.length = 0;
gdjs.MenuPPALCode.GDMoe_9595ScottyObjects2.length = 0;
gdjs.MenuPPALCode.GDOgreObjects1.length = 0;
gdjs.MenuPPALCode.GDOgreObjects2.length = 0;
gdjs.MenuPPALCode.GDSkeletonObjects1.length = 0;
gdjs.MenuPPALCode.GDSkeletonObjects2.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.MenuPPALCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.MenuPPALCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595GreenObjects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595GreenObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green2Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green2Objects2.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.MenuPPALCode.GDAmmo_95951Objects1.length = 0;
gdjs.MenuPPALCode.GDAmmo_95951Objects2.length = 0;
gdjs.MenuPPALCode.GDCactusObjects1.length = 0;
gdjs.MenuPPALCode.GDCactusObjects2.length = 0;
gdjs.MenuPPALCode.GDLaser_9595SpikesObjects1.length = 0;
gdjs.MenuPPALCode.GDLaser_9595SpikesObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green3Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green3Objects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green4Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green4Objects2.length = 0;
gdjs.MenuPPALCode.GDBlockObjects1.length = 0;
gdjs.MenuPPALCode.GDBlockObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green5Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green5Objects2.length = 0;

gdjs.MenuPPALCode.eventsList0(runtimeScene);
gdjs.MenuPPALCode.GDNewTextObjects1.length = 0;
gdjs.MenuPPALCode.GDNewTextObjects2.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects1.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects2.length = 0;
gdjs.MenuPPALCode.GDDinoObjects1.length = 0;
gdjs.MenuPPALCode.GDDinoObjects2.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.MenuPPALCode.GDarribaObjects1.length = 0;
gdjs.MenuPPALCode.GDarribaObjects2.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects1.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects2.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects1.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects2.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects1.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects2.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.MenuPPALCode.GDHotdog_9595SauceObjects1.length = 0;
gdjs.MenuPPALCode.GDHotdog_9595SauceObjects2.length = 0;
gdjs.MenuPPALCode.GDBronze_9595CoinObjects1.length = 0;
gdjs.MenuPPALCode.GDBronze_9595CoinObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPALCode.GDAgent_9595MikeObjects1.length = 0;
gdjs.MenuPPALCode.GDAgent_9595MikeObjects2.length = 0;
gdjs.MenuPPALCode.GDPineappleObjects1.length = 0;
gdjs.MenuPPALCode.GDPineappleObjects2.length = 0;
gdjs.MenuPPALCode.GDBulletObjects1.length = 0;
gdjs.MenuPPALCode.GDBulletObjects2.length = 0;
gdjs.MenuPPALCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.MenuPPALCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.MenuPPALCode.GDLong_9595side_9595rectangle_9595glassObjects1.length = 0;
gdjs.MenuPPALCode.GDLong_9595side_9595rectangle_9595glassObjects2.length = 0;
gdjs.MenuPPALCode.GDTileset_9595Piece_959514Objects1.length = 0;
gdjs.MenuPPALCode.GDTileset_9595Piece_959514Objects2.length = 0;
gdjs.MenuPPALCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MenuPPALCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MenuPPALCode.GDMoe_9595ScottyObjects1.length = 0;
gdjs.MenuPPALCode.GDMoe_9595ScottyObjects2.length = 0;
gdjs.MenuPPALCode.GDOgreObjects1.length = 0;
gdjs.MenuPPALCode.GDOgreObjects2.length = 0;
gdjs.MenuPPALCode.GDSkeletonObjects1.length = 0;
gdjs.MenuPPALCode.GDSkeletonObjects2.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.MenuPPALCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.MenuPPALCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595GreenObjects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595GreenObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green2Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green2Objects2.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.MenuPPALCode.GDAmmo_95951Objects1.length = 0;
gdjs.MenuPPALCode.GDAmmo_95951Objects2.length = 0;
gdjs.MenuPPALCode.GDCactusObjects1.length = 0;
gdjs.MenuPPALCode.GDCactusObjects2.length = 0;
gdjs.MenuPPALCode.GDLaser_9595SpikesObjects1.length = 0;
gdjs.MenuPPALCode.GDLaser_9595SpikesObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green3Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green3Objects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green4Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green4Objects2.length = 0;
gdjs.MenuPPALCode.GDBlockObjects1.length = 0;
gdjs.MenuPPALCode.GDBlockObjects2.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green5Objects1.length = 0;
gdjs.MenuPPALCode.GDFlag_9595Green5Objects2.length = 0;


return;

}

gdjs['MenuPPALCode'] = gdjs.MenuPPALCode;
