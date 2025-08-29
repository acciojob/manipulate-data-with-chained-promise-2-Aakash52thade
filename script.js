function manipulateArray() {
  const initialArray = [1, 2, 3, 4];

  // Start immediately with resolved promise
  return Promise.resolve(initialArray)
    .then(arr => {
      // First transformation: filter evens
      const evens = arr.filter(n => n % 2 === 0);

      return new Promise(resolve => {
        setTimeout(() => {
          const out = document.getElementById("output");
          if (out) out.textContent = evens.join(",");
          resolve(evens);
        }, 1000); // after 1s → [2,4]
      });
    })
    .then(evens => {
      // Second transformation: multiply by 2
      return new Promise(resolve => {
        setTimeout(() => {
          const doubled = evens.map(n => n * 2);
          const out = document.getElementById("output");
          if (out) out.textContent = doubled.join(",");
          resolve(doubled);
        }, 2000); // after total 3s → [4,8]
      });
    });
}

// Run when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  const out = document.getElementById("output");
  if (out) out.textContent = ""; // ensure empty initially
  manipulateArray().catch(err =>
    console.error("Error during manipulation:", err)
  );
});
