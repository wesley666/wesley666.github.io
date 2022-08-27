hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file('video-banner', 'source/_inject/header.ejs', { key: 'value' }, -1);
  injects.footer.raw('default-a', '<script async defer data-website-id="435eb2a5-f5a8-4d9f-96fa-1f961328aa51" src="https://umami-wesley.up.railway.app/vue.js"></script>');
});