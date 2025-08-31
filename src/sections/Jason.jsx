import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Jason = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -300, duration: 1, ease: 'power1.inOut'
    }, '<')
  }) 

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Alex Iljuščic</h1>
        <h2>Director of AlarCZ. Helping people start and grow their business in Czech Republic.</h2>
        <p>As the managing director of AlarCZ, I oversee daily operations and ensure the quality of our services - from company and legal addresses to accounting, taxes, translations and insurance.</p>

        <div className="jason-2">
          <img src="/images/4.webp" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/4.webp" />
        </div>
        <div className="jason-3">
          <img src="/images/4.webp" />
        </div>
      </div>
    </section>
  )
}

export default Jason