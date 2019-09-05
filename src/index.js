export const sum = (a, b) => a + b;
class Fo {
  count = 0;
  add() {
    this.count++;
  }
  minus() {
    this.count++;
  }
}

const query = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("time out");
    }, 3000);
  });
};
const f = new Fo();
f.add();
f.add();
f.add();
const q = query();
q.then(res => {
  console.log(res);
});
console.log(f);
