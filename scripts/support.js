function showSupBanner() {
  // 重要！
  // 每次更新此脚本，可以打开或关闭下面这行注释，使得脚本长度发生变化
  console.log();

  // 2021年9月6日
  var deadline = new Date(2021, 8, 6);
  if (deadline - (new Date()) < 0) return;

  // scope check
  var scope = 'all';
  var currentScope = window.location.pathname.split('/')[1];
  if (scope !== 'all' && !scope.includes(currentScope)) return;

  // page path check
  if (typeof LOPPO === 'undefined') return;
  if (!LOPPO.current_path || LOPPO.current_path.substr(-1) === '/') return;

  // create banner node
  var bannerDiv = document.createElement('div');
  var bannerP = document.createElement('p');
  bannerDiv.appendChild(bannerP);

  // bannerP.innerHTML = '<picture style="display:block;text-align:center;margin-bottom:1rem;"><source srcset="https://www.wangbase.com/blogimg/asset/202005/bg2020051215.jpg" media="(min-width: 600px)"><img src="https://www.wangbase.com/blogimg/asset/202005/bg2020051216.jpg" style="max-height:200px;border-radius: 15px;text-align: center;"></picture>';

  var styleStr = [
    'margin: 2rem 0',
    'padding: 1em',
    'background-color: #c4e0e1',
    'border-radius: 5px',
    'font-size: 90%',
    // 'font-size: 75%',
    // 'width: 210px',
    'color: #333333'
  ].join(';');
  var text = '【免费资料】' +
    '开课吧<span style="color: #4682BE;">《前端工程化实战》</span>，精品课领取，教你从零构建一个 Vue 组件库，动手实践“开发 ➜ 单元测试 ➜ Lint 检查 ➜ 构建打包 ➜ 发布”全过程，最后编写一个 CLI 命令行工具，自动化整个流程。';

  bannerP.style = styleStr;
  bannerP.innerHTML = '<a href="https://t.1yb.co/xNLY" target="_blank" style="color: #333333;">' + text + '</a>';

  // insert into page
  var metaNode = document.querySelector('.page-meta');
  if (!metaNode) return;
  metaNode.parentElement.insertBefore(bannerDiv, metaNode.nextSibling);

  // console.log('loaded');
}

showSupBanner();
