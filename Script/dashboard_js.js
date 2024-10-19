    // Sample mentor data
    const mentors = [{
        name: "Dr.Birmohan Singh",
        position: "Professor",
        expertise: "Ph.D., M.E",
        imageUrl: "https://imgbb.com/][img]https://i.ibb.co/7tB0P4n/Birmohan-sing.jpg",
        availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"]
    }, {
        name: "Dr. Damanpreet Singh",
        position: "Professor",
        expertise: "Ph.D., M.Tech,B.tech",
        imageUrl: "https://i.ibb.co/7tB0P4n/Birmohan-sing.jpg",
        availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"]
    }, {
        name: "Dr. Major Singh Goraya",
        position: "Professor",
        expertise: "Ph.D., M.Tech., B.Tech.",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. Manoj Sachan",
        position: "Professor",
        expertise: "B.Tech(Computer Science) , M.E(Computer Science), Ph.D (Computer Science & Engineering)",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. Gurjinder Kaur",
        position: "Associate Professor",
        expertise: "B.E,M.S,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    }
    ,{
        name: "Dr. Amar Nath",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. Jagdeep Singh",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. Manminder Singh",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. Preetpal Kaur Buttar",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/349/632d98c75d80f-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. Tajinder Singh",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/468/64e3532d30fac-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr.Utkarsh",
        position: "Assistant Professor",
        expertise: "B.Tech,M.Tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. VINOD KUMAR VERMA",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Jaspal Singh",
        position: "Assistant Professor",
        expertise: "M.E,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Rahul Gautam",
        position: "Assistant Professor",
        expertise: "B.tech,M.Tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Dr. Jatinder Pal Singh",
        position: "Assistant Professor(Contract)",
        expertise: "M.E,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },{
        name: "Sukhpreet Singh",
        position: "Assistant Professor(Contract)",
        expertise: "B.Tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg",
        availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    }];

    // Create mentor cards
    const mentorGrid = document.getElementById("mentors");
    mentors.forEach(mentor => {
        const mentorCard = createMentorCard(mentor);
        mentorGrid.appendChild(mentorCard);
    });

    function createMentorCard(mentor) {
        const card = document.createElement('div');
        card.className = 'mentor-card';

        card.innerHTML = `
            <img src="${mentor.imageUrl}" alt="${mentor.name}" class="mentor-image">
            <div class="mentor-info">
                <h3>${mentor.name}</h3>
                <p><strong>${mentor.position}</strong></p>
                <p>${mentor.expertise}</p>
                <input type="date" class="date-picker" placeholder="Select Date" onchange="updateAvailableSlots('${mentor.name}')">
                <div class="time-slots" id="${mentor.name}-time-slots"></div>
                <button class="chat-button" onclick="openChat('${mentor.name}')">Chat</button>
            </div>
        `;

        return card;
    }

    function updateAvailableSlots(mentorName) {
        const selectedDate = document.querySelector(`input[type="date"].date-picker`).value;
        const timeSlotsContainer = document.getElementById(`${mentorName}-time-slots`);
        timeSlotsContainer.innerHTML = ''; // Clear previous slots

        if (selectedDate) {
            const availableSlots = mentors.find(mentor => mentor.name === mentorName).availableSlots;

            availableSlots.forEach(slot => {
                const slotDiv = document.createElement('div');
                slotDiv.className = 'time-slot';
                slotDiv.innerText = slot;
                slotDiv.onclick = () => bookSlot(mentorName, slot, selectedDate);
                timeSlotsContainer.appendChild(slotDiv);
            });
        }
    }

    function bookSlot(mentorName, timeSlot, date) {
        const bookedSlot = `${date} - ${timeSlot}`;
        const timeSlotElements = document.querySelectorAll('.time-slot');
        timeSlotElements.forEach(slot => {
            if (slot.innerText === timeSlot) {
                slot.classList.add('booked');
                slot.innerText = 'Booked';
            }
        });

        const listItem = document.createElement('li');
        listItem.innerText = `Mentor: ${mentorName} - Time: ${bookedSlot}`;
        document.getElementById('bookingList').appendChild(listItem);
    }

    function openChat(mentorName) {
        const chatContainer = document.querySelector('.chat-container');
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.innerHTML = `<strong>${mentorName}</strong>: Hi! How can I help you today?`;
        chatContainer.style.display = 'block';
    }

    function closeChat() {
        const chatContainer = document.querySelector('.chat-container');
        chatContainer.style.display = 'none';
    }

    // Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
