hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file('video-banner', 'source/_inject/header.ejs', { key: 'value' }, -1);
  injects.footer.raw('default', '<script async defer data-website-id="dcb701b2-2067-41e4-9ee4-24826173cd35" src="https://wesley-umami.up.railway.app/vue.js"></script>');
});