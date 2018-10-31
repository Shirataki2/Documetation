(function() {
$(function() {
var contents = '';
var regSpace = /^s*$/;
var ignoreNodeType = ['SCRIPT', 'PRE'];
$("p").contents().each(function() {
    var s = $(this).text().replace(/ ? /g, '');
    if (regSpace.test(s)) return;
    if (s === '<!-- more -->') return;
    if ($.inArray(this.nodeName, ignoreNodeType) !== -1) return;
    s = s.replace(/s/g, '');
    contents += s;
    });
    let min = ~~($('#est').attr('class'));
    const red = (contents.length / (min === undefined ? 400 : min))
    console.log(3/min);
$('#est').append('この記事を読むのに必要な時間は約<span>' + Math.ceil(red) + '</span>分です。');
        })
})();