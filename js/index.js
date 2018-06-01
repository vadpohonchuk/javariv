
const a = parseFloat(promt('Enter A'));
const b = parseFloat(promt('Enter B'));
const c = parseFloat(promt('Enter C'));

const result = solveQuadraticEq(a, b, c);
alert(result);

function solveQuadraticEq(a, b, c) {
    const d = calcDiskr(a, b, c);
    if (d > 0) {
        const x1 = (-b - Math.sqrt(d))/(2*a);
        const x2 = (-b + Math.sqrt(d))/(2*a);
        return result = 'x1 ' + x1 + ' x2 ' + x2;
    } else if (d===0) {
        const x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        const x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
         return 'x = ' + x;
    }
    return 'No roots!';

function calcDiskr(a, b, c) {
    const d = b * b - 4 * a * c;
    return d;
}
