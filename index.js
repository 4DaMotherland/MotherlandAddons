let playerX = Player.getX();
let playerY = Player.getY();
let playerZ = Player.getZ();

let toggle = false
register("command", () => {
    playerX = Player.getX();
    playerY = Player.getY();
    playerZ = Player.getZ();
    toggle = !toggle
    ChatLib.chat(`Toggle has been set to ${toggle}`)

    }).setName("toggle")


register("renderWorld", myWorldRender);

function myWorldRender() {
    if(!toggle) return
    Tessellator.drawString("Location #1", playerX + 15, playerY - 4,playerZ - 14); 
    Tessellator.drawString("Location #2", playerX - 13 , playerY - 10 ,playerZ - 16 ); 
    Tessellator.drawString("Location #3", playerX - 12, playerY - 21, playerZ - 27); 
    Tessellator.drawString("Location #4", playerX - 12, playerY - 21, playerZ - 48); 
    Tessellator.drawString("Location #5", playerX - 25, playerY - 21, playerZ - 55); 
    Tessellator.drawString("Location #6", playerX + 13, playerY - 5, playerZ - 47); 
    Tessellator.drawString("Location #7", playerX + 27, playerY - 5, playerZ + 7); 
    Tessellator.drawString("Location #8",playerX + 40 , playerY  -10 , playerZ  -42 );
    Tessellator.drawString("Location #9",playerX + 53 , playerY  -10 , playerZ  -25 );
    Tessellator.drawString("Location #10",playerX + 50 , playerY  -10 , playerZ + 0 );
    Tessellator.drawString("Location #11",playerX + 42 , playerY  -10 , playerZ + 25 );
    Tessellator.drawString("Location #12",playerX + 17 , playerY  -4 , playerZ + 22 );
    Tessellator.drawString("Location #13",playerX + 14 , playerY + 18 , playerZ + 24 );
    Tessellator.drawString("Location #14",playerX + 3 , playerY + 23 , playerZ + 21 );
    Tessellator.drawString("Location #15",playerX + 29 , playerY + 18 , playerZ + 20 );
    Tessellator.drawString("Location #16",playerX + 41 , playerY + 25 , playerZ + 29 );
    Tessellator.drawString("Location #17",playerX + 54 , playerY + 25 , playerZ + 16 );
    Tessellator.drawString("Location #18",playerX + 57 , playerY + 16 , playerZ  -22 );
    Tessellator.drawString("Location #19",playerX + 48 , playerY + 23 , playerZ  -42 );
    Tessellator.drawString("Location #20",playerX + 51 , playerY + 30 , playerZ  -52 );
    Tessellator.drawString("Location #21",playerX + -9 , playerY  -1 , playerZ  -56 );
    Tessellator.drawString("Location #22",playerX + -25 , playerY  -1 , playerZ  -33 );
    Tessellator.drawString("Location #23",playerX + 0 , playerY  -44 , playerZ  -43 );
    Tessellator.drawString("Location #24",playerX + -17 , playerY  -44 , playerZ  -42 );
    Tessellator.drawString("Location #25",playerX + -14 , playerY  -45 , playerZ  -5 );
    Tessellator.drawString("Location #26",playerX + 12 , playerY  -36 , playerZ + 7 );
    Tessellator.drawString("Location #27",playerX + 41 , playerY  -36 , playerZ + 7 );
    Tessellator.drawString("Location #28",playerX + 27 , playerY  -45 , playerZ  -29 );
    Tessellator.drawString("Location #29",playerX + 11 , playerY  -40 , playerZ  -54 );
}