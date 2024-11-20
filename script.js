document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

/** hero */

 
//  document.querySelector('.learn-more').addEventListener('click', function() {
    // Add functionality for the "Learn More" button
//    window.location.href = '#about'; // Example action to scroll to the About section
//  });

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

/**about */

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a class to the features for a simple fade-in animation
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
      setTimeout(() => {
        feature.classList.add('visible');
      }, index * 200);
    });
  });

  
/** key features */

document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150);
    });
  });

  /** how it work */

  document.addEventListener('DOMContentLoaded', function() {
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-in');
      }, index * 200);
    });
  });

  /** call to action */
  document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Thank you for your interest! Redirecting to the sign-up page...');
    // Redirect to the sign-up page or perform another action
    window.location.href = '#signup'; // Adjust the link as needed
  });

  
  /** footer */

  document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      alert(`Navigating to ${event.target.textContent}...`);
      // You can add your custom navigation logic here
    });
  });
  

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('joinNowModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Smooth scroll for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(event) {
        const targetId = this.getAttribute('onclick').match(/#\w+/)[0];
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            event.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// JavaScript for Benefit Item Pop-up (Optional)
document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('click', function() {
        alert(`More info about ${this.querySelector('h3').textContent}`);
    });
});

// Function to view data for Market Insights
function viewData() {
    alert("Navigating to the View Data page for Market Insights.");
    // Redirect or open the View Data page here, e.g.,
    // window.location.href = 'view-data.html';
}

// Function to add data for Market Insights
function addData() {
    alert("Navigating to the Add Data page for Market Insights.");
    // Redirect or open the Add Data page here, e.g.,
    // window.location.href = 'add-data.html';
}

// Function to show details for other features
function showFeatureDetail(featureName) {
    alert(`More details about ${featureName}. Explore how this feature can help you with your agricultural needs!`);
}

// Dummy data storage for simplicity
const cropData = [];

// Function to submit data on Add Data page
function submitData() {
    const district = document.getElementById("district").value;
    const cropType = document.getElementById("cropType").value;
    const seedType = document.getElementById("seedType").value;
    const plantDate = document.getElementById("plantDate").value;
    const harvestDate = document.getElementById("harvestDate").value;
    const quantity = document.getElementById("quantity").value;

    // Validation check
    if (!district || !cropType || !seedType || !plantDate || !harvestDate || !quantity) {
        alert("Please fill in all fields.");
        return;
    }

    // Store data
    cropData.push({
        district,
        cropType,
        seedType,
        plantDate,
        harvestDate,
        quantity
    });

    alert("Data submitted successfully!");
    document.getElementById("addDataForm").reset(); // Reset form
}

// Function to display data on View Data page
function displayData() {
    const selectedDistrict = document.getElementById("districtSelect").value;
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = "";

    const filteredData = cropData.filter(data => data.district === selectedDistrict);

    if (filteredData.length > 0) {
        filteredData.forEach(data => {
            dataDisplay.innerHTML += `
                <div class="data-entry">
                    <p><strong>Crop Type:</strong> ${data.cropType}</p>
                    <p><strong>Seed Type:</strong> ${data.seedType}</p>
                    <p><strong>Planting Date:</strong> ${data.plantDate}</p>
                    <p><strong>Harvest Date:</strong> ${data.harvestDate}</p>
                    <p><strong>Quantity:</strong> ${data.quantity} kg/tons</p>
                    <hr>
                </div>
            `;
        });
    } else {
        dataDisplay.innerHTML = "<p>No data available for the selected district.</p>";
    }
}

// Function to toggle FAQ answer display
function toggleFAQ(faqQuestion) {
    const faqAnswer = faqQuestion.nextElementSibling;
    const isVisible = faqAnswer.style.display === 'block';

    // Hide all other FAQ answers
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });

    // Toggle the clicked FAQ answer
    faqAnswer.style.display = isVisible ? 'none' : 'block';
}
