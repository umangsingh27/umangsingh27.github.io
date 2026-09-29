import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountAnimation } from '../hooks/useCountAnimation'
import LazyImage from '../components/LazyImage'
import Button from '../components/Button'
import Icon from '../components/Icon'
import './About.css'

export default function About() {

  useEffect(() => {
    document.title = 'About — Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.3)

  const values = [
    {
      icon: 'systems',
      title: 'Build Systems, Not Screens',
      description: 'A design system that scales beats a brilliant one-off. I build reusable components, patterns, and frameworks that let teams ship faster and stay consistent.',
      whyItMatters: 'The shared system covers NowPurchase and MetalCloud; reduced inconsistencies and faster handoff are rollout targets.'
    },
    {
      icon: 'field',
      title: 'Go to Where the Work Happens',
      description: 'The foundry floor taught me more than any design brief ever could. I observe real users in real context, not in meeting rooms.',
      whyItMatters: 'Understanding the spectrometer machine meant designing specs that actually work on the shop floor, not in theory.'
    },
    {
      icon: 'iterate',
      title: 'Ship Ugly. Validate. Polish.',
      description: 'Speed matters more than perfection on day one. Launch early with an MVP, measure what users actually do, then refine based on data—not assumptions.',
      whyItMatters: 'MetalCloud went from concept to production in 45 days. The refinement happened post-launch, guided by real usage.'
    },
    {
      icon: 'ai',
      title: 'Design at the AI Frontier',
      description: 'AI is rewriting what design can do. I build AI agents and intelligent systems that prove beautiful, intuitive design amplifies technology.',
      whyItMatters: 'The next competitive advantage isn\'t the feature set—it\'s how well the AI understands and anticipates the user.'
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
      label: 'Reading',
      icon: 'book',
      title: '"The Beginning of Infinity" by David Deutsch',
      description: 'Exploring how systems of knowledge and problem-solving transfer across domains—thinking about epistemology in design systems.'
    },
    {
      label: 'Building',
      icon: 'build',
      title: 'An n8n + Claude RFQ-to-quote Agent',
      description: 'Applying everything I\'ve learned about AI design to a foundry use case: an autonomous agent that handles quote generation from raw material requests.'
    },
    {
      label: 'Speaking',
      icon: 'speaking',
      title: 'Friends of Figma 2025 — "Design at the AI Frontier"',
      description: 'Sharing lessons from two years building AI-powered experiences: what works, what doesn\'t, and how design enables AI (not the other way around).'
    }
  ]

  const achievements = [
    {
      icon: 'speaking',
      title: 'Lead Speaker at Friends of Figma',
      description: 'Spoke at Friends of Figma Kolkata about what Config 2026 means for product designers building with AI.',
      linkText: 'Watch Session',
      linkUrl: 'https://www.youtube.com/watch?v=15OKpiRyF9E'
    },
    {
      icon: 'trophy',
      title: 'NowPurchase Hackathon — Best Presenter & Runner-up',
      description: 'Recognized for "AI-based purchase prediction" project in 2023. Demonstrated how design thinking applies to AI-driven features.'
    },
    {
      icon: 'teaching',
      title: 'UX Gyan Sessions',
      description: 'Conducted regular teaching sessions for MetalCloud team covering design principles, systems thinking, and emerging tech applications. Available on YouTube.',
      linkText: 'Watch sessions',
      linkUrl: 'https://rb.gy/xvwogp'
    }
  ]

  return (
    <main className="about">

      {/* 1. HERO */}
      <section className="about-hero fade-up">
        <div className="about-hero__grid">
          <div className="about-hero__image-wrapper">
            <LazyImage
              src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/hero.png`}
              alt="Umang Singh portrait"
              className="about-hero__image"
              priority={true}
            />
          </div>
          <div className="about-hero__content">
            <h1 className="about-hero__headline">I design B2B SaaS that ships.</h1>
            <p className="about-hero__subheading">
              Lead Product Designer at NowPurchase. I lead design across MetalCloud (IoT + AI for foundry operations), our procurement platform, and the shared design system. Driven by clarity, obsessed with solving real problems, and focused on shipping work that compounds impact.
            </p>
            <p className="about-hero__tagline">
              Currently focused on: AI-driven Design Systems, B2B SaaS, and proving that great design + technology can transform entire industries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. JOURNEY */}
      <section className="about-journey-reveal">
        <div className="about-journey-reveal__header">
          <div className="about-journey-reveal__inner">
            <h2 className="fade-up">How I Became a Designer</h2>
          </div>
        </div>
        <div className="about-journey-copy fade-up">
          <p>I started by sketching in notebooks and taking apart appliances. In college I discovered Photoshop; by my final year I was leading the design team. I later earned a Master's in UX/UI Design, graduating with a 9.57 CGPA.</p>
          <p>At Winjit, I worked on client projects. At NowPurchase, my work has included MetalCloud, a shared design system, and the website revamp. MetalCloud grew from 13 to 120 clients, and the site reported 20× organic sessions within six months of the revamp.</p>
          <p>Across those projects, I keep coming back to the person using the product and the context they work in.</p>
        </div>
      </section>

      {/* 3. WHAT DRIVES ME */}
      <section className="about-values fade-up">
        <div className="about-values__inner">
          <h2>What Drives Me</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card fade-up-child">
                <span className="value-card__icon icon-tile"><Icon name={value.icon} size={25} /></span>
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
      <section id="testimonials" className="about-testimonials fade-up" data-nav-theme="dark">
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
                <span className="learning-card__icon icon-tile"><Icon name={item.icon} size={25} /></span>
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
                  <span className="achievement-card__icon icon-tile"><Icon name={achievement.icon} size={25} /></span>
                  <h4 className="achievement-card__title">{achievement.title}</h4>
                  <p className="achievement-card__description">{achievement.description}</p>
                  {achievement.linkUrl && (
                    <a href={achievement.linkUrl} target="_blank" rel="noopener noreferrer" className="achievement-card__link">
                      {achievement.linkText} <Icon name="arrowRight" size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONNECT & CTA */}
      <section className="home-cta-section fade-up" data-nav-theme="dark">
        <div className="home-cta__outer">
          <div className="about-cta-card">
            <h2 className="about-cta__heading">Let's work together.</h2>
            <p className="about-cta__subline">
              Open to Lead Product Designer roles at B2B SaaS and AI-first companies.
            </p>
            <div className="about-cta__buttons">
              <Button
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Umang_Singh_Resume.pdf"
                variant="primary"
              >
                Download Resume
              </Button>
              <Button
                href="https://www.linkedin.com/in/umangsingh123/"
                target="_blank"
                variant="secondary"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
