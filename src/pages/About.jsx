import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountAnimation } from '../hooks/useCountAnimation'
import './About.css'

export default function About() {

  useEffect(() => {
    document.title = 'About — Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.3)

  const values = [
    {
      icon: '🤝',
      title: 'Empathy Over Ego',
      description: 'I design for the human, not the brief. Every decision starts with genuine empathy—understanding what users actually need, leaving personal biases aside.',
      whyItMatters: 'This is how we scale from 13 to 120 clients and create meaningful impact.'
    },
    {
      icon: '🔄',
      title: 'Compound Work, Forever Impact',
      description: 'I think in systems. Whether it\'s design systems or AI prototypes, I ask: "How do we do this once and let it compound forever?"',
      whyItMatters: 'Consistency, scalability, and reusable frameworks that let teams move faster.'
    },
    {
      icon: '🚀',
      title: 'Design at the AI Frontier',
      description: 'Design and AI aren\'t competing—they\'re merging. I\'m building AI agents and intelligent systems that prove beautiful design amplifies technology.',
      whyItMatters: 'The companies winning in 2026 are the ones who get this balance right.'
    },
    {
      icon: '✨',
      title: 'Authenticity as Design',
      description: 'Design is architecture, not costume jewelry. I\'m true to the work, true to users, and true to myself. That means honest feedback and integral work.',
      whyItMatters: 'People trust authentic work. Teams respect honest feedback.'
    }
  ]

  const testimonials = [
    {
      quote: 'I have had the pleasure of working with Umang and have consistently been impressed by his attention to detail and dedication to excellence. He approaches every task with a go-getter attitude and demonstrates a remarkable ability to explore and implement innovative solutions to challenges. Umang\'s commitment to timely delivery, coupled with his creative problem-solving skills, is evident in the quality of his designs and work methodology. His proactive approach and reliability make him an asset to any team or project.',
      author: 'Dipayan Sinha',
      title: 'Consulting | Certified ScrumMaster® | Product Management Certified'
    },
    {
      quote: 'One of the brightest minds I have ever worked with. This guy has great communication skills and knowledge about Experience Design. I highly recommend him.',
      author: 'Younis Mushtaq',
      title: 'UX Designer @ Spektra Systems | UI & Visual Designer'
    },
    {
      quote: 'Umang is excellent at ideation, design thinking and prototyping. In my numerous conversations with him, I have found Umang to be a great learner and innovator with a vision about how to provide users with top class experience, leveraging latest technologies. To him future is not what is in the build, but anything that is beyond imagination.',
      author: 'Sneha Singh',
      title: 'Software Engineer @ Google | Master of Computer Science at Texas A&M University'
    },
    {
      quote: 'Umang is an active leader and a dynamic team player. During my interactions with him, I have found him to be very creative and innovative with a special eye for details and design. He is obsessed with achieving perfection in all his assignments.',
      author: 'Shubham',
      title: 'User Experience Designer'
    },
    {
      quote: 'Umang has been one of my brilliant students with methodical and well planned approach to his projects. His punctuality to work and leadership skill makes him a great fit for any team.',
      author: 'Divij Deswal',
      title: 'Seasoned UI/UX Designer & Trainer | Author of \'Designing Tomorrow\'s Interfaces\''
    }
  ]

  const learning = [
    {
      label: '📖 Exploring',
      title: 'AI-Driven Design Systems',
      description: 'How do we build systems that adapt and learn? Exploring how AI makes consistency smarter, not just systematic.'
    },
    {
      label: '🤔 Interested In',
      title: 'Future of B2B SaaS',
      description: 'The next wave is intelligent, adaptive experiences. Design systems + AI = competitive advantage.'
    },
    {
      label: '🎓 Reading',
      title: 'Emerging Tech & Design',
      description: 'Deep dives into AI-powered experiences, design systems at scale, and building better products.'
    }
  ]

  const achievements = [
    {
      icon: '🎤',
      title: 'Lead Speaker at Friends of Figma',
      description: 'Spoke on "Solving real-life problems through design" at 2025 event. Shared insights on bridging the gap between design theory and practical product impact.'
    },
    {
      icon: '🏆',
      title: 'NowPurchase Hackathon Winner',
      description: 'Best Presenter & Runner-up for "AI-based purchase prediction" project in 2023. Demonstrated how design thinking applies to AI-driven features.'
    },
    {
      icon: '🎓',
      title: 'UX Gyan Sessions',
      description: 'Conducted regular teaching sessions for MetalCloud team covering design principles, systems thinking, and emerging tech applications. Available on YouTube.',
      linkText: 'Watch sessions',
      linkUrl: 'https://rb.gy/xvwogp'
    }
  ]

  const contactItems = [
    { label: 'Email', value: 'mail2umangsingh@gmail.com' },
    { label: 'Phone', value: '+91 7044703370' },
    { label: 'LinkedIn', value: 'linkedin.com/in/umangsingh123' },
    { label: 'Portfolio', value: 'umangsingh27.github.io' }
  ]

  return (
    <main className="about">

      {/* 1. HERO */}
      <section className="about-hero fade-up">
        <div className="about-hero__grid">
          <div className="about-hero__image-wrapper">
            <img
              src="/images/hero.png"
              alt="Umang Singh portrait"
              className="about-hero__image"
            />
          </div>
          <div className="about-hero__content">
            <h1 className="about-hero__headline">I'm Umang Singh. I design human-centered AI experiences that turn complexity into clarity.</h1>
            <p className="about-hero__subheading">
              Senior Product Experience Designer at NowPurchase, designing the intersection of AI and intuitive UX. I'm driven by curiosity, obsessed with solving problems, and passionate about creating experiences that compound value—work once, impact forever.
            </p>
            <p className="about-hero__tagline">
              Currently focused on: AI-driven Design Systems, B2B SaaS, and proving that great design + technology can transform entire industries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. JOURNEY NARRATIVE */}
      <section className="about-journey fade-up">
        <div className="about-journey__inner">
          <h2>How I Became a Designer</h2>
          <p className="about-journey__text">
            I've always been a problem solver. As a kid, I was the one sketching in notebooks, taking apart electrical appliances to understand how they worked, winning science fair prizes for curiosity more than anything else. That restless need to understand, fix, and improve things never left me. In college, I discovered Photoshop and Illustrator and fell in love. Within months, I'd joined the design team creating social media posts and graphics. By final year, I was leading it. But I knew I was just scratching the surface. So I took a leap. I enrolled in a Master's degree in UX/UI Design at a time when I had zero prior design degree and minimal professional experience. Every classmate had years in the industry. I was starting from zero. But that restlessness from childhood kicked in again—I couldn't accept being average. By graduation, I'd topped the university with a 9.57 CGPA. The corporate world came next, and I brought that same hunger to every role. At Winjit, I delivered 14 client projects end-to-end. At NowPurchase, I scaled adoption from 13 to 120 clients, revamped a website that generated 20x organic sessions, and started designing AI-powered experiences that are shaping how an entire industry operates. Every role taught me something: it's never about the tools. It's about understanding the human on the other side of the screen, and solving their problems in ways that feel inevitable, not clever.
          </p>
        </div>
      </section>

      {/* 3. WHAT DRIVES ME */}
      <section className="about-values fade-up">
        <div className="about-values__inner">
          <h2>What Drives Me</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card fade-up-child">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
                <div className="value-card__divider" />
                <p className="value-card__why">{value.whyItMatters}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="about-testimonials fade-up" data-theme="dark">
        <div className="about-testimonials__inner">
          <h2>What Others Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card fade-up-child">
                <p className="testimonial-card__quote">{testimonial.quote}</p>
                <p className="testimonial-card__author">{testimonial.author}</p>
                <p className="testimonial-card__title">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALWAYS LEARNING */}
      <section className="about-learning fade-up">
        <div className="about-learning__inner">
          <h2>Always Learning</h2>
          <div className="learning-grid">
            {learning.map((item, idx) => (
              <div key={idx} className="learning-card fade-up-child">
                <p className="learning-card__label">{item.label}</p>
                <h3 className="learning-card__title">{item.title}</h3>
                <p className="learning-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEACHING & THOUGHT LEADERSHIP */}
      <section className="about-teaching fade-up">
        <div className="about-teaching__inner">
          <h2>Teaching & Thought Leadership</h2>
          <div className="teaching-grid">
            <div className="teaching-left">
              <h3>Sharing Knowledge, Building Community</h3>
              <p>
                I believe great design knowledge should be shared, not hoarded. Teaching is how I give back to the community and clarify my own thinking. I've led UX Gyan Sessions for the MetalCloud team, mentored junior designers, and spoken at industry events. Through these experiences, I've learned that explaining design thinking to others is one of the most effective ways to deepen your own understanding and stay at the frontier of the field.
              </p>
            </div>
            <div className="teaching-right">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="achievement-card fade-up-child">
                  <div className="achievement-card__icon">{achievement.icon}</div>
                  <h4 className="achievement-card__title">{achievement.title}</h4>
                  <p className="achievement-card__description">{achievement.description}</p>
                  {achievement.linkUrl && (
                    <a href={achievement.linkUrl} target="_blank" rel="noopener noreferrer" className="achievement-card__link">
                      {achievement.linkText} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONNECT & CTA */}
      <section className="home-cta-section fade-up">
        <div className="home-cta__outer">
          <div className="about-cta-card">
            <h2 className="about-cta__heading">Let's work together.</h2>
            <p className="about-cta__subline">
              Open to Lead/Senior Product Designer roles at Business-to-Business Software as a Service and Artificial Intelligence-first companies.
            </p>
            <div className="about-cta__buttons">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Umang_Singh_Resume.pdf"
                className="btn btn--primary"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/umangsingh123/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
