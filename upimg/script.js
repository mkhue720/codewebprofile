document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file");
    const img = document.getElementById("img");
    const url = document.getElementById("image-link");
    const copyButton = document.getElementById("copy-button");
    const imagePreview = document.getElementById("image-preview");

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            uploadImageToImgur(file);
        }
    });

    copyButton.addEventListener("click", function () {
        copyTextToClipboard(url.value);
    });

    function uploadImageToImgur(imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: "Client-ID aa554832950b065", // Thay thế bằng Client-ID của bạn
            },
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Lỗi khi tải lên hình ảnh.");
                }
                return response.json();
            })
            .then((data) => {
                img.src = data.data.link;
                url.value = data.data.link;
                copyButton.style.display = "block"; // Hiển thị nút "Copy"
            })
            .catch((error) => {
                console.error("Lỗi khi tải lên hình ảnh:", error);
            });
    }

    function copyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Liên kết đã được sao chép vào clipboard!");
    }
});
