---
layout: default
title: Featured Work Samples
permalink: /featured/
---

<section class="section pt-6" id="featured" class="anchor-offset">
  <div class="container has-text-centered">
    <h1 class="title is-3 has-text-weight-bold mb-2">✍️ Featured Work Samples</h1>
    <hr class="my-4">

    <div class="columns is-multiline is-variable is-6 is-centered">
      {% for item in site.data.featured %}
        <div class="column is-4">
          <div class="box has-text-centered">
            <p class="title is-6">{{ item.icon }} <strong>{{ item.title }}</strong></p>
            <p class="has-text-weight-semibold mb-2">{{ item.product }}</p>
            <p class="mb-3">{{ item.description }}</p>
            <a href="{{ item.link_url }}" target="_blank">🔗 {{ item.link_text }}</a>
          </div>
        </div>
      {% endfor %}
    </div>

    <div class="mt-5">
      <a class="button is-light" href="{{site.url}}{{site.baseurl}}/">← Back to Home</a>
    </div>
  </div>
</section>
