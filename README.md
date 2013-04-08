## Bookmarklet for making comment threads on anandtech.com collapsible.

Recommended to be used when viewing all comments on a single page. Otherwise, collapsing the first comment may result in an empty comment div since all the comments displayed on the page are replies to the collapsed comment.

I use John Gruber's (JavaScript Bookmarklet Builder)[http://daringfireball.net/2007/03/javascript_bookmarklet_builder] to convert anandcollapse.js to a usable bookmarklet.
You can also drag the link below to your bookmark bar.

(anandcollapse)[javascript:(function()%20{$(%27.blog_comments%20h4%27).append(%22<span%20class=%27anandcollapse%27%20style=%27cursor:%20pointer;%20display:%20inline;%27>%20[collapse]</span>%22);var%20test%20=%20/^(?:padding-left:\s?)(\d+).*/;var%20get_style%20=%20function(element)%20{var%20style,%20match,%20val;style%20=%20element.attr(%27style%27);val%20=%20test.exec(style);val%20?%20match=val[1]%20:%20match=0;return%20match;};var%20get_children%20=%20function(element)%20{var%20parent_style,%20style,%20child;var%20children%20=%20new%20Array();parent_style%20=%20get_style(element);child%20=%20element.next().eq(0);style%20=%20get_style(child);while(style%20>%20parent_style)%20{children.push(child[0]);child%20=%20child.next();style%20=%20get_style(child);}return%20children;};$(%27span.anandcollapse%27).on(%27click%27,%20function()%20{var%20span%20=%20$(this);var%20h4%20=%20span.parent();var%20parent_li%20=%20h4.parent();var%20children%20=%20get_children(parent_li);var%20operation%20=%20span.attr(%27class%27);if%20(operation%20===%20%22anandcollapse%22)%20{$(children).each(function(i,e)%20{%20$(e).hide();%20});span.text(%27%20[expand]%27);h4.siblings().hide();span.attr(%27class%27,%20%27anandcollapse-collapsed%27);}%20else%20{$(children).each(function(i,e)%20{%20$(e).show();%20});span.text(%27%20[collapse]%27);h4.siblings().show();span.attr(%27class%27,%20%27anandcollapse%27);}});})();]
