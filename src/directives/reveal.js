const reducedMotionQuery = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : null

const prefersReducedMotion = () => reducedMotionQuery?.matches ?? false

const observers = new WeakMap()

const reveal = {
  mounted(el, binding) {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const delay = typeof binding.value === 'number' ? binding.value : 0
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.disconnect()
            observers.delete(el)
            if (delay > 0) {
              window.setTimeout(() => {
                el.style.transitionDelay = ''
              }, delay + 400)
            }
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observers.set(el, observer)
    observer.observe(el)
  },
  unmounted(el) {
    const observer = observers.get(el)
    observer?.disconnect()
    observers.delete(el)
  }
}

export default reveal
