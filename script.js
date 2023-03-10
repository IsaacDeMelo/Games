
       
       // EVENTOS //
        window.addEventListener("keydown", keydownHandler, false);
        window.addEventListener("keyup", keyupHandler, false);
        window.addEventListener("keydown", keydownHandler2, false);
        window.addEventListener("keyup", keyupHandler2, false);
        // VALORES //
        var consultorPlayer = document.getElementById("flash");
        var cnv = document.querySelector("canvas");
        var ctx = cnv.getContext("2d");
        var speedForceLevel = 6; 
        var speedForceLevel2 = 6; 
        var controlContador = 1;
        var controlKid = 1; 
        var socoEmExecução = false; 
        var controlCt = 1; 
        var playerSize = 65;
        var playerX = 100;
        var playerY = 100; 
        var player2X = 800;
        var player2Y = 100;
        var distance = 180;
        var distanceY = 0; 
        var distance2 = 175;
        var distance2Y = 10;

        // COMANDOS player 1 //
        var DOWN = 40, LEFT = 37, UP = 38, RIGHT = 39, PUNCH = 45;
        var mvDown = mvLeft = mvUp = mvRight = mvPunch = false;

        // COMANDOS player 2//
        var BAIXO = 83, ESQUERDA = 65, CIMA = 87, DIREITA = 68; 
        var mvBaixo = mvEsquerda = mvCima = mvDireita = false; 

        // FUNÇÕES //
        function controlFlashRun(ct){
            if (ct <= 1) {
                $("#flash").attr("src", "https://userstyles.org/style_screenshots/214463_after.gif")
            }
        }
        function controlKidRun(ct){
            if (ct <= 1) {
                $('#kid').attr("src", "https://i.imgur.com/QgChJ.gif");
                controlKid++
            }
        }
        function Stand(ct){
            if (ct <= 1){
                $("#flash").attr("src", "images/flash_stand.gif")
                controlCt++
            }
        }
        function updateBlock(){
            
            if (mvDown){
                playerY = playerY + speedForceLevel;
                $("#flash").css({'width':'126px'})
                speedForceLevel = speedForceLevel + 0.1
            }
            if (mvLeft){
                playerX = playerX - speedForceLevel;
                $("#flash").css({'width':'126px'})
                $("#flash").css({'transform': 'scaleX(-1)'})
                distance = 160;
                speedForceLevel = speedForceLevel + 0.1 
            }
            if (mvRight){
                playerX = playerX + speedForceLevel;
                $("#flash").css({'width':'126px'})
                $("#flash").css({'transform': 'scaleX(1)'})
                distance = 160;
                speedForceLevel = speedForceLevel + 0.1
            }
            if (mvUp){
                playerY = playerY - speedForceLevel;
                $("#flash").css({'width':'126px'})
                speedForceLevel = speedForceLevel + 0.1
            }
            if (mvUp  == false && mvDown  == false && mvLeft  == false && mvRight == false){
                speedForceLevel = 20;
                if (socoEmExecução == false){
                    distance = 180; 
                    Stand(controlCt);
                    $("#flash").css({'width':'75px'})
                }
            }
            if (mvBaixo == false && mvCima == false && mvEsquerda == false && mvDireita == false){
                speedForceLevel2 = 20;
                $('#kid').attr("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d669599e-fc56-4a97-bdba-aec314133eef/d7bi2tw-de6b4953-3d49-446f-8eca-a83cbca7a573.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q2Njk1OTllLWZjNTYtNGE5Ny1iZGJhLWFlYzMxNDEzM2VlZlwvZDdiaTJ0dy1kZTZiNDk1My0zZDQ5LTQ0NmYtOGVjYS1hODNjYmNhN2E1NzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QTg1Go9nR54xVqLW80QeNK2spAd8bi6GIDYWgugPO3A")
            }
            if (mvBaixo){
                controlKidRun(controlKid);
                player2Y = player2Y + speedForceLevel2;
                speedForceLevel2 = speedForceLevel2 + 0.1;
            }
            if (mvCima){
                controlKidRun(controlKid);
                player2Y = player2Y - speedForceLevel2;
                speedForceLevel2 = speedForceLevel2 + 0.1;
            }
            if (mvEsquerda){
                controlKidRun(controlKid);
                player2X = player2X - speedForceLevel2;
                speedForceLevel2 = speedForceLevel2 + 0.1;
                $("#kid").css({'transform':'scaleX(-1)'})
            }
            if (mvDireita){
                player2X = player2X + speedForceLevel2;
                controlKidRun(controlKid);
                $("#kid").css({'transform':'scaleX(1)'})
                speedForceLevel2 = speedForceLevel2 + 0.1;
            }
            if (mvPunch && socoEmExecução == false){
                
                socoEmExecução = true;
                distanceY = -25
                
                DOWN = 0, LEFT = 0, UP = 0, RIGHT = 0;
                mvDown = mvLeft = mvUp = mvRight = false;
                $("#flash").attr("src", "images/punch.gif");
                $("#flash").css({'width':'140px'})
                $("#flash").css({'height':'100px'})
                
                if (consultorPlayer.style.transform == 'scaleX(-1)'){
                    distance = 110;
                }
                setTimeout(() => {
                    DOWN = 40, LEFT = 37, UP = 38, RIGHT = 39, PUNCH = 45;
                    mvDown = mvLeft = mvUp = mvRight = mvPunch = false;
                    $("#flash").attr("src", "images/flash_stand.gif")
                    $("#flash").css({'height':'75px'})
                    distanceY = 0;
                    distance = 180;
                    socoEmExecução = false; 
                }, 1000);
                
               // if (mvDown == false|| mvUp == false || mvLeft == false || mvRight == false){
               //     controlCt = 1;
               // }
            }
        }
        function barriers(){
            if (playerY <= 0){
                playerY = 0; 
            }
            if (playerY + playerSize >= cnv.height){
                playerY = cnv.height - playerSize; 
            }
            if (playerX <= 0){
                playerX = 0; 
            }
            if (playerX >= cnv.width - 65){
                playerX = cnv.width - playerSize;
                
            }
            if (player2Y <= 0){
                player2Y = 0; 
            }
            if (player2Y + playerSize >= cnv.height){
                player2Y = cnv.height - playerSize; 
            }
            if (player2X <= 0){
                player2X = 0; 
            }
            if (player2X >= cnv.width - 65){
                player2X = cnv.width - playerSize;
                
            }
        }
        function keydownHandler(e){
            var key = e.keyCode;
            switch(key){
                case DOWN:
                    mvDown = true;
                    controlFlashRun(controlContador);
                break; 
                case UP:
                    mvUp = true; 
                    controlFlashRun(controlContador);
                break; 
                case LEFT: 
                    mvLeft = true; 
                    controlFlashRun(controlContador);
                break;
                case RIGHT:
                    mvRight = true; 
                    controlFlashRun(controlContador);
                break; 
                case PUNCH:
                    mvPunch = true; 
            }
        }
        function keydownHandler2(e){  
            var key = e.keyCode;
            switch(key){
                case BAIXO:
                    mvBaixo = true;
                break; 
                case CIMA:
                    mvCima = true;            
                break; 
                case ESQUERDA: 
                    mvEsquerda = true;     
                break;
                case DIREITA:
                    mvDireita = true; 
                break; 
            }
        }
        function keyupHandler2(e){
            var key = e.keyCode;
            switch(key){
                case BAIXO:
                    mvBaixo = false;
                    controlKid = 1; 
                break; 
                case CIMA:
                    mvCima = false;    
                    controlKid = 1;         
                break; 
                case ESQUERDA: 
                    mvEsquerda = false;   
                    controlKid = 1;   
                break;
                case DIREITA:
                    mvDireita = false; 
                    controlKid = 1; 
                    
                break; 
            }
        }
        function keyupHandler(e){
            var key = e.keyCode;
            switch(key){
                case DOWN:
                    mvDown = false;
                    controlContador = 1;
                    controlCt = 1;
                break; 
                case UP:
                    mvUp = false; 
                    controlContador = 1;
                    controlCt = 1;
                break; 
                case LEFT: 
                    mvLeft = false; 
                    controlContador = 1;
                    controlCt = 1;
                break;
                case RIGHT:
                    mvRight = false;
                    controlContador = 1; 
                    controlCt = 1;
                break; 
            }
        }
        function drawn(){
            ctx.clearRect(0, 0, cnv.width, cnv.height)
            ctx.fillStyle = "rgba(0, 0, 255, 0)";
            ctx.fillRect(playerX, playerY, playerSize, playerSize);
            ctx.fillStyle = "rgba(0, 0, 255, 0)";
            ctx.fillRect(player2X, player2Y, 65, 65);
        }
        function update(){
            $("#flash").css({'left':playerX + distance + 'px'})
            $("#flash").css({'top':playerY + distanceY +'px'})
            $("#kid").css({'left':player2X + distance2 + 'px'})
            $("#kid").css({'top':player2Y + distance2Y + 'px'})
            updateBlock();
            barriers();
        }
        function loop(){
            window.requestAnimationFrame(loop, cnv);
            drawn();
            update();
           
        }
        loop();