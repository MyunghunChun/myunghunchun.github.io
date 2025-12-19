// Smooth scroll + year + mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  // current year
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      var target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block: 'start'});
        // close mobile nav if open
        if(window.innerWidth < 900){
          document.getElementById('site-nav').style.display = 'none';
        }
      }
    });
  });

  // mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      if(siteNav.style.display === 'block') siteNav.style.display = 'none';
      else siteNav.style.display = 'block';
    });
  }
});