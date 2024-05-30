# ShipController Class

This class provides functionality to control the movement and rotation of a ship model in a Three.js scene.

## Usage

### Initialization

To use the `ShipController` class, follow these steps:

1. Include the Three.js library in your HTML file:

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

# Create a ship model (e.g., a cube) and add it to the scene.

## Create an instance of the ShipController class and pass the ship model, scene, and camera as parameters:

```javascript
const shipController = new ShipController(ship, scene, camera);
```

# Controlling the Ship
## The ShipController class allows you to control the ship's movement and rotation using the following methods:

`moveForward()`: Moves the ship forward along its local z-axis.
`moveBackward()`: Moves the ship backward along its local z-axis.
`rotateLeft()`: Rotates the ship to the left.
`rotateRight()`: Rotates the ship to the right.
These methods can be called directly or mapped to keyboard inputs for user interaction.

## Updating the Ship's State
The update() method of the ShipController class is called in each frame of the animation loop. You can add custom update logic inside this method to update the ship's state based on game logic, user input, or other factors.

```javascript
function animate() {
    requestAnimationFrame(animate);

    // Update ship's state
    shipController.update();

    // Render the scene
    renderer.render(scene, camera);
}ّّّ
```
# Example

```javascript
// Create ship model (cube) and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const ship = new THREE.Mesh(geometry, material);
scene.add(ship);

// Create instance of ShipController class
const shipController = new ShipController(ship, scene, camera);

// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Update ship's state
    shipController.update();

    // Render the scene
    renderer.render(scene, camera);
}

// Start animation loop
animate();
```
## License
This project is licensed under the MIT License.