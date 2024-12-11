export function saveBlob(blob: Blob, fileName: string) {
    var a = document.createElement('a');
    const objurl = window.URL.createObjectURL(blob)
    a.href = objurl;
    a.download = fileName;
    a.dispatchEvent(new MouseEvent('click'));
    // revoke the object URL after 30 seconds
    setTimeout(() => {
        window.URL.revokeObjectURL(objurl);
    }, 30 * 1000);
}