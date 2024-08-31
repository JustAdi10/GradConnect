    const jobsData =[
        {
            id: 1,
            jobTitle: "Backend Developer",
            companyName: "Tech Innovators",
            recruiterType: "Company",
            duration: "12 months",
            stipend: 20000,
            location: "Bangalore, India"
        },
        {
            id: 2,
            jobTitle: "Full Stack Developer",
            companyName: "Code Wizards Pvt Ltd",
            recruiterType: "Company",
            duration: "6 months",
            stipend: 18000,
            location: "Chennai, India"
        },
        {
            id: 3,
            jobTitle: "Frontend Developer",
            companyName: "InnoTech Solutions",
            recruiterType: "Alumni Product",
            duration: "3 months",
            stipend: 15000,
            location: "Online"
        },
        {
            id: 4,
            jobTitle: "Machine Learning Engineer",
            companyName: "AI Ventures",
            recruiterType: "Faculty",
            duration: "12 months",
            stipend: 19000,
            location: "Hyderabad, India"
        },
        {
            id: 5,
            jobTitle: "Mobile App Developer",
            companyName: "Appify Labs",
            recruiterType: "Company",
            duration: "9 months",
            stipend: 17000,
            location: "Coimbatore, India"
        },
        {
            id: 6,
            jobTitle: "Data Scientist",
            companyName: "Data Corp",
            recruiterType: "Company",
            duration: "12 months",
            stipend: 20000,
            location: "Chennai, India"
        },
        {
            id: 7,
            jobTitle: "Cloud Engineer",
            companyName: "CloudGenix",
            recruiterType: "Alumni Product",
            duration: "10 months",
            stipend: 18000,
            location: "Online"
        },
        {
            id: 8,
            jobTitle: "DevOps Engineer",
            companyName: "DevOps Solutions",
            recruiterType: "Company",
            duration: "8 months",
            stipend: 16000,
            location: "Bangalore, India"
        },
        {
            id: 9,
            jobTitle: "Cybersecurity Analyst",
            companyName: "SecureIT Inc.",
            recruiterType: "Faculty",
            duration: "7 months",
            stipend: 15000,
            location: "Online"
        },
        {
            id: 10,
            jobTitle: "UI/UX Designer",
            companyName: "DesignPro Studio",
            recruiterType: "Alumni Product",
            duration: "5 months",
            stipend: 14000,
            location: "Kochi, India"
        },
        {
            id: 11,
            jobTitle: "Game Developer",
            companyName: "PlayNation",
            recruiterType: "Company",
            duration: "4 months",
            stipend: 12000,
            location: "Online"
        },
        {
            id: 12,
            jobTitle: "AI Researcher",
            companyName: "AI Hub",
            recruiterType: "Faculty",
            duration: "12 months",
            stipend: 20000,
            location: "Chennai, India"
        },
        {
            id: 13,
            jobTitle: "Blockchain Developer",
            companyName: "CryptoChain Ltd",
            recruiterType: "Company",
            duration: "6 months",
            stipend: 18000,
            location: "Bangalore, India"
        },
        {
            id: 14,
            jobTitle: "Software Tester",
            companyName: "Testify Solutions",
            recruiterType: "Alumni Product",
            duration: "7 months",
            stipend: 16000,
            location: "Online"
        },
        {
            id: 15,
            jobTitle: "Big Data Engineer",
            companyName: "DataWave Inc.",
            recruiterType: "Company",
            duration: "9 months",
            stipend: 17000,
            location: "Hyderabad, India"
        },
        {
            id: 16,
            jobTitle: "AR/VR Developer",
            companyName: "Virtual Visions",
            recruiterType: "Faculty",
            duration: "10 months",
            stipend: 19000,
            location: "Bangalore, India"
        },
        {
            id: 17,
            jobTitle: "IoT Developer",
            companyName: "SmartTech Solutions",
            recruiterType: "Company",
            duration: "6 months",
            stipend: 15000,
            location: "Coimbatore, India"
        },
        {
            id: 18,
            jobTitle: "Systems Engineer",
            companyName: "Systematics Pvt Ltd",
            recruiterType: "Alumni Product",
            duration: "8 months",
            stipend: 18000,
            location: "Online"
        },
        {
            id: 19,
            jobTitle: "DevSecOps Engineer",
            companyName: "SecOps Solutions",
            recruiterType: "Faculty",
            duration: "12 months",
            stipend: 20000,
            location: "Chennai, India"
        },
        {
            id: 20,
            jobTitle: "AI Model Trainer",
            companyName: "AI Excellence Center",
            recruiterType: "Faculty",
            duration: "12 months",
            stipend: 20000,
            location: "Bangalore, India"
        }
    ];

    function displayJobs(jobs) {
        const jobList = document.getElementById('jobList');
        jobList.innerHTML = '';
        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <h4>${job.jobTitle}</h4>
                <p><strong>Company:</strong> ${job.companyName}</p>
                <p><strong>Type:</strong> ${job.recruiterType}</p>
                <p><strong>Duration:</strong> ${job.duration}</p>
                <p><strong>Stipend:</strong> ₹${job.stipend}</p>
                <p><strong>Location:</strong> ${job.location}</p>
            `;
            jobList.appendChild(jobCard);
        });
    }

    function filterJobs() {
        const filterJobTitle = document.getElementById('filterJobTitle').value.toLowerCase();
        const filterCompany = document.getElementById('filterCompany').value.toLowerCase();
        const filterType = document.getElementById('filterType').value;
        const filterLocation = document.getElementById('filterLocation').value.toLowerCase();

        const filteredJobs = jobsData.filter(job => {
            return (
                job.jobTitle.toLowerCase().includes(filterJobTitle) &&
                job.companyName.toLowerCase().includes(filterCompany) &&
                (filterType === "" || job.recruiterType === filterType) &&
                job.location.toLowerCase().includes(filterLocation)
            );
        });

        displayJobs(filteredJobs);
    }

    function sortJobs() {
        const sortStipend = document.getElementById('sortStipend').value;

        const sortedJobs = [...jobsData].sort((a, b) => {
            return sortStipend === 'asc' ? a.stipend - b.stipend : b.stipend - a.stipend;
        });

        displayJobs(sortedJobs);
    }

    document.addEventListener('DOMContentLoaded', () => {
        displayJobs(jobsData);
    });