const editButton=document.getElementsByClassName("editbtn");
const list = document.getElementById('myUL');
// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById('myInput').value;
  var ul = document.getElementById('myUL');
  if (inputValue === '') {
    alert('You must write something');
  } else {
    ul.innerHTML =
      ul.innerHTML +
      `<li>${inputValue}<span class="rmvbtn">Remove</span><span class="editbtn">Edit</span></li>`;
  }
  var inputValue = (document.getElementById('myInput').value = '');
  // Click on a close button to hide the current list item
  var removebutton = document.getElementsByClassName('rmvbtn');
  for (var i = 0; i < removebutton.length; i++) {
    removebutton[i].addEventListener('click', function () {
      var li = this.parentElement;
      li.style.display = 'none';
    });
  }
  for (var i = 0; i < editbutton.length; i++) {
    editbtn.addEventListener('click', function () {
      console.log('editing');

      list.contentEditable = true;
    });
  }
}
