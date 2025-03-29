---
layout: default
title: "Sachin S | Technical Writing Portfolio"
---

<section class="section" style="max-width: 960px; margin: auto;">
  <div class="container">

    <h1 class="title is-3">👋 Hi, I'm Sachin Suresh</h1>
    <p class="mb-4">
      I’m a senior technical writer specializing in product documentation, API guides, UX writing, and professional editing.
      My portfolio includes a range of enterprise-ready documentation samples — clear, concise, and effective.
    </p>

    <div class="buttons mb-5">
      <!-- <a href="assets/docs/SachinS_Resume.pdf" class="button is-link is-light" target="_blank">📄 View My Resume</a> -->
      <a href="https://www.linkedin.com/in/sachin-mca/" class="button is-dark is-light" target="_blank">🔗 Connect on LinkedIn</a>
    </div>

    <section class="section pt-0" id="featured">
      <h2 class="title is-4 mb-5">✍️ Featured Work Samples</h2>
      <hr class="my-4">
      <div class="columns is-multiline is-variable is-6 is-centered">
        {% for item in site.data.featured %}
          <div class="column is-4-desktop is-6-tablet is-12-mobile">
            <div class="box has-text-centered">
              <p class="title is-6">{{ item.icon }} <strong>{{ item.title }}</strong></p>
              <p class="has-text-weight-semibold mb-1">{{ item.product }}</p>
              <p class="mb-3">{{ item.description }}</p>
              <a href="{{ item.link_url }}" target="_blank">🔗 {{ item.link_text }}</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>

    <hr class="mt-6">

    <section class="section pt-0">
      <h2 class="title is-4 mb-3">🔗 View Full Portfolio</h2>
      <p>
        <a href="{{ site.baseurl }}/full-portfolio/">Explore all writing samples →</a> including release notes, error messages, and technical edits.
      </p>
    </section>

  </div>
</section>
