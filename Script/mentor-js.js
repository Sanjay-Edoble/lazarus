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
        imageUrl: "https://i.ibb.co/7tB0P4n/Birmohan-sing.jpg"
    }, {
        name: "Dr. Damanpreet Singh",
        position: "Professor",
        expertise: "Ph.D., M.Tech,B.tech",
        imageUrl: "https://i.ibb.co/wJn3kd9/Dr-Damanpreet-Singh.jpg"
    }, {
        name: "Dr. Major Singh Goraya",
        position: "Professor",
        expertise: "Ph.D., M.Tech., B.Tech.",
        imageUrl: "https://i.ibb.co/WvV9KR2/Dr-Major-Singh-Goraya.jpg"
    },{
        name: "Dr. Manoj Sachan",
        position: "Professor",
        expertise: "B.Tech(Computer Science) , M.E(Computer Science), Ph.D (Computer Science & Engineering)",
        imageUrl: "https://i.ibb.co/3f0hFgN/Dr-Manoj-Sachan.jpg"
    },{
        name: "Dr. Gurjinder Kaur",
        position: "Associate Professor",
        expertise: "B.E,M.S,Ph.D",
        imageUrl: "https://i.ibb.co/GMnfsPJ/dr-gurijinder-karu.jpg"
    }
    ,{
        name: "Dr. Amar Nath",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "https://i.ibb.co/dkBkxgX/Dr-Amar-Nath.jpg"
    },{
        name: "Dr. Jagdeep Singh",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "https://i.ibb.co/gjrT61Q/Dr-Jagdeep-Singh.jpg"
    },{
        name: "Dr. Manminder Singh",
        position: "Assistant Professor",
        expertise: "B.tech,M.tech,Ph.D",
        imageUrl: "https://i.ibb.co/r4bvyjW/manmindr.jpg"
    },{
        name: "Dr. Preetpal Kaur Buttar",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "https://i.ibb.co/Vj1GrX3/Dr-Preetpal-Kaur-Buttar.jpg"
    },{
        name: "Dr. Tajinder Singh",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "https://i.ibb.co/QQK5wG6/Dr-Tajinder-Singh.jpg"
    },{
        name: "Dr.Utkarsh",
        position: "Assistant Professor",
        expertise: "B.Tech,M.Tech,Ph.D",
        imageUrl: "https://i.ibb.co/vLGWK5n/Dr-Utkarsh.jpg"
    },{
        name: "Dr. VINOD KUMAR VERMA",
        position: "Assistant Professor",
        expertise: "Ph.D",
        imageUrl: "https://i.ibb.co/YRDVbGx/Dr-VINOD-KUMAR-VERMA.png"
    },{
        name: "Jaspal Singh",
        position: "Assistant Professor",
        expertise: "M.E,Ph.D",
        imageUrl: "https://i.ibb.co/ss72g2d/Jaspal-Singh.jpg"
    },{
        name: "Rahul Gautam",
        position: "Assistant Professor",
        expertise: "B.tech,M.Tech,Ph.D",
        imageUrl: "https://i.ibb.co/LZ4qYCk/Rahul-Gautam.jpg"
    },{
        name: "Dr. Jatinder Pal Singh",
        position: "Assistant Professor(Contract)",
        expertise: "M.E,Ph.D",
        imageUrl: "https://i.ibb.co/5j97Ydk/Dr-Jatinder-Pal-Singh.jpg"
    },{
        name: "Sukhpreet Singh",
        position: "Assistant Professor(Contract)",
        expertise: "B.Tech,Ph.D",
        imageUrl: "https://i.ibb.co/k0kq9mh/sukerpreet-sing.jpg"
    }];
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
