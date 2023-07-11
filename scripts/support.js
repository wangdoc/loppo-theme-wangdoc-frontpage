const Tutorials = [
  ['HTML 教程', '/html'],
  ['JavaScript 教程', '/javascript'],
  ['ES6 教程', '/es6'],
  ['Web API 教程', '/webapi'],
  ['C 语言教程', '/clang'],
  ['Bash 教程', '/bash'],
  ['SSH 教程', '/ssh']
];

function showDropdownMenu() {
  var menu = document.querySelector('nav div.container div.navbar-menu');
  if (!menu) return;

  var start = document.createElement('div');
  start.classList.add('navbar-start');

  var item = document.createElement('div');
  item.classList.add('navbar-item');
  item.classList.add('has-dropdown');
  item.classList.add('is-hoverable');

  var arrow = document.createElement('a');
  arrow.classList.add('navbar-link');
  arrow.classList.add('is-hidden-touch');
  item.appendChild(arrow);

  var dropdown = document.createElement('div');
  dropdown.classList.add('navbar-dropdown');

  for (var i = 0; i < Tutorials.length; i++) {
    var link = document.createElement('a');
    link.classList.add('navbar-item');
    link.href = Tutorials[i][1];
    var textNode = document.createTextNode(Tutorials[i][0]);
    link.appendChild(textNode);
    dropdown.appendChild(link);
  }

  item.appendChild(dropdown);
  start.appendChild(item);

  var end = document.querySelector('nav div.container div.navbar-menu div.navbar-end');
  if (end) {
    menu.insertBefore(start, end);
  } else {
    menu.appendChild(start);
  }
}

function showSupBanner() {
  // 重要！
  // 每次更新此脚本，可以打开或关闭下面这行注释，使得脚本长度发生变化
  // console.log();

  // 2022年5月23日
  var deadline = new Date(2022, 4, 23);
  if (deadline - (new Date()) < 0) return;

  // scope check
  var scope = 'all';
  var currentScope = window.location.pathname.split('/')[1];
  // if (currentScope === 'clang') return;
  if (scope !== 'all' && !scope.includes(currentScope)) return;

  // page path check
  if (typeof LOPPO === 'undefined') return;
  if (!LOPPO.current_path || LOPPO.current_path.substr(-1) === '/') return;

  // create banner node
  var bannerDiv = document.createElement('div');
  bannerDiv.classList.add('notification', 'is-link', 'is-light', 'is-size-7', 'p-3');
  var bannerButton = document.createElement('button');
  bannerButton.classList.add('delete');
  bannerButton.setAttribute('onclick', 'this.parentNode.parentNode.removeChild(this.parentNode)');
  bannerDiv.appendChild(bannerButton);

  var bannerP = document.createElement('p');
  bannerDiv.appendChild(bannerP);

  // bannerP.innerHTML = '<picture style="display:block;text-align:center;margin-bottom:1rem;"><source srcset="https://www.wangbase.com/blogimg/asset/202005/bg2020051215.jpg" media="(min-width: 600px)"><img src="https://www.wangbase.com/blogimg/asset/202005/bg2020051216.jpg" style="max-height:200px;border-radius: 15px;text-align: center;"></picture>';

/*  var styleStr = [
    'margin: 2rem 0',
    'padding: 1em',
    'background-color: #c4e0e1',
    'border-radius: 5px',
    'font-size: 95%',
    // 'font-size: 75%',
    // 'width: 210px',
    'color: #333333'
  ].join(';'); */
  var text = '<i class="fa fa-hand-o-right" aria-hidden="true"></i> API 开发管理神器<span style="color: #4682BE;font-weight: 700;"> Apifox</span>，同时集成 Postman + Swagger + Mock + JMeter，API 文档、API 调试、API Mock、API 自动测试一体化，点击<span style="color: #4682BE;font-weight: 700;">这里</span>下载使用。';

  // bannerP.style = styleStr;
  bannerP.innerHTML = '<a href="https://www.apifox.cn/?utm_source=wangdao" target="_blank" style="color: #333333;text-decoration:none;">' + text + '</a>';

  // insert into page
  var metaNode = document.querySelector('.page-meta');
  if (!metaNode) return;
  metaNode.parentElement.insertBefore(bannerDiv, metaNode.nextSibling);

  // console.log('loaded');
}

showDropdownMenu();
showSupBanner();
