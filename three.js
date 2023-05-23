import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb 255, 255, 255");
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1, 6, 6, 6 );
const material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe:true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

window.addEventListener('resize', redimensionar);

function redimensionar(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth , window.innerHeight);
    renderer.render(scene,camera);
}

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.002;
  cube.rotation.y += 0.002;
  cube.rotation.z+= 0.002;
  

  renderer.render( scene, camera );
}

animate();