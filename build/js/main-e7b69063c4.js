!function(){"use strict";function e(){var e=this.value,t=this.dataset.canonical;"en"===e&&(e=""),e&&(e+="/"),location.href="/"+e+t}var t=document.getElementById("lang-select"),n=document.getElementById("mobile-lang-select");t&&t.addEventListener("change",e),n&&n.addEventListener("change",e)}(),function(){"use strict";function e(){var e=document.scrollingElement.scrollTop;e>i?n.classList.add("fixed"):n.classList.remove("fixed")}var t=document.getElementById("header"),n=document.getElementById("article-toc"),c=document.getElementById("article-toc-top"),i=t.clientHeight;n&&(window.addEventListener("scroll",function(){window.requestAnimationFrame(e)}),e(),c.addEventListener("click",function(e){e.preventDefault(),document.scrollingElement.scrollTop=0}))}(),function(){"use strict";var e=document.getElementsByTagName("body")[0],t=document.getElementById("mobile-nav-toggle"),n=document.getElementById("mobile-nav-dimmer"),c="mobile-nav-on";t&&(t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),e.classList.toggle(c)}),n.addEventListener("click",function(t){e.classList.contains(c)&&(t.preventDefault(),e.classList.remove(c))}))}();