!function translateGithub(){
    // 汉化模板
    var pages = {};
    function addPage(name) {
        pages[name] = {};
        pages[name].star = {};
        pages[name].text = {};
        pages[name].watch = {};
    }

    function addTranslate(page, type, selector, value) {
        pages[page][type][selector] = value;
    }

    // 模板
    addPage('default');
    addTranslate('default', "text", "body>div.header.header-logged-in.true>div>ul.header-nav.left>li:nth-child(1)>a", "请求列表");
    addTranslate('default', "text", "body>div.header.header-logged-in.true>div>ul.header-nav.left>li:nth-child(2)>a", "问题列表");
    addTranslate('default', "text", "div.container a[data-hotkey='g c'] span", "代码");
    addTranslate('default', "text", "div.container a[data-hotkey='g i'] span[class!='counter']", "问题");
    addTranslate('default', "text", "div.container a[data-hotkey='g p'] span[class!='counter']", "请求");
    addTranslate('default', "text", "div.container a[data-hotkey='g w']", "知识");

    addTranslate('default', "star", "ul.pagehead-actions button[aria-label$='tar this repository']", "收藏");
    addTranslate('default', "star", "ul.pagehead-actions button[aria-label$='tar this repository']", "收藏");

    addTranslate('default', "text", "ul.pagehead-actions span.select-menu-title", "提醒");
    addTranslate('default', "watch", "ul.pagehead-actions div.select-menu-item-text>input[value='included']", "不关注");
    addTranslate('default', "watch", "ul.pagehead-actions div.select-menu-item-text>input[value='subscribed']", "关注");
    addTranslate('default', "watch", "ul.pagehead-actions div.select-menu-item-text>input[value='ignore']", "屏蔽");

    function translate(pageType) {
        translateByPageType("default");
    }

    function translateByPageType(name) {
        var json = pages[name];

        var text = json.text;
        for(var selector in text) {
            $(selector).text(text[selector]);
        }

        var star = json.star;
        for(var selector in star){
            var objs = $(selector);
            objs[1].innerHTML = objs[1].innerHTML.replace(/Star/g, star[selector]);
            objs[0].innerHTML = objs[0].innerHTML.replace(/Unstar/g, "取消" + star[selector]);
        }

        var watch = json.watch;
        for(var selector in watch){
            var parent = $(selector).parent();
            parent.children("span.select-menu-item-heading").text(watch[selector]);
            // 按钮标题更改未成功
            // var tmp = parent.children("span.js-select-button-text")[0].innerHTML;
            // tmp = tmp.replace(/Watch/g, "关注");
            // tmp = tmp.replace(/Unwatch/g, "取消关注");
            // tmp = tmp.replace(/Stop ignoring/g, "已屏蔽");
        }
    }
    // 实际汉化
    translate('default');
}()
