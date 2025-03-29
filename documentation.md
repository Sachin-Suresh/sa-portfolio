---
layout: default
title: Documentation Samples
permalink: /documentation/
---

<section class="section pt-6">
  <div class="container has-text-centered">

    <!-- Page Title -->
    <h1 class="title is-3 has-text-weight-bold mb-2">Documentation Samples</h1>
    <hr class="my-4">

    <!-- Card Grid -->
    <div class="columns is-multiline is-variable is-6 is-centered">
      {% for doc in site.data.documentation %}
        <div class="column is-6-tablet is-4-desktop">
          <div class="box has-text-centered">
            <p class="title is-6">{{ doc.icon }} <strong>{{ doc.title }}</strong></p>
            <p class="has-text-weight-semibold mb-2">{{ doc.product }}</p>
            <p class="mb-3">{{ doc.description }}</p>
            <a href="{{ doc.link_url }}" target="_blank">🔗 {{ doc.link_text }}</a>
          </div>
        </div>
      {% endfor %}
    </div>

    <!-- Back Button -->
    <div class="mt-5">
      <a class="button is-light" href="{{site.url}}{{site.baseurl}}/">← Back to Home</a>
    </div>

  </div>
</section>
