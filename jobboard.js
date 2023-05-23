const featuredJobsContainer = document.querySelector('.featured-jobs');
const form = document.querySelector('form');
const keywordsInput = document.getElementById('keywords');
const locationInput = document.getElementById('location');

function filterJobs(jobs) {
  const keywords = keywordsInput.value.toLowerCase().trim();
  const location = locationInput.value.toLowerCase().trim();

  return jobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    const jobLocation = job.location.toLowerCase();

    return (
      jobTitle.includes(keywords) &&
      jobLocation.includes(location)
    );
  });
}

function updateJobBoard(jobs) {
  featuredJobsContainer.innerHTML = '';

  jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card'); 
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <p>${job.location}</p>
      <p>${job.description}</p>
      <a href="${job.applyUrl}">Apply Now</a>
    `;
    featuredJobsContainer.appendChild(jobCard);
  });
}

fetch('job.json')
  .then(response => response.json())
  .then(data => {
    const jobs = data.jobs; 
    updateJobBoard(jobs);

    form.addEventListener('submit', event => {
      event.preventDefault();
      const filteredJobs = filterJobs(jobs);
      updateJobBoard(filteredJobs);
    });
  });
