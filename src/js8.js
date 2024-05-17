function threenumber(a, b, c) {
    return a * b * c;
}

function calculateVolume() {
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;
    const depth = document.getElementById('depth').value;

    const volume = threenumber(Number(height), Number(width), Number(depth));
    console.log(`Cuboid volume: ${volume}`);
}