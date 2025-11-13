try {
  console.log('Start');
  throw new Error('Custom Error!');
} catch (e) {
  console.log(e.message);
} finally {
  console.log('Finally ব্লক সবসময় চলবে!');
}
