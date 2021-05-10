const fadeOptions: IntersectionObserverInit = {
  root: null
}

const fadeCallback: IntersectionObserverCallback = (entries, _observer) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      ;(entry as any).target.style.animation =
        'fadeInSectionAnimation 0.4s ease-in-out forwards'
    })
}

const fadeObserver = new IntersectionObserver(fadeCallback, fadeOptions)

export default () => {
  document.querySelectorAll('#fadeInSection').forEach((entry) => {
    fadeObserver.observe(entry)
  })
}
