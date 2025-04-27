let lastClickTime = 0; // 이전 클릭 시간 저장
const doubleClickThreshold = 500; // 더블클릭 최대 시간 간격 (밀리초)

document.addEventListener('click', function(event) {
    const currentClickTime = new Date().getTime(); // 현재 클릭 시간
    
    if (currentClickTime - lastClickTime <= doubleClickThreshold) {
        console.log('더블클릭 감지!'); // 더블클릭으로 인식
        // 원하는 동작 수행
    }
    
    lastClickTime = currentClickTime; // 클릭 시간 업데이트
});