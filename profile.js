function calculateAge() 
{
  var birth = new Date('01/23/1995');
  const now = new Date();
  const diff = Math.abs(now - birth );
  const profile = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  document.getElementById("profile").innerHTML = profile + "-year-old entrepreneurial-minded computer engineer with ten years of study in computer engineering/science, one year of experience in software quality assurance and development, and more than three years of experience running their own business. Capable of swiftly and precisely identifying all faults and bugs, which needs outstanding analytical, evaluative, and perceptual skills, as well as a keen eye for detail and strong communication and problem-solving abilities."
}
calculateAge();

