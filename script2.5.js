function showDropdownElements() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function editProf(){
    // Get the modal element
    var modal = document.getElementById("editModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("edit");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // Function to open the modal
    function openModal() {
      modal.style.display = "block";
    }
    
    // Function to close the modal
    function closeModal() {
      modal.style.display = "none";
    }
    
    // Event listener for button click
    btn.addEventListener("click", openModal);
    
    // Event listener for close button click
    span.addEventListener("click", closeModal);
    
    // Event listener for outside click
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        closeModal();
      }
    });
    }
    