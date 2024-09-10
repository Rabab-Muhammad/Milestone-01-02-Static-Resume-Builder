document.getElementById('resumeForm')?.addEventListener('submit',function(event) {
    event.preventDefault();

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile?URL.createObjectURL(profilePictureFile): "";

const resumeOutput =`
    <h2>Resume</h2>
    ${profilePictureFile? `<img src="${profilePictureURL}" alt ="Profile Picture" class="profilePicture">`: '' }