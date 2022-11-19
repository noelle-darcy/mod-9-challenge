class MarkDown {
    static generateReadme(answers){
        return `
        # ${answers.projectName}

        ## Table of Content 
        -[Project Description] (#Description)
        -[Usage](#Usage)
        -[Contruibutions](#Contributions)
        -[Installation](#Installation)
        -[Questions](#Questions)
        -[License](#License)

        ## Description 
        ${answers.description}

        ## Usage
        ${answers.usageInfo}

        ## Installation 
        ${answers.instructions}

        ## Contributions 
        ${answers.contributions}

        ## Questions 
        Email - ${answers.emailAddress}
        Github - ${answers.username}

        ## License 
        ${answers.license}

        ## Test Instructions 
        ${answers.testInstructions}
        `
    }
}

module.exports = MarkDown