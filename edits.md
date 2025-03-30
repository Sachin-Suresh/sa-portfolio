---
layout: default
title: Edits
permalink: /edits/
---

<section class="section pt-6">
  <div class="container has-text-centered">
    <h1 class="title is-3 has-text-weight-bold mb-2">✏️ Edits & Rewrites</h1>
    <hr class="my-4">

    <div class="notification is-info is-light" style="padding: 1.5rem 1rem;">
        <div class="columns is-vcentered is-desktop is-variable is-4">

            <!-- 📘 Text Instructions -->
            <div class="column is-half-desktop is-full-mobile">
                <h2 class="title is-6 mb-4">📘 How to View My Edits:</h2><br>
            <div class="ml-2" style="text-align: left;">
                <ol class="custom-steps">
                    <li><strong>Download</strong> the PDF 📥</li>
                    <li>Switch to <strong>Two-page view</strong> in your PDF reader</li>
                </ol>

                <div class="mt-5">
                    <span class="tag is-danger is-light mr-2">🔴 Original text (Left)</span>
                    <span class="tag is-success is-light">🟢 Edited text (Right)</span>
                </div>
            </div>
            </div>

            <!-- 🖼 Screenshot Image -->
            <div class="column is-half has-text-centered">
            <figure class="image" style="max-width: 350px; margin: 0 auto;">
                <img src="{{ site.baseurl }}/assets/images/2page_view.png" alt="Two-page view screenshot" title="Go to View > Page Display > Two-Page View" style="max-width: 300px; height: auto; border-radius: 8px; border: 1px solid #ccc;" />
            </figure>
            </div>

        </div>
    </div>

    <div class="columns is-multiline is-variable is-6 is-centered">
      {% for item in site.data.edits %}
        <div class="column is-4">
          <div class="box has-text-centered">
            <p class="title is-6">{{ item.icon }} <strong>{{ item.title }}</strong></p>
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
