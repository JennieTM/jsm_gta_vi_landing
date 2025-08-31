import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final-message',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      }
    })

    tl.to('.final-content', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    tl.to('.final-message', { opacity: 1, duration: 1, ease: 'power1.inOut' })
  })

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/ccc.webp" alt="logo" className="md:w-72 w-52" />

        <div>
          <h3 className="gradient-title">
            Become <br /> Our <br /> Guest
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/2.svg" className="md:w-60 w-40" />
        </div>
      </div>
    </section>
  )
}

export default Outro