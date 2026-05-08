gdjs.GANADORCode = {};
gdjs.GANADORCode.localVariables = [];
gdjs.GANADORCode.idToCallbackMap = new Map();
gdjs.GANADORCode.GDNewTextObjects1= [];
gdjs.GANADORCode.GDNewTextObjects2= [];
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.GANADORCode.GDDinoObjects1= [];
gdjs.GANADORCode.GDDinoObjects2= [];
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects1= [];
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects2= [];
gdjs.GANADORCode.GDbloque_9595solidoObjects1= [];
gdjs.GANADORCode.GDbloque_9595solidoObjects2= [];
gdjs.GANADORCode.GDarribaObjects1= [];
gdjs.GANADORCode.GDarribaObjects2= [];
gdjs.GANADORCode.GDABAJOObjects1= [];
gdjs.GANADORCode.GDABAJOObjects2= [];
gdjs.GANADORCode.GDRIGHTObjects1= [];
gdjs.GANADORCode.GDRIGHTObjects2= [];
gdjs.GANADORCode.GDLEFTObjects1= [];
gdjs.GANADORCode.GDLEFTObjects2= [];
gdjs.GANADORCode.GDTXT_9595VIDAObjects1= [];
gdjs.GANADORCode.GDTXT_9595VIDAObjects2= [];
gdjs.GANADORCode.GDHotdog_9595SauceObjects1= [];
gdjs.GANADORCode.GDHotdog_9595SauceObjects2= [];
gdjs.GANADORCode.GDBronze_9595CoinObjects1= [];
gdjs.GANADORCode.GDBronze_9595CoinObjects2= [];
gdjs.GANADORCode.GDGold_9595CoinObjects1= [];
gdjs.GANADORCode.GDGold_9595CoinObjects2= [];
gdjs.GANADORCode.GDtxt_9595monedasObjects1= [];
gdjs.GANADORCode.GDtxt_9595monedasObjects2= [];
gdjs.GANADORCode.GDAgent_9595MikeObjects1= [];
gdjs.GANADORCode.GDAgent_9595MikeObjects2= [];
gdjs.GANADORCode.GDPineappleObjects1= [];
gdjs.GANADORCode.GDPineappleObjects2= [];
gdjs.GANADORCode.GDBulletObjects1= [];
gdjs.GANADORCode.GDBulletObjects2= [];
gdjs.GANADORCode.GDGreen_9595Grass_95959PatchObjects1= [];
gdjs.GANADORCode.GDGreen_9595Grass_95959PatchObjects2= [];
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects1= [];
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects2= [];
gdjs.GANADORCode.GDLong_9595side_9595rectangle_9595glassObjects1= [];
gdjs.GANADORCode.GDLong_9595side_9595rectangle_9595glassObjects2= [];
gdjs.GANADORCode.GDTileset_9595Piece_959514Objects1= [];
gdjs.GANADORCode.GDTileset_9595Piece_959514Objects2= [];
gdjs.GANADORCode.GDWalking_9595enemyObjects1= [];
gdjs.GANADORCode.GDWalking_9595enemyObjects2= [];
gdjs.GANADORCode.GDMoe_9595ScottyObjects1= [];
gdjs.GANADORCode.GDMoe_9595ScottyObjects2= [];
gdjs.GANADORCode.GDOgreObjects1= [];
gdjs.GANADORCode.GDOgreObjects2= [];
gdjs.GANADORCode.GDSkeletonObjects1= [];
gdjs.GANADORCode.GDSkeletonObjects2= [];
gdjs.GANADORCode.GDSkullGameOverDialogObjects1= [];
gdjs.GANADORCode.GDSkullGameOverDialogObjects2= [];
gdjs.GANADORCode.GDDevo_9595the_9595DevilObjects1= [];
gdjs.GANADORCode.GDDevo_9595the_9595DevilObjects2= [];
gdjs.GANADORCode.GDFlag_9595GreenObjects1= [];
gdjs.GANADORCode.GDFlag_9595GreenObjects2= [];
gdjs.GANADORCode.GDFlag_9595Green2Objects1= [];
gdjs.GANADORCode.GDFlag_9595Green2Objects2= [];
gdjs.GANADORCode.GDOrc_9595WarriorObjects1= [];
gdjs.GANADORCode.GDOrc_9595WarriorObjects2= [];
gdjs.GANADORCode.GDAmmo_95951Objects1= [];
gdjs.GANADORCode.GDAmmo_95951Objects2= [];
gdjs.GANADORCode.GDCactusObjects1= [];
gdjs.GANADORCode.GDCactusObjects2= [];
gdjs.GANADORCode.GDLaser_9595SpikesObjects1= [];
gdjs.GANADORCode.GDLaser_9595SpikesObjects2= [];
gdjs.GANADORCode.GDFlag_9595Green3Objects1= [];
gdjs.GANADORCode.GDFlag_9595Green3Objects2= [];
gdjs.GANADORCode.GDFlag_9595Green4Objects1= [];
gdjs.GANADORCode.GDFlag_9595Green4Objects2= [];
gdjs.GANADORCode.GDBlockObjects1= [];
gdjs.GANADORCode.GDBlockObjects2= [];
gdjs.GANADORCode.GDFlag_9595Green5Objects1= [];
gdjs.GANADORCode.GDFlag_9595Green5Objects2= [];


