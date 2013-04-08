(function() {
    $('.blog_comments h4').append("<span class='anandcollapse' style='cursor: pointer; display: inline;'> [collapse]</span>");

    var test = /^(?:padding-left:\s?)(\d+).*/;

    var get_style = function(element) {
        var style, match, val;
        style = element.attr('style');
        val = test.exec(style);
        val ? match=val[1] : match=0;
        return match;
    };

    var get_children = function(element) {
        var parent_style, style, child;
        var children = new Array();
        
        parent_style = get_style(element);
        child = element.next().eq(0);
        style = get_style(child);

        while(style > parent_style) {
            children.push(child[0]);
            child = child.next();
            style = get_style(child);
        }
        return children;
    };
    
    $('span.anandcollapse').on('click', function() {
        var span = $(this);
        var h4 = span.parent();
        var parent_li = h4.parent();
        
        var children = get_children(parent_li);
        var operation = span.attr('class');

        if (operation === "anandcollapse") {
            $(children).each(function(i,e) { $(e).hide(); });
            span.text(' [expand]');
            h4.siblings().hide();
            span.attr('class', 'anandcollapse-collapsed');
        } else {
            $(children).each(function(i,e) { $(e).show(); });
            span.text(' [collapse]');
            h4.siblings().show();
            span.attr('class', 'anandcollapse');
        }
    });    
})();
