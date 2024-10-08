---
layout: default
title: Home
---

# Welcome to My Website

这是我的个人网站。

## Latest Posts


总共有 {{ site.posts | size }} 篇文章。

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% else %}
    <li>No posts found.</li>
  {% endfor %}
</ul>


{% for post in site.posts %}
  <a href="http://alfred-sun.github.io/blog/2015/01/10/jekyll-liquid-syntax-documentation/{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt | remove: 'test' }}
{% endfor %}