gdjs.GANADORCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPPAL", false);
}
}

}


};

gdjs.GANADORCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GANADORCode.GDNewTextObjects1.length = 0;
gdjs.GANADORCode.GDNewTextObjects2.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.GANADORCode.GDDinoObjects1.length = 0;
gdjs.GANADORCode.GDDinoObjects2.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GANADORCode.GDarribaObjects1.length = 0;
gdjs.GANADORCode.GDarribaObjects2.length = 0;
gdjs.GANADORCode.GDABAJOObjects1.length = 0;
gdjs.GANADORCode.GDABAJOObjects2.length = 0;
gdjs.GANADORCode.GDRIGHTObjects1.length = 0;
gdjs.GANADORCode.GDRIGHTObjects2.length = 0;
gdjs.GANADORCode.GDLEFTObjects1.length = 0;
gdjs.GANADORCode.GDLEFTObjects2.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GANADORCode.GDHotdog_9595SauceObjects1.length = 0;
gdjs.GANADORCode.GDHotdog_9595SauceObjects2.length = 0;
gdjs.GANADORCode.GDBronze_9595CoinObjects1.length = 0;
gdjs.GANADORCode.GDBronze_9595CoinObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GANADORCode.GDAgent_9595MikeObjects1.length = 0;
gdjs.GANADORCode.GDAgent_9595MikeObjects2.length = 0;
gdjs.GANADORCode.GDPineappleObjects1.length = 0;
gdjs.GANADORCode.GDPineappleObjects2.length = 0;
gdjs.GANADORCode.GDBulletObjects1.length = 0;
gdjs.GANADORCode.GDBulletObjects2.length = 0;
gdjs.GANADORCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.GANADORCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GANADORCode.GDLong_9595side_9595rectangle_9595glassObjects1.length = 0;
gdjs.GANADORCode.GDLong_9595side_9595rectangle_9595glassObjects2.length = 0;
gdjs.GANADORCode.GDTileset_9595Piece_959514Objects1.length = 0;
gdjs.GANADORCode.GDTileset_9595Piece_959514Objects2.length = 0;
gdjs.GANADORCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GANADORCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GANADORCode.GDMoe_9595ScottyObjects1.length = 0;
gdjs.GANADORCode.GDMoe_9595ScottyObjects2.length = 0;
gdjs.GANADORCode.GDOgreObjects1.length = 0;
gdjs.GANADORCode.GDOgreObjects2.length = 0;
gdjs.GANADORCode.GDSkeletonObjects1.length = 0;
gdjs.GANADORCode.GDSkeletonObjects2.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GANADORCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.GANADORCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595GreenObjects1.length = 0;
gdjs.GANADORCode.GDFlag_9595GreenObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green2Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green2Objects2.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GANADORCode.GDAmmo_95951Objects1.length = 0;
gdjs.GANADORCode.GDAmmo_95951Objects2.length = 0;
gdjs.GANADORCode.GDCactusObjects1.length = 0;
gdjs.GANADORCode.GDCactusObjects2.length = 0;
gdjs.GANADORCode.GDLaser_9595SpikesObjects1.length = 0;
gdjs.GANADORCode.GDLaser_9595SpikesObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green3Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green3Objects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green4Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green4Objects2.length = 0;
gdjs.GANADORCode.GDBlockObjects1.length = 0;
gdjs.GANADORCode.GDBlockObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green5Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green5Objects2.length = 0;

