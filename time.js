function updateTime() {
    const now = new Date();
    
    // 獲取年月日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份是從0開始的
    const date = String(now.getDate()).padStart(2, '0');
    
    // 獲取時分秒
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // 格式化顯示內容
    const currentTime = `現在時間是： ${year}年${month}月${date}日 ${hours}時${minutes}分${seconds}秒`;
    
    document.getElementById('current-time').innerText = currentTime;
}

// 每秒更新一次時間
setInterval(updateTime, 1000);

// 首次執行以顯示立即的時間
updateTime();
