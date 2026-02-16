// Utility functions for color conversion and validation

/**
 * Converts a hex color code to RGB
 * @param hex - The hex color code
 * @returns {Object} - An object containing the RGB components
 */
function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return {
        r: r,
        g: g,
        b: b
    };
}

/**
 * Validates if a color code is a valid hex color
 * @param color - The color code to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidHex(color) {
    return /^#[0-9A-F]{6}$/i.test(color);
}

module.exports = {
    hexToRgb,
    isValidHex
};
