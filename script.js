let jobData = [
    {
        id: 1,
        companyName: "Metro by T-Mobile",
        position: "Sales Representative",
        location: "1166 Franklin Gateway SE, Marietta, GA 30067",
        type: "Full-time",
        salary: "$10,000 - $17,000",
        description: "As a Sales Representative, you will drive B2B growth through outside sales, account management, and expert technology consulting to build lasting client relationships and exceed targets.",
        status: "NOT APPLIED"
    },
    {
        id: 2,
        companyName: "BAY FOOD BROKERAGE INC",
        position: "Full-Time Retail Representative ",
        location: "Los Angeles, CA",
        type: "Full-time",
        salary: "$8,000 - $12,000",
        description: "Drive retail growth and brand visibility as a Full-Time Retail Representative by merchandising products and building strategic relationships within Publix, Kroger, and other key accounts.",
        status: "NOT APPLIED"
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "NOT APPLIED"
    },
    {
        id: 4,
        companyName: "Mias bakery",
        position: "Assistant Manager",
        location: "Manhattan, NY 10128",
        type: "Part-time",
        salary: "$20,000 - $30,000",
        description: "As an energetic Assistant Manager, you will streamline daily operations and maintain brand standards by balancing process-driven management with people-focused leadership to ensure an efficient front-of-house experience.",
        status: "NOT APPLIED"
    },
    {
        id: 5,
        companyName: "Social Security Administration",
        position: "Social Insurance Specialist",
        location: "51 North Elm Street, Waterbury, CT 06702",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "As a Claims Specialist, you will deliver Social Security services by conducting interviews, adjudicating benefit eligibility, and resolving complex claim discrepancies using SSA computer systems to support the public.",
        status: "NOT APPLIED"
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$115,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development.",
        status: "NOT APPLIED"
    },
    {
        id: 7,
        companyName: "Fabletics - Classen Curve",
        position: "Full-time Retail Manager Position",
        location: "5850 North Classen Boulevard, Oklahoma City, OK 73118",
        type: "Remote",
        salary: "$12,000 - $16,000",
        description: "As a dynamic leader in this Full-time Leadership Position, you will drive retail results by guiding teams, marketing products, and leveraging strong management skills to ensure exceptional customer service.",
        status: "NOT APPLIED"
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$150,000 - $210,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. Work with a talented team.",
        status: "NOT APPLIED"
    }
];

let currentTab = "All";

function Jobs() {
    const container = document.getElementById("job_container");
    container.innerHTML = "";

    let jobsToShow = jobData;
    if (currentTab === "Interview") {
        jobsToShow = jobData.filter(job => job.status === "Interview");
    } else if (currentTab === "Rejected") {
        jobsToShow = jobData.filter(job => job.status === "Rejected");
    }

    if (jobsToShow.length === 0) {
        container.innerHTML = `
            <div class="state">
                <div class="icon"><img src="./img/jobs.png"></img></div>
                <h3>No jobs available</h3>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }
 jobsToShow.forEach(job => {
        const isInterview = job.status === "Interview" ? "active" : "";
        const isRejected = job.status === "Rejected" ? "active" : "";

        const card = document.createElement("div");
        card.className = "job_card";
        card.innerHTML = `
            <button class="deletebtn" onclick="deleteJob(${job.id})" title="Delete Job"><img id="dustbin_img" src="./img/dustbin.png"></img></button>
            <div class="companyname">${job.companyName}</div>
            <div class="jobtitle">${job.position}</div>
            <div class="jobdetails">
                ${job.location} • ${job.type} • ${job.salary}
            </div>
            <div class="jobstatus">${job.status}</div>
            <div class="jobdescription">${job.description}</div>
            <div class="cardactions">
                <button class="action_btn btn_interview ${isInterview}" onclick="updateJobStatus(${job.id}, 'Interview')">INTERVIEW</button>
                <button class="action_btn btn_rejected ${isRejected}" onclick="updateJobStatus(${job.id}, 'Rejected')">REJECTED</button>
            </div>
        `;
        container.appendChild(card);
    });
}