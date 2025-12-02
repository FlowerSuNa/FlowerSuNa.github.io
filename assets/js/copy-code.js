document.addEventListener('DOMContentLoaded', function () {
  // 모든 <pre><code> 찾기
  const codeBlocks = document.querySelectorAll('pre > code');
  
  codeBlocks.forEach(function (codeBlock) {
    const pre = codeBlock.parentNode;
  
    // wrapper div 만들기
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // 복사 버튼 생성
    const button = document.createElement('button');
    button.innerText = 'Copy';
    button.className = 'copy-btn';

    // 버튼 스타일
    // button.style.position = 'absolute';
    // button.style.top = '8px';
    // button.style.right = '8px';
    // button.style.padding = '4px 8px';
    // button.style.fontSize = '12px';
    // button.style.border = '1px solid #ccc';
    // button.style.borderRadius = '4px';
    // button.style.cursor = 'pointer';
    // button.style.background = '#f5f5f5';

    wrapper.appendChild(button);

    // 클릭 이벤트
    button.addEventListener('click', function () {
      const text = codeBlock.innerText;

      navigator.clipboard.writeText(text).then(function () {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        setTimeout(function () {
          button.innerText = originalText;
        }, 1500);
      }).catch(function (err) {
        console.error('Copy failed:', err);
        alert('Copy failed. Please check your browser permissions.');
      });
    });
  });
});
