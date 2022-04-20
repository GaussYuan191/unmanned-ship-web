export default function sleep (ms) {
  return new Promise((reslove, reject) => {
    setTimeout(reslove, ms);
  })
}