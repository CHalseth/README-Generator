const generateMarkdown = data => {
    return `# ${data.title}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    ## Installation 
    ${data.install}
    ## Usage 
    ${data.usage}
    ## License 
    This project is license under ${data.license}
    ## Contributing 
    ${data.contribution}
    ## Tests
    ${data.test}
    ## Questions
    If you have any questions about this projects, please contact me directly at ${data.email}. or through my GitHub at https://github.com/${data.github}.
    `;
}

module.exports = generateMarkdown;