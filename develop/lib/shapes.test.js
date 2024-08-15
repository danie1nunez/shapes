const {Triangle} = require('../lib/shapes');

describe('Triangle', () => {
    test('should make a blue triangle', () => {
        const triangle = new Triangle('Sample Text', 'black', 'blue');
        const expectedSVG = `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 200,190 0,190" fill="blue" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Sample Text</text>
            </svg>
        `.replace(/\s/g, ''); // Removes all the whitespace characters

        const receivedSVG = triangle.render().replace(/\s/g, ''); // Remove all whitespace characters

        expect(receivedSVG).toEqual(expectedSVG);
    });
});