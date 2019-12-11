/**
 * Custom blocks
 */
//% weight=49 color=#ba0057 icon="\uf044"
namespace format {
    /**
     * Return a formatted string containing
     * a number rounded to n decimal places,
     * padded with zeros after the decimal point
     * if that is how the rounding comes out.
     * @param x is the number to be formatted, eg: 0
     * @param n is the number of decimal places, eg: 2 
     */
    //% block='format|%x|to string having|%n|decimal places'
    export function formatDecimal(x: number, n: number): string {
        let workingValue = x * Math.pow(10, n);
        workingValue = Math.round(workingValue);
        let workingString = '' + `${workingValue}`
        return workingString.slice(0, -n)
            + '.' + workingString.slice(-n);
    }
}