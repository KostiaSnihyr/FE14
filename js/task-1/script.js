function * fibo (forward = true) {
  forward = forward === undefined ? true : forward;
  let a = [0, 1];
  const step = (f, a) => f ? [a[1], a[0]+a[1]] : [a[1] - a[0], a[0]];
  for(; true; ) {
    const f = yield a[0];
    forward = f === undefined ? forward : f;
    a = step(forward, a);
  }
}

var f = fibo(false);


console.log(f.next(false));
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log('==============');
console.log(f.next(true));
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log('==============');
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
