const options: IntersectionObserverInit = {}

const translateIntersectionObserverCallback: IntersectionObserverCallback = (entries, _observer) => {
  entries.filter(entry => entry.isIntersecting).forEach(entry => {
    (entry as any).target.style.animation = "translateSectionAnimation .6s forwards ease-out";
  })
}

const translateIntersectionObserver = new IntersectionObserver(translateIntersectionObserverCallback, options)

const scaleIntersectionObserverCallback: IntersectionObserverCallback = (entries, _observer) => {
  entries.filter(entry => entry.isIntersecting).forEach(entry => {
    (entry as any).target.style.animation = "scaleSectionAnimation .2s forwards ease-out";
  })
}

const scaleIntersectionObserver = new IntersectionObserver(scaleIntersectionObserverCallback, { threshold: 0.2 })

const fadeInIntersectionObserverCallback: IntersectionObserverCallback = (entries, _observer) => {
  entries.filter(entry => entry.isIntersecting).forEach(entry => {
    (entry as any).target.style.animation = "fadeInSectionAnimation .5s .5s forwards ease-out";
  })
}

const fadeInIntersectionObserver = new IntersectionObserver(fadeInIntersectionObserverCallback, options)

export default () => {
  document.querySelectorAll("#translateSection").forEach(entry => {
    translateIntersectionObserver.observe(entry)
  })
  document.querySelectorAll("#scaleSection").forEach(entry => {
    scaleIntersectionObserver.observe(entry)
  })
  document.querySelectorAll("#fadeInSection").forEach(entry => {
    fadeInIntersectionObserver.observe(entry)
  })
}
