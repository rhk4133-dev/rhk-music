let scene = new THREE.Scene()

let camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

let light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(5,10,7)

scene.add(light)

let roadGeometry = new THREE.PlaneGeometry(50,200)
let roadMaterial = new THREE.MeshStandardMaterial({color:0x333333})

let road = new THREE.Mesh(roadGeometry,roadMaterial)
road.rotation.x = -Math.PI/2

scene.add(road)

let truck

let loader = new THREE.GLTFLoader()

loader.load("truck.glb",function(gltf){

truck = gltf.scene
truck.scale.set(1,1,1)
truck.position.y = 0.5

scene.add(truck)

})

camera.position.set(0,5,10)
camera.lookAt(0,0,0)

let speed = 0.2

function animate(){

requestAnimationFrame(animate)

if(truck){

if(moveForward) truck.position.z -= speed
if(moveBack) truck.position.z += speed
if(moveLeft) truck.position.x -= speed
if(moveRight) truck.position.x += speed

}

renderer.render(scene,camera)

}

animate()

let moveForward=false
let moveBack=false
let moveLeft=false
let moveRight=false

document.addEventListener("keydown",e=>{

if(e.key=="ArrowUp") moveForward=true
if(e.key=="ArrowDown") moveBack=true
if(e.key=="ArrowLeft") moveLeft=true
if(e.key=="ArrowRight") moveRight=true

})

document.addEventListener("keyup",e=>{

if(e.key=="ArrowUp") moveForward=false
if(e.key=="ArrowDown") moveBack=false
if(e.key=="ArrowLeft") moveLeft=false
if(e.key=="ArrowRight") moveRight=false

})

document.getElementById("forward").ontouchstart=()=>moveForward=true
document.getElementById("forward").ontouchend=()=>moveForward=false

document.getElementById("back").ontouchstart=()=>moveBack=true
document.getElementById("back").ontouchend=()=>moveBack=false

document.getElementById("left").ontouchstart=()=>moveLeft=true
document.getElementById("left").ontouchend=()=>moveLeft=false

document.getElementById("right").ontouchstart=()=>moveRight=true
document.getElementById("right").ontouchend=()=>moveRight=false