document.addEventListener('mousedown', function(event) {
    // 클릭 위치에 따라 효과 생성
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.style.left = `${event.clientX - 10}px`;
    effect.style.top = `${event.clientY - 10}px`;
    document.body.appendChild(effect);
  
    // 애니메이션 후 요소 제거
    setTimeout(() => {
      effect.remove();
    }, 450); // 애니메이션 지속 시간과 동일
  });