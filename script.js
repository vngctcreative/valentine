const messages = [
    "Vợ có chắc không?",
    "Thực sự chắc chắn không??",
    "vợ thực sự tích cực bấm không??",
    "Thật luôn hả vợ ...",
    "Hãy nghĩ về nó đi, ắt hẳn sẽ tuyệt vời mà!",
    "Nếu vợ nói không, chồng sẽ rất buồn...",
    "Chồng sẽ rất buồn nếu như vợ không đồng ý...",
    "Chồng sẽ rất rất rất rất rất buồn...",
    "Được rồi, chồng sẽ ngừng hỏi...",
    "Đùa thôi mà, làm ơn nói có đi !!! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
