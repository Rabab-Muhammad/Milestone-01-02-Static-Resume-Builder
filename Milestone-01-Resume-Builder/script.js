var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureFile ? "<img src=\"".concat(profilePictureURL, "\" alt =\"Profile Picture\" class=\"profilePicture\">") : '');
});
