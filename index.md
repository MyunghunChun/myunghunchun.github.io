---
layout: default
title: Home
---

<section id="hero" class="hero">
  <h2>Hello — I'm Myunghun</h2>
  <p>Software engineer. I build web apps and write about design & code.</p>
  <p><a class="cta" href="#projects">See my work</a></p>
</section>

<section id="about" class="about">
  ## About
  I'm a developer who likes clean interfaces and readable code. Replace this paragraph with your own bio.
</section>

<section id="projects" class="projects">
  ## Projects
  <div class="project-grid">
  - **Project One** — Short description. [View →](/projects/project-one/)
  - **Project Two** — Short description. [View →](/projects/project-two/)
  - **Project Three** — Short description. [View →](/projects/project-three/)
  </div>
</section>

<section id="blog" class="blog">
  ## Latest Posts
  {% for post in site.posts limit:5 %}
  - <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%b %-d, %Y" }}</small>
  {% endfor %}
  <p><a href="/blog/">Read all posts →</a></p>
</section>

<section id="contact" class="contact">
  ## Contact
  Email: your-email@example.com
</section>