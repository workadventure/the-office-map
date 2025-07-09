/// <reference types="@workadventure/iframe-api-typings" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
//import { checkPlayerMaterial, mySound, playRandomSound } from "./footstep";

WA.onInit().then(() => {
  bootstrapExtra().then(() => {
      console.log('Scripting API Extra ready');
  }).catch(e => console.error(e));})

   WA.onInit().then(async () => {
    /*if (!WA.room.hashParameters.bot) {
        WA.player.onPlayerMove(async ({ x, y, moving }) => {
            const material = await checkPlayerMaterial({ x, y });
            console.log(material);

            if (!material) {
                return mySound?.stop();
            }

            if (!moving && !material) {
                return mySound?.stop();
            } else {
                mySound?.stop();
                return playRandomSound(material);
            }
        });
    }*/
}); 
export {};
