import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
  useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '-80vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.lucia-life .img-box', {
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/4.webp" />
        </div>
        <div className="lucia-3">
          <img src="/images/4.webp" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Artiom Iljuščic</h1>
          <h2>Director of AlarCZ. Supporting clients in every step.</h2>
          <p>My role is to make sure that our clients not only register their company but also recieve full support afterwards - from accounting and complience to everyday practical issues.</p>
        </div>

        <div className="lucia-2">
          <img src="/images/4.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">As part of the AlarCZ leadership, I focus on the operational side of our services: guiding clients through the administrative process, ensuring documents are handled correctly.</p>
      </div>
    </section>
  )
}

export default Lucia