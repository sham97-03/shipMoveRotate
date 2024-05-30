
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const ship = new THREE.Mesh(geometry, material);
scene.add(ship);

camera.position.z = 5;

class ShipController {
    constructor(ship, scene, camera) {
        this.ship = ship; 
        this.scene = scene; 
        this.camera = camera; 

        this.translationMatrix = new THREE.Matrix4();

        this.rotationMatrix = new THREE.Matrix4();

        this.translationSpeed = 0.1;
        this.rotationSpeed = 0.05;

        this.setupKeyListener();
    }

    setupKeyListener() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'w':
                case 'W':
                    this.moveForward();
                    break;
                case 's':
                case 'S':
                    this.moveBackward();
                    break;
                case 'a':
                case 'A':
                    this.rotateLeft();
                    break;
                case 'd':
                case 'D':
                    this.rotateRight();
                    break;
            }
        });
    }

    moveForward() {
        this.translate(0, 0, -this.translationSpeed);
    }

    moveBackward() {
        this.translate(0, 0, this.translationSpeed);
    }

    rotateLeft() {
        this.rotate(this.rotationSpeed);
    }

    rotateRight() {
        this.rotate(-this.rotationSpeed);
    }

    translate(x, y, z) {
        this.translationMatrix.makeTranslation(x, y, z);
        this.ship.applyMatrix4(this.translationMatrix);
    }

    rotate(angle) {
        this.rotationMatrix.makeRotationY(angle);
        this.ship.applyMatrix4(this.rotationMatrix);
    }

    update() {
        // هنا نضيف التعديلات
    }
}

const shipController = new ShipController(ship, scene, camera);

function animate() {
    requestAnimationFrame(animate);

    shipController.update();
    
    renderer.render(scene, camera);
}

animate();
