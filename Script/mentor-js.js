    // Toggle navigation menu
    document.getElementById('hamburger').addEventListener('click', function() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
    });
    // Sample mentor data
    const mentors = [{
        
        name: "Dr.Birmohan Singh",
        position: "Professor",
        expertise: "Ph.D., M.E",
        imageUrl:"http://sliet.ac.in/wp-content/uploads/avatars/5/6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg",
        
    },{name: "Dr. Damanpreet Singh",
        position: "Professor",
        expertise: "Ph.D., M.Tech, B.Tech.",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/4/65783e7db0473-bpfull.jpg",
    },{
        name: "Dr. Major Singh Goraya",
        position: "Professor",
        expertise: "Ph.D., M.Tech., B.Tech.",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg",
        
    },{
        name: "Dr. Manoj Sachan",
        position: "Professor",
        expertise: "B.Tech(Computer Science) , M.E(Computer Science), Ph.D (Computer Science & Engineering)",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg",
        
    },{
        name: "Dr. Gurjinder Kaur",
        position: "Associate Professor",
        expertise: "B.E,M.S,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg",
       
    }
    ,{
        name: "Dr. Amar Nath",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg",
        
    },{
        name: "Dr. Jagdeep Singh",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg",
        
    },{
        name: "Dr. Manminder Singh",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg",
       
    },{
        name: "Dr. Preetpal Kaur Buttar",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/349/632d98c75d80f-bpfull.jpg",
        
    },{
        name: "Dr. Tajinder Singh",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/468/64e3532d30fac-bpfull.jpg",
        
    },{
        name: "Dr.Utkarsh",
        position: "Assistant Professor",
        expertise: "B.Tech,M.Tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg",

    },{
        name: "Dr. VINOD KUMAR VERMA",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg",
       
    },{
        name: "Jaspal Singh",
        position: "Assistant Professor",
        expertise: "M.E,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg",
        
    },{
        name: "Rahul Gautam",
        position: "Assistant Professor",
        expertise: "B.tech,M.Tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg",
        
    },{
        name: "Dr. Jatinder Pal Singh",
        position: "Assistant Professor(Contract)",
        expertise: "M.E,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg",
       
    },{
        name: "Sukhpreet Singh",
        position: "Assistant Professor(Contract)",
        expertise: "B.Tech,Ph.D",
        imageUrl: "http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg",
    }]

    // Populate mentor cards
    const mentorGrid = document.querySelector('.mentor-grid');

    function createMentorCard(mentor) {
const card = document.createElement('div');
card.className = 'mentor-card';

card.innerHTML = `
    <img src="${mentor.imageUrl}" alt="${mentor.name}" class="mentor-image">
    <div class="mentor-info">
        <h3>${mentor.name}</h3>
        <p><strong>${mentor.position}</strong></p>
        <p>${mentor.expertise}</p>
    </div>
`;

return card;
}
    mentors.forEach(mentor => {
        mentorGrid.appendChild(createMentorCard(mentor));
    });
