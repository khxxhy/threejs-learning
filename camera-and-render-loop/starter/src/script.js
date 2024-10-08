import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

cubeMesh.scale.y = 2

//initialize the camera
const camera = new THREE.PerspectiveCamera(
  65, //field of view
  window.innerWidth / window.innerHeight, //aspect
  0.1, //near
  30 // far
);

/*const camera = new THREE.OrthographicCamera(
  -1,
  1,
  1,
  -1,
  0.1,
  50
);*/

camera.position.y = 5;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true //anti-staircase
});
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //anti-stair-case

//instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

window.addEventListener('resize', () =>{
  camera.aspect= window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight);

})
const renderloop = () => {
  
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
