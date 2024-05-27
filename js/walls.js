AFRAME.registerComponent("walls", {
  init: function () {
      var posXs = [];
      var posZs = [];
      var rotYs = [];
      for (var i = 0; i < 100; i++) {
          var wall = document.createElement("a-entity");
          wall.setAttribute("id", "wall" + i);

          var posX = Math.floor((Math.random()*201)-100);
          var posZ = Math.floor((Math.random()*201)-100);
          wall.setAttribute("position", { 
              x: posX,
              y: 2.5,
              z: posZ 
          });
  
          var rotY = Math.floor(Math.random()*180);
          wall.setAttribute("rotation", {x: 0, y: rotY, z: 0});
  
          wall.setAttribute("geometry", {
              primitive: "box",
              width: 7.5,
              height: 5,
              depth: .1
          });
  
          wall.setAttribute("material", {
              color: `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
          });
  
          wall.setAttribute("static-body", {});
    
          var sceneEl = document.querySelector("#scene");
          sceneEl.appendChild(wall);

          posXs.push(posX);
          posZs.push(posZ);
          rotYs.push(rotY);
      }
      console.log(posXs);
      console.log(posZs);
      console.log(rotYs);
  },
});

AFRAME.registerComponent("walls2", {
  init: function () {
      var posX = [-1, -10, -80, -51, -87, -80, 5, -29, -27, 29, -56, -85, -21, 15, 13, -84, 48, 71, 4, -55, 67, -4, -29, 36, 3, 15, -24, -66, 28, 43, 44, -57, -36, 21, 16, 51, -31, 53, 67, -50, -13, 55, -35, -81, 83, 3, 9, -7, -14, -69, -90, 50, -32, 40, -41, 43, 2, 4, -3, 11, -23, 0, 9, 66, 17, -61, -78, 61, -31, -63, -38, 46, -33, -32, -96, 61, 34, -75, 68, -73, 74, 23, 64, 87, -42, 36, -27, 93, -59, -41, -63, 37, -66, 44, -34, -7, 99, -67, 46, 81];
      var posZ = [-51, -8, -33, 38, -38, 84, 37, 48, -57, 28, 90, -65, 30, 43, -87, 99, -54, 37, -49, 64, -22, 29, -63, 29, -87, 75, 98, -76, -11, 95, -91, -90, -15, -93, 40, -13, 80, -36, -88, 81, -4, 97, 54, -57, -31, -43, -65, 80, -98, 81, -89, -82, -82, -21, -57, -29, -34, -10, 52, -19, -76, -60, -75, 49, -80, 92, 44, 88, -11, 94, -19, -87, 26, 4, -93, 12, 78, 60, 91, 38, -42, 10, 91, -69, 78, -6, 99, -62, -45, -20, 33, -25, -69, -80, 78, -89, -75, 1, 69, 31];
      var rotY = [121, 72, 99, 109, 51, 14, 48, 173, 74, 97, 31, 162, 22, 88, 14, 24, 71, 52, 65, 7, 66, 28, 82, 132, 91, 13, 138, 151, 157, 80, 157, 144, 2, 58, 112, 124, 33, 164, 100, 47, 46, 51, 132, 172, 155, 79, 4, 97, 125, 109, 53, 140, 131, 167, 151, 114, 68, 64, 171, 27, 56, 40, 155, 161, 94, 12, 115, 149, 110, 122, 117, 31, 81, 138, 35, 63, 149, 72, 29, 63, 138, 20, 45, 39, 41, 50, 129, 40, 168, 21, 115, 46, 144, 104, 11, 61, 51, 126, 25, 77]

      for (var i = 0; i < 100; i++) {
          var wall = document.createElement("a-entity");
          wall.setAttribute("id", "wall" + i);
  
          wall.setAttribute("position", { 
              x: posX[i],
              y: 2.5,
              z: posZ[i]
          });
  
          wall.setAttribute("rotation", {x: 0, y: rotY[i], z: 0});
  
          wall.setAttribute("geometry", {
              primitive: "box",
              width: 7.5,
              height: 5,
              depth: .1
          });
  
          wall.setAttribute("material", {
              color: `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
          });
  
          wall.setAttribute("static-body", {});
    
          var sceneEl = document.querySelector("#scene");
          sceneEl.appendChild(wall);
      }
  },
});