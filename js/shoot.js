AFRAME.registerComponent("bullets", {
    init: function(){
        this.shootBullet();
    },
    shootBullet: function(){
        window.addEventListener("keydown", (e)=>{
            if (e.key === "q" || e.key === "Q"){
                var bullet = document.createElement("a-entity");

                bullet.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.1
                });
                bullet.setAttribute("material", {
                    color: `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
                });

                bullet.setAttribute("visible", true);
                bullet.setAttribute("dynamic-body", {
                    shape: "sphere",
                    mass: 0
                });

                var camera = document.querySelector("#camera");
                const {x, y, z} = camera.getAttribute("position");
                bullet.setAttribute("position", { x:x, y:y, z:z });

                var camera3D = camera.object3D;
                var direction = new THREE.Vector3();
                camera3D.getWorldDirection(direction);
                bullet.setAttribute("velocity", direction.multiplyScalar(-20));

                bullet.addEventListener("collide", this.removeBullet);

                var scene = document.querySelector("#scene");
                scene.appendChild(bullet);

                var sound = document.querySelector("#shoot");
                sound.components.sound.playSound();
            }
        });
    },
    removeBullet: function(e){
        var element = e.detail.target.el;
        var elementHit = e.detail.body.el;
        if (elementHit.id.includes("wall")){
            element.removeEventListener("collide", this.shootBullet);

            var splat = document.createElement("a-image");
            var pos = element.getAttribute("position");
            var rot = elementHit.getAttribute("rotation");
            splat.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
            splat.setAttribute("rotation", { x: rot.x, y: rot.y, z: rot.z });
            splat.setAttribute("src", `./assets/paintball_splats/splat${Math.floor((Math.random()*6)+1)}.png`);
            splat.setAttribute("width", 2);
            splat.setAttribute("height", 2);

            var scene = document.querySelector("#scene");
            scene.removeChild(element);
            scene.appendChild(splat);
        }
        if (elementHit.id.includes("environment")){
            element.removeEventListener("collide", this.shootBullet);

            var splat = document.createElement("a-image");
            var pos = element.getAttribute("position");
            splat.setAttribute("position", { x: pos.x, y: pos.y+1, z: pos.z });
            splat.setAttribute("rotation", { x: -90, y: 0, z: 0 });
            splat.setAttribute("src", `./assets/paintball_splats/splat${Math.floor((Math.random()*6)+1)}.png`);
            splat.setAttribute("width", 2);
            splat.setAttribute("height", 2);

            var scene = document.querySelector("#scene");
            scene.removeChild(element);
            scene.appendChild(splat);
        }
    }
});