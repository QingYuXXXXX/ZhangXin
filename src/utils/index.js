export function throttle(fn, delay) {
  let timer = null
  return function () {
    const context = this,
      args = [...arguments]
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, this)
        timer = null
      }, delay)
    }
  }
}
