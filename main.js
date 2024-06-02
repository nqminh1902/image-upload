function displayFileInfo() {
    const fileInput = document.getElementById("fileInput");

    // Kiểm tra xem có file đã được chọn chưa
    if (fileInput.files.length > 0) {
        const fileInfo = fileInput.files[0];

        // Tạo một đối tượng chứa thông tin về tệp
        const fileDetails = {
            name: fileInfo.name,
            type: fileInfo.type,
            size: fileInfo.size,
            lastModified: fileInfo.lastModified,
        };

        // Hiển thị thông tin file dưới dạng JSON trên HTML
        const fileInfoElement = document.getElementById("fileInfo");
        fileInfoElement.textContent = JSON.stringify(fileDetails, null, 2);
    } else {
        // Nếu không có file nào được chọn
        const fileInfoElement = document.getElementById("fileInfo");
        fileInfoElement.textContent = "Không có file nào được chọn.";
    }
}

// Lắng nghe sự kiện khi tệp được chọn
document
    .getElementById("fileInput")
    .addEventListener("change", displayFileInfo);
