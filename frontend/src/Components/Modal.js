export const openDialog = (courseId) => {
    const dialogRef = document.getElementById(`dialog-${courseId}`);
    if (dialogRef) {
        dialogRef.showModal();
    }
};

export const closeDialog = (courseId) => {
    const dialogRef = document.getElementById(`dialog-${courseId}`);
    if (dialogRef) {
        dialogRef.close();
    }
}
