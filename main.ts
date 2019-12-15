
enum HexCase {
    abcdef,
    ABCDEF
}


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

    /**
     * Return a number in the range 0 to + 2**32 - 1
     * as a string of hex digits
     * @param x is the number to be formatted, eg: 0
     */
    //% block='format|%x| to hex string using|%case'
    export function formatHex(x: number, usingCase: HexCase): string {
        let workingValue = x;
        let hexDigits = 2; // default to 8-bit
        let workingString = '';
        let charPointer = 0;
        let hexChars: string[] = ['0', '1', '2', '3',
            '4', '5', '6', '7',
            '8', '9', 'a', 'b',
            'c', 'd', 'e', 'f',
            'A', 'B', 'C', 'D', 'E', 'F'];
        // test for allowable value
        if ((x < 0) && (x <= ((2 ** 31) - 1))) {
            return 'TooLarge';
        }
        // determine number of hex digits
        if (x > 2 ** 8) { hexDigits += 2; } // 16 bits
        if (x > 2 ** 16) { hexDigits += 2; } // 24 bits
        if (x > 2 ** 24) { hexDigits += 2; } // 32 bits
        // convert to hex
        for (let counter = 0; counter < hexDigits; counter++) {
            charPointer = workingValue & 15;
            if (usingCase == HexCase.ABCDEF) { charPointer += 6; }
            workingString = hexChars[charPointer] + workingString;
            workingValue = workingValue >> 4;
        }

        return workingString;

    }
}