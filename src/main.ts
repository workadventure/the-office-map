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

    // Add button to redirect user to the website create your own The Office map
    WA.ui.actionBar.addButton({
        id: "create-your-own-office-map",
        label: "Clone 📺",
        toolTip: WA.player.language.indexOf('fr') !== -1 ? "Créer votre propre salon The Office" : "Create your own The Office room",
        isGradient: false,
        callback: () => {
            WA.nav.openTab("https://admin.workadventu.re/landing/en/the-office");
        }
    });
}); 
export {};
