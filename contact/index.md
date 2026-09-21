---
layout: default
title: "Contact"
---

<section class="section contact-page portfolio-page">

  <div class="container contact-shell">


    <!-- ========================================================= -->
    <!-- HERO -->
    <!-- ========================================================= -->

    <section class="contact-hero">

      <p class="eyebrow">
        LET’S CONNECT
      </p>

      <h1 class="title is-3 page-title">
        Interested in governance, knowledge systems, or responsible AI?
      </h1>

      <p class="hero-copy">
        I’m open to conversations around
        <strong>Cybersecurity Governance, Knowledge Management,
        Documentation Leadership, Technical Content Strategy,
        and emerging Responsible AI / AI Governance roles</strong>.
      </p>

    </section>



    <!-- ========================================================= -->
    <!-- CONTACT OPTIONS -->
    <!-- ========================================================= -->

    <section class="contact-grid">


      <!-- EMAIL -->

      <div class="contact-card email-contact-card">

        <div class="contact-icon">
            <img
            src="../assets/icons/email.svg"
            alt="Email">
        </div>

        <div>

            <span class="contact-label">
            EMAIL ME
            </span>

            <strong>
            sach7411.uae@gmail.com
            </strong>

            <small>
            Best for role discussions, collaborations, and direct enquiries
            </small>

            <div class="email-actions">

            <a href="mailto:sach7411.uae@gmail.com?subject=Portfolio%20Enquiry%20-%20Sachin%20Suresh">
                Open email app →
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sach7411.uae@gmail.com&su=Portfolio%20Enquiry%20-%20Sachin%20Suresh"
                target="_blank"
                rel="noopener">
                Open Gmail →
            </a>

            </div>

        </div>

        </div>



      <!-- LINKEDIN -->

      <a href="https://www.linkedin.com/in/sachin-mca/"
         target="_blank"
         rel="noopener"
         class="contact-card">

        <div class="contact-icon">
          <img
            src="../assets/icons/linkedin.svg"
            alt="LinkedIn">
        </div>

        <div>

          <span class="contact-label">
            CONNECT ON LINKEDIN
          </span>

          <strong>
            linkedin.com/in/sachin-mca
          </strong>

          <small>
            For professional networking and career conversations
          </small>

        </div>

        <b>
          →
        </b>

      </a>


    </section>



    <!-- ========================================================= -->
    <!-- EXPLORE WORK -->
    <!-- ========================================================= -->

    <section class="contact-work">

      <div>

        <p class="section-label">
          EXPLORE MY WORK
        </p>

        <h2 class="title is-5">
          Prefer to see examples first?
        </h2>

      </div>


      <div class="work-links">

        <a href="{{ '/portfolio/systems-governance/' | relative_url }}">
          <span>
            VIEW WORK
          </span>

          <strong>
            Cybersecurity Governance
          </strong>

          <b>
            →
          </b>
        </a>


        <a href="{{ '/case-studies/' | relative_url }}">
          <span>
            VIEW WORK
          </span>

          <strong>
            Transformation Case Studies
          </strong>

          <b>
            →
          </b>
        </a>

      </div>

    </section>



    <!-- ========================================================= -->
    <!-- LOCATION / AVAILABILITY -->
    <!-- ========================================================= -->

    <div class="availability-note">

      <strong>
        Abu Dhabi, UAE
      </strong>

      <span>
        Open to UAE, GCC, global, and remote opportunities
      </span>

    </div>


  </div>

</section>



<style>


/* =========================================================== */
/* PAGE */
/* =========================================================== */

.contact-page {
  max-width: 1100px;
  margin: auto;
}

.contact-shell {
  max-width: 900px !important;
}



/* =========================================================== */
/* HERO */
/* =========================================================== */

.contact-hero {
  max-width: 760px;
  margin-bottom: 2.25rem;
}

.page-title {
  margin-top: 0.35rem !important;
  margin-bottom: 0.9rem !important;
}

.contact-hero .hero-copy {
  max-width: 720px;
}



/* =========================================================== */
/* CONTACT CARDS */
/* =========================================================== */

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

.contact-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.9rem;
  align-items: center;

  min-height: 120px;

  padding: 1.1rem 1.2rem;

  border: 1px solid #e2e2e2;
  border-radius: 10px;

  background: #fff;

  color: #333;

  transition:
    border-color .18s ease,
    transform .18s ease,
    box-shadow .18s ease,
    background .18s ease;
}

.contact-card:hover {
  border-color: #3273dc;
  background: #fafcff;

  transform: translateY(-3px);

  box-shadow:
    0 8px 20px rgba(50, 115, 220, 0.10);

  color: #3273dc;
}

.contact-card:hover b {
  transform: translateX(3px);
}

.contact-icon {
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon img {
  width: 22px;
  height: 22px;
}

.contact-label {
  display: block;

  margin-bottom: 0.3rem;

  color: #3273dc;

  font-size: 0.68rem;
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.contact-card strong {
  display: block;

  font-size: 0.92rem;
  line-height: 1.35;
}

.contact-card small {
  display: block;

  margin-top: 0.35rem;

  color: #777;

  font-size: 0.78rem;
  line-height: 1.45;
}

.contact-card b {
  color: #3273dc;

  font-size: 1rem;

  transition: transform .15s ease;
}

.email-contact-card {
  cursor: default;
}

.email-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  margin-top: 0.7rem;
}

.email-actions a {
  color: #3273dc;

  font-size: 0.75rem;
  font-weight: 600;

  text-decoration: none;
}

.email-actions a:hover {
  text-decoration: underline;
}

/* =========================================================== */
/* WORK LINKS */
/* =========================================================== */

.contact-work {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 2rem;

  align-items: center;

  margin-top: 2.5rem;
  padding-top: 2rem;

  border-top: 1px solid #eee;
}

.contact-work .title {
  margin-top: 0.35rem !important;
  margin-bottom: 0 !important;
}

.work-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.work-links a {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.25rem 0.6rem;

  padding: 0.9rem 1rem;

  border: 1px solid #e2e2e2;
  border-radius: 9px;

  background: #fff;

  color: #333;

  transition:
    border-color .18s ease,
    transform .18s ease,
    box-shadow .18s ease;
}

.work-links a:hover {
  border-color: #3273dc;

  transform: translateY(-2px);

  box-shadow:
    0 7px 18px rgba(50, 115, 220, 0.08);

  color: #3273dc;
}

.work-links span {
  grid-column: 1 / -1;

  color: #3273dc;

  font-size: 0.64rem;
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.work-links strong {
  font-size: 0.82rem;
}

.work-links b {
  color: #3273dc;
}



/* =========================================================== */
/* AVAILABILITY */
/* =========================================================== */

.availability-note {
  display: flex;
  gap: 0.6rem;

  align-items: center;

  margin-top: 1.5rem;

  padding: 0.8rem 1rem;

  border-left: 3px solid #3273dc;

  background: #fafafa;
}

.availability-note strong {
  font-size: 0.82rem;
}

.availability-note span {
  color: #777;

  font-size: 0.78rem;
}



/* =========================================================== */
/* RESPONSIVE */
/* =========================================================== */

@media (max-width: 760px) {

  .contact-grid,
  .contact-work,
  .work-links {
    grid-template-columns: 1fr;
  }

  .contact-work {
    gap: 1rem;
  }

  .availability-note {
    display: block;
  }

  .availability-note span {
    display: block;
    margin-top: 0.25rem;
  }

}

</style>