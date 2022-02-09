function calc(initial) {
    let result = initial;

    const calculator = {
        add(value) {
            result += value;
            return this;
        },
        subtract(value) {
            result -= value;
            return this;
        },
        mult(value) {
            result *= value;
            return this;
        },
        div(value) {
            result /= value;
            return this;
        },
        result() {
            return result;
         }
    }

    return calculator;
}

const result = calc(16).add(6).subtract(3).mult(2).div(56).result()

console.log(result)