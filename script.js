function fibonacci(num) {
  if (num <= 0 || num > 50) return -1; // Optional: handle invalid inputs
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, next;
  for (let i = 3; i <= num; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
}

function handleFibonacci() {
  const input = document.getElementById("inputNumber").value;
  const result = fibonacci(Number(input));
  document.getElementById("result").innerText = result !== -1
    ? `Fibonacci number at position ${input} is: ${result}`
    : `Please enter a number between 1 and 50.`;
}
