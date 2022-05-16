const add_btn = document.getElementById('add') ;
const modal = document.getElementById('modal'); 
const influencer = document.getElementById('name');
const link = document.getElementById('link');
const image = document.getElementById('upfile');
const remove_btn = document.getElementById('remove')
const image_name = document.getElementById('image-name')
const form = document.getElementById('form')

window.addEventListener('reload', () => {
    form.reset()
})

add_btn.addEventListener('click', () => {
    modal.style.display = 'flex'
    
})
window.addEventListener('click', () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
remove_btn.addEventListener('click', () => {
    image.value = null
    image_name.innerHTML = "Upload Image"
})
const getFile = () => {
    document.getElementById("upfile").click();
}
const sub = (obj) => {
    var file = obj.value;
    var fileName = file.split("\\");
    image_name.innerHTML = fileName[fileName.length - 1];
}

const cancel = (e) => {
    influencer.value = null;
    link.value = null;
    image.value = null
    image_name.innerHTML = "Upload Image"
}



