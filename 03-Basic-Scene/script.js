
const scene = new THREE.Scene() //creating our scene

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)

// Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// Mesh
const mesh = new THREE.Mesh(geometry, material)
// Adding the mesh to the scene
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// Adding the camera to the scene
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)