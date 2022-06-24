'use strict';
const btnExport = document.getElementById("export-btn");
const btnImport = document.getElementById("import-btn");
const fileInput = document.getElementById("input-file");

btnExport.addEventListener("click", function () {
    const isExport = confirm("Export file?");
    if (isExport) {
        saveStaticDataToFile();
    }
});

function saveStaticDataToFile() {
    const blob = new Blob([JSON.stringify(getFromStorage("petArr"), null, 2)],
        { type: "application/json" });

    //save file
    saveAs(blob, "petData.json");
}

btnImport.addEventListener("click", function () {
    if (!fileInput.value) {
        alert("Choose file again!");
    } else {
        const isImport = confirm("Import file?");
        if (isImport) {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.addEventListener(
                "load",
                function () {

                    if (file) {
                        reader.readAsText(file);
                    }
                    fileInput.value = "";
                }
            )
        }
    }
});