gdjs.GANADORCode.eventsList0(runtimeScene);
gdjs.GANADORCode.GDNewTextObjects1.length = 0;
gdjs.GANADORCode.GDNewTextObjects2.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.GANADORCode.GDDinoObjects1.length = 0;
gdjs.GANADORCode.GDDinoObjects2.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GANADORCode.GDarribaObjects1.length = 0;
gdjs.GANADORCode.GDarribaObjects2.length = 0;
gdjs.GANADORCode.GDABAJOObjects1.length = 0;
gdjs.GANADORCode.GDABAJOObjects2.length = 0;
gdjs.GANADORCode.GDRIGHTObjects1.length = 0;
gdjs.GANADORCode.GDRIGHTObjects2.length = 0;
gdjs.GANADORCode.GDLEFTObjects1.length = 0;
gdjs.GANADORCode.GDLEFTObjects2.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GANADORCode.GDHotdog_9595SauceObjects1.length = 0;
gdjs.GANADORCode.GDHotdog_9595SauceObjects2.length = 0;
gdjs.GANADORCode.GDBronze_9595CoinObjects1.length = 0;
gdjs.GANADORCode.GDBronze_9595CoinObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GANADORCode.GDAgent_9595MikeObjects1.length = 0;
gdjs.GANADORCode.GDAgent_9595MikeObjects2.length = 0;
gdjs.GANADORCode.GDPineappleObjects1.length = 0;
gdjs.GANADORCode.GDPineappleObjects2.length = 0;
gdjs.GANADORCode.GDBulletObjects1.length = 0;
gdjs.GANADORCode.GDBulletObjects2.length = 0;
gdjs.GANADORCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.GANADORCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GANADORCode.GDLong_9595side_9595rectangle_9595glassObjects1.length = 0;
gdjs.GANADORCode.GDLong_9595side_9595rectangle_9595glassObjects2.length = 0;
gdjs.GANADORCode.GDTileset_9595Piece_959514Objects1.length = 0;
gdjs.GANADORCode.GDTileset_9595Piece_959514Objects2.length = 0;
gdjs.GANADORCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GANADORCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GANADORCode.GDMoe_9595ScottyObjects1.length = 0;
gdjs.GANADORCode.GDMoe_9595ScottyObjects2.length = 0;
gdjs.GANADORCode.GDOgreObjects1.length = 0;
gdjs.GANADORCode.GDOgreObjects2.length = 0;
gdjs.GANADORCode.GDSkeletonObjects1.length = 0;
gdjs.GANADORCode.GDSkeletonObjects2.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GANADORCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.GANADORCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595GreenObjects1.length = 0;
gdjs.GANADORCode.GDFlag_9595GreenObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green2Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green2Objects2.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GANADORCode.GDAmmo_95951Objects1.length = 0;
gdjs.GANADORCode.GDAmmo_95951Objects2.length = 0;
gdjs.GANADORCode.GDCactusObjects1.length = 0;
gdjs.GANADORCode.GDCactusObjects2.length = 0;
gdjs.GANADORCode.GDLaser_9595SpikesObjects1.length = 0;
gdjs.GANADORCode.GDLaser_9595SpikesObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green3Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green3Objects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green4Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green4Objects2.length = 0;
gdjs.GANADORCode.GDBlockObjects1.length = 0;
gdjs.GANADORCode.GDBlockObjects2.length = 0;
gdjs.GANADORCode.GDFlag_9595Green5Objects1.length = 0;
gdjs.GANADORCode.GDFlag_9595Green5Objects2.length = 0;


return;

}

gdjs['GANADORCode'] = gdjs.GANADORCode;
