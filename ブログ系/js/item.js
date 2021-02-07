document.addEventListener('DOMContentLoaded', function() {
    // 目次を追加する先(table of contents)
    var contentsList = document.getElementById('toc');

    // 作成する目次のコンテナ要素
    var div = document.createElement('div');

    // .entry-content配下のh2、h3要素を全て取得する
    var matches = document.querySelectorAll('.article-body-inner h1,.article-body-inner h2,.article-body-inner  h3');

    // 取得した見出しタグ要素の数だけ以下の操作を繰り返す
    matches.forEach(function(value, i) {
        var ul = document.createElement('ul');

        // 見出しタグ要素のidを取得し空の場合は内容をidにする
        value.id = value.textContent.replace(/\s/g, "");

        ul.appendChild(createLi(value));

        // 要素がh1タグの場合
        if (value.tagName === 'H1') {
            div.appendChild(ul);
        } else {
            let lastLi
            if (value.tagName === 'H2') {

                // 要素がh2タグの場合
                lastLi = createLastLi(div, 2)
                lastLi.appendChild(ul);
            } else if (value.tagName === 'H3' && value.textContent != "カテゴリなしの他の記事") {

                // 要素がh3タグの場合
                lastLi = createLastLi(div, 3)
                lastLi.appendChild(ul);
            }
        }
    });

    // 最後に画面にレンダリング
    contentsList.appendChild(div);
});

function createLi(value) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = value.textContent;
    a.href = '#' + value.id;
    li.appendChild(a)
    return li
}

function createLastLi(div, tag) {
    let lastLi = div
    for (let i = 0; i < tag; i++) lastLi = lastLi.lastElementChild
    return lastLi
}