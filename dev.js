/**
 * @fileOverview OurJS 开发版。
 * @author sundongguo@gmail.com
 * @version 20120213
 */
//==================================================[引入开发中的脚本文件]
//--------------------------------------------------[import]
(function() {
  var scripts = [
    '<script src="/framework/src/lang.js"></script>',
    '<script src="/framework/src/browser.js"></script>',
    '<script src="/framework/src/dom.js"></script>',
    '<script src="/framework/src/features.js"></script>',
    '<script src="/framework/src/animation.js"></script>',
    '<script src="/framework/src/request.js"></script>',
    '<script src="/framework/src/widget.js"></script>',
    '<script src="/framework/src/integrated/sizzle.js"></script>'
  ];
  if (!window.JSON) {
    scripts.push('<script src="/framework/src/integrated/json2.js"></script>');
  }
  if (document.documentElement.currentStyle && !document.documentElement.currentStyle.minWidth) {
    scripts.push('<script src="/framework/src/utilities/console.js"></script>');
  }
  document.write(scripts.join('\n'));
})();
