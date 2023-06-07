import gsap from "gsap";
import React, { useRef, useState, useLayoutEffect } from "react";
import "./TextScroll.css";
import logo from "./logo.svg";
import volumeOff from "./volume_off.svg";
import volumeOn from "./volume_on.svg";
import { forwardRef } from "react";

const TextScroll = forwardRef((props, ref) => {
  const intro = useRef();
  const title = useRef();
  const content = useRef();
  const audio = useRef();

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [showing, setShowing] = useState(true);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    let tl = new gsap.timeline({
      onComplete: () => {
        tl.time(0);
        tl.pause();
        if (audio.current) {
          audio.current.pause();
          audio.current.currentTime = 0;
        }
        setShowing(true);
      },
    });

    tl.play()
      .to(intro.current, {
        opacity: 1,
        delay: 1,
        duration: 4.5,
      })
      .to(intro.current, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          if (audio.current) {
            audio.current.play();
            audio.current.volume = 0.1;
          }
        },
      })
      .set(title.current, { opacity: 1, scale: 2.75, delay: 0.5 })
      .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
      .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
      .to(content.current, {
        top: "-700%",
        duration: 100,
      })
      .to(content.current, {
        opacity: 0,
      });
  }, [playing]);

  // useEffect(() => {
  //   let tl = new gsap.timeline();

  //   tl.to(intro.current, {
  //     opacity: 1,
  //     delay: 1,
  //     duration: 4.5,
  //   })
  //     .to(intro.current, {
  //       opacity: 0,
  //       duration: 1.5,
  //       onComplete: () => {
  //         if (audio.current) {
  //           audio.current.play();
  //           audio.current.volume = 0.1;
  //         }
  //       },
  //     })
  //     .set(title.current, { opacity: 1, scale: 2.75, delay: 0.5 })
  //     .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
  //     .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
  //     .to(content.current, {
  //       top: "-1000%",
  //       duration: 120,
  //     });
  // }, []);

  return (
    <div className="text-scroller" ref={ref}>
      <div className="container">
        <section className="intro" ref={intro}>
          <p>
            A long time ago, in a galaxy far,
            <br /> far away....
          </p>
        </section>
        <section className="title" ref={title}>
          <img src={logo} alt="Code Wars title" />
        </section>
        <section className="crawl">
          <div className="content" ref={content}>
            <h1 className="episode-number">Episode X</h1>
            <h2 className="episode-title">THE EMPEROR RETURNS</h2>
            <p>
              It is a time of great innovation and discovery. Aspiring computer
              science majors across the galaxy embark on an epic journey,
              exploring the vast realm of technology and problem-solving.
            </p>
            <p>
              In this digital age, computer science has become a powerful force,
              shaping the destiny of societies and enabling unprecedented
              advancements. Artificial intelligence, cybersecurity, software
              engineering, the possibilities are endless.
            </p>
            <p>
              From the ashes of the Empire, a lone student stands at the
              forefront, ready to navigate the intricacies of this ever-evolving
              field. With passion burning in his heart and knowledge as his
              ally, he seeks to rebuild the Techno Union, a beacon of
              technological prowess and dedication.
            </p>
            <p>
              The student's projects come to life through this website,
              showcasing his skills in web development, mobile applications, and
              more. Each project represents a triumph over challenges, a
              testament to his expertise in algorithms, data structures, and
              software engineering. With each click, visitors bear witness to
              the student's potential, his hunger to learn, and his drive to
              make a difference.
            </p>
            <p>
              As the visitor delves deeper into the virtual realm, they uncover
              the student's proficiency in programming languages and technical
              concepts. His knowledge spans galaxies, from Python to Java, from
              databases to machine learning, enabling him to face the unknown
              boldly. Come join him and together embark on a quest for
              innovation, collaboration, and the limitless potential of the
              digital universe.
            </p>
            <h2 className="episode-end">MAY THE CODE BE WITH YOU!</h2>
          </div>
        </section>
        <audio ref={audio} muted>
          <source
            type="audio/mpeg"
            src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
          />
        </audio>
        <button
          className="volume"
          type="button"
          onClick={() => {
            audio.current.muted = !muted;
            setMuted(!muted);
          }}
        >
          {muted ? (
            <img src={volumeOff} alt="Volume is off" />
          ) : (
            <img src={volumeOn} alt="Volume is on" />
          )}
        </button>
        {showing && (
          <button
            className="play"
            type="button"
            onClick={() => {
              let tl2 = new gsap.timeline({
                onComplete: () => {
                  tl2.time(0);
                  tl2.pause();
                },
              });
              tl2
                .to(".play", {
                  x: -100,
                  duration: 0.1,
                })
                .to(".play", {
                  x: 1200,
                  duration: 1,
                  onComplete: () => {
                    setPlaying(!playing);
                    setShowing(false);
                  },
                });
            }}
          >
            Play <i className="far fa-play-circle" />
          </button>
        )}
      </div>
    </div>
  );
});

export default TextScroll;
