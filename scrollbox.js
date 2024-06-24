// Simulated data for the links
const linkData = [
    "Link 1",
    "Link 2",
    "Link 3",
    "Link 4",
    "Link 5",
    "Link 6",
    // Add more links as needed
  ];
  
  const linkList = document.getElementById('linkList');
  
  // Function to populate the link list
  function populateLinkList() {
    linkList.innerHTML = ''; // Clear existing content
  
    linkData.forEach(link => {
      const li = document.createElement('li');
      li.textContent = link;
      linkList.appendChild(li);
    });
  }
  
  // Initial population
  populateLinkList();
  
  // Infinite scrolling simulation
  linkList.addEventListener('scroll', function() {
    if (linkList.scrollLeft + linkList.clientWidth >= linkList.scrollWidth) {
      // Reached the end, add more links (infinite scrolling logic)
      setTimeout(function() {
        linkData.forEach(link => {
          const li = document.createElement('li');
          li.textContent = link;
          linkList.appendChild(li);
        });
      }, 500); // Simulated delay for fetching more data
    }
  });
 