// ================= JOB DATA =================
let jobs = [
{ id:1, company:"Mobile First Corp", position:"React Dev", type:"Remote • Full-time • $120k-$140k", notes:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"not applied" },
{ id:2, company:"Webflow Agency", position:"Web Designer & Developer", type:"LA • Part-time • $80k-$90k", notes:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"not applied" },
{ id:3, company:"DataViz Solutions", position:"Data Specialist", type:"Remote • Full-time • $150k-$180k", notes:"Data visualization and analysis for enterprise clients.", status:"not applied" },
{ id:4, company:"CloudFirst Inc", position:"Backend Dev", type:"Seattle • Full-time • $120k-$140k", notes:"Build APIs and backend services for scalable applications.Design and maintain scalable backend systems using Python and AWS.", status:"not applied" },
{ id:5, company:"Innovation Labs", position:"UI Designer", type:"Austin • Full-time • $90k-$120k", notes:"Design systems and user interfaces for modern web applications. ", status:"not applied" },
{ id:6, company:"MegaCorp", position:"JS Dev", type:"NYC • Full-time • $150k-$180k", notes:"Enterprise JavaScript applications and frameworks.", status:"not applied" },
{ id:7, company:"StartupXYZ", position:"Full Stack", type:"Remote • Full-time • $100k-$110k", notes:"React & Node full-stack development for scalable web applications.", status:"not applied" },
{ id:8, company:"TechCorp", position:"Frontend Dev", type:"SF • Full-time • $120k-$140k", notes:"Build responsive and accessible user interfaces using modern frontend frameworks.", status:"not applied" }
];

let currentStatus = "all";

const jobContainer = document.getElementById("job-container");

// ================= RENDER ALL JOBS DATA =================
function renderAll(){

    jobContainer.innerHTML = "";

    if(jobs.length === 0){
        jobContainer.innerHTML = emptyUI();
        updateCounts();
        return;
    }

    for(let job of jobs){
        jobContainer.innerHTML += createCard(job);
    }

    updateCounts();
}

// ================= UPDATE COUNTS STATUS =================
function updateCounts(){

    let interviewList = jobs.filter(function(job){
        return job.status === "interview";
    });

    let rejectedList = jobs.filter(function(job){
        return job.status === "rejected";
    });

    let total = jobs.length;
    let interview = interviewList.length;
    let rejected = rejectedList.length;

    document.getElementById("total-count").innerText = total;
    document.getElementById("interview-count").innerText = interview;
    document.getElementById("rejected-count").innerText = rejected;

    // JOB COUNT IN SECTION
    if(currentStatus === "all"){
        document.getElementById("section-count").innerText = total + " jobs";
    }

    if(currentStatus === "interview"){
        document.getElementById("section-count").innerText = interview + " jobs";
    }

    if(currentStatus === "rejected"){
        document.getElementById("section-count").innerText = rejected + " jobs";
    }
}
// =================  JOB CARD TEMPLATE  CREATE=================
function createCard(job){

    return `
    <div class="card bg-white flex justify-between sm:flex-col md:flex-col lg:flex-row p-6 rounded">

        <div>
            <p class="font-bold text-xl text-[#002C5C]">${job.company}</p>
            <p class="text-gray-500">${job.position}</p>
            <p class="text-sm text-gray-400">${job.type}</p>

            <button class="bg-blue-100 px-3 py-1 mt-2 text-[#002C5C] font-bold rounded">
                ${ job.status.toUpperCase()}
            </button>

            <p class="mt-2">${job.notes}</p>

            <div class="space-x-2 mt-3">
                <button onclick="updateStatus(${job.id}, 'interview')" 
                class="border border-green-500 px-3 py-1 text-green-600 cursor-pointer">
                Interview
                </button>

                <button onclick="updateStatus(${job.id}, 'rejected')" 
                class="border border-red-500 px-3 py-1 text-red-500 cursor-pointer">
                Rejected
                </button>
            </div>
        </div>

        <button onclick="deleteJob(${job.id})" class="text-red-500 sm:mt-4 md:mt-4 lg:mt-0">
            <img src="./assets/delete_icon.png" class="w-7 cursor-pointer"  alt="Delete Job">
        </button>

    </div>`;
}

// ================= RENDER INTERVIEW JOBS =================
function renderInterviewList(){

    let interviewList = jobs.filter(function(job){
        return job.status === "interview";
    });

    jobContainer.innerHTML = "";

    if(interviewList.length === 0){
        jobContainer.innerHTML = emptyUI();
        updateCounts();
        return;
    }

    for(let job of interviewList){
        jobContainer.innerHTML += createCard(job);
    }

    updateCounts();
}

// ================= RENDER REJECTED JOBS =================
function renderRejected(){

    let rejectedList = jobs.filter(function(job){
        return job.status === "rejected";
    });

    jobContainer.innerHTML = "";

    if(rejectedList.length === 0){
        jobContainer.innerHTML = emptyUI();
        updateCounts();
        return;
    }

        for(let job of rejectedList){
        jobContainer.innerHTML += createCard(job);
    }

    updateCounts();
}


// ================= UPDATE STATUS =================
function updateStatus(id, newStatus){

    let job = jobs.find(function(item){
        return item.id === id;
    });

    if(job.status === newStatus){
        job.status = "not applied";
    } else {
        job.status = newStatus;
    }

    applyCurrentTab();
}

// ================= TOGGLE HANDLING =================
function changeTab(tab){

    currentStatus = tab;

    let buttons = document.getElementsByClassName("tab-btn");

    
    for(let btn of buttons){
        btn.classList.remove("bg-blue-500", "text-white");
        btn.classList.add("bg-white", "text-black");
    }
    event.target.classList.remove("bg-white", "text-black");
    event.target.classList.add("bg-blue-500", "text-white");

    applyCurrentTab();
}


// ================= APPLY CURRENT TAB FUNCTIONALITY =================
function applyCurrentTab(){

    if(currentStatus === "all"){
        renderAll();
    }

    if(currentStatus === "interview"){
        renderInterviewList();
    }

    if(currentStatus === "rejected"){
        renderRejected();
    }
}

// ================= DELETE JOBS CARD  =================
function deleteJob(id){

    jobs = jobs.filter(function(job){
        return job.id !== id;
    });

    applyCurrentTab();
}
// ================= EMPTY UI CREATION  =================
function emptyUI(){
    return `
    <div class=" bg-white text-center py-10 rounded">
        <div class="text-6xl mx-auto w-24">
            <img src="./assets/jobs.png" alt="Jobs">
        </div>
        <p class="text-xl font-bold  text-[#002C5C]">No Jobs Available</p>
        <p class="text-gray-500">Check back later for new job opportunities</p>
    </div>`;
}

// ================= INITIAL RENDER ALL JOBS =================
renderAll();