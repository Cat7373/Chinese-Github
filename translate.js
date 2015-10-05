!function(){
    // 汉化模板
    var pages = {};
    function addPage(name) {
        pages[name] = {};
        pages[name].html = {};
        pages[name].text = {};
    }

    function addTranslate(page, selector, type, value) {
        pages[page][type][selector] = value;
    }
    // 测试模板
    addPage('default');
    addTranslate('default', "body>div.header.header-logged-in.true>div>ul.header-nav.left>li:nth-child(1)>a", "text", "Pull 请求列表");
    addTranslate('default', "body>div.header.header-logged-in.true>div>ul.header-nav.left>li:nth-child(2)>a", "text", "问题");
    addPage('test');

    // 获取页面类型
    function pageType() {
        return "test";
    }

    function translate(pageType) {
        translateByType("default");
        translateByType(pageType);
    }

    function translateByType(type) {
        var json = pages[type];
        var html = json.html;
        for(var selector in html) {
            $(selector).html(html[selector]);
        }

        var text = json.text;
        for(var selector in text) {
            $(selector).text(text[selector]);
        }
    }

    // 实际汉化
    translate(pageType());
}();
