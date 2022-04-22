export default {
    doc: (userInput) =>(
        `---
        title: ${userInput.title}
        author: ${userInput.author}
        sidebar_label: ${userInput.sidebarLabel}
        tags:
        ${userInput.tags.split(',').map(tag => "- " + tag.trim()).join('\n')}
        ---
        
        **TLDR**: One-line summary of doc
        
        ___

        Replace me and write doc here
        `
    ),
    narrative: (userInput) => (
        `---
        title: ${userInput.title}
        author: ${userInput.author}
        sidebar_label: ${userInput.sidebarLabel}
        tags:
        ${userInput.tags.split(',').map(tag => "- " + tag.trim()).join('\n')}
        ---
        
        **TLDR**: One-line summary of narrative
        
        ___
        
        ## Replace me and talk about things under here:
        This is where all the details regarding narratives should be, make it easy for people who are just briefly checking pages to know if the information is relevant and necessary to them by including the TLDR section and adding a brief Intro section to get them up to speed on what you will be writing about
        `
    ),
    onboarding: (userInput) => (
        `---
        title: ${userInput.title}
        author: ${userInput.author}
        sidebar_label: ${userInput.sidebarLabel}
        tags:
        ${userInput.tags.split(',').map(tag => "- " + tag.trim()).join('\n')}
        ---

        **TLDR**: One-line summary of narrative

        ___

        ## Week <1-6>

        ### Monday - Wednesday
        Replace me and talk about things here

        ### Wednesday - Friday
        Replace me and talk about things here

        ## Feedback

        ### The Positive
        Replace me and talk about things here

        ### The More Critical
        Replace me and talk about things here
        `
        ),
    problem_statement: (userInput) => (
        `---
        title: ${userInput.title}
        author: ${userInput.author}
        sidebar_label: ${userInput.sidebarLabel}
        tags:
        ${userInput.tags.split(',').map(tag => "- " + tag.trim()).join('\n')}
        ---

        <!--ALL questions should be considered optional. Follow the format, but pick and choose questions that fit your use case. Answer the questions that will help you better understand the work at hand and answer "N/A" for the questions that have no impact on your particular problem.-->

        ## Problem Statement: What is the problem that needs to be solved?

        **1 - 2 sentences**
        High level statement of problem, simple and easily digestible

        ---

        ## Why is it a problem?

        **1 paragraph**
        Break the problem down further, highlight pain points

        ---

        ## Where is the problem observed (location and products)?

        **1 - 4 sentences**
        Describe where you have seen the problem, if applicable link to evidence of the problem

        ---

        ## Who is impacted?

        **1 - 2 sentences**
        Describe who is affected by the problem

        ---

        ## How is the problem observed (symptoms)?

        **1 - 2 sentences**
        Describe how the problem had manifested. What is the evidence of the problem, etc. If applicable link to examples

        ---

        ## How often is the problem observed?

        **1 - 2 sentences**
        Short statement that sums up how often the problem is observed

        --- 

        ## What are some outstanding concerns?

        **Optional**
        What are challenges or concerns based on this specific issue

        ---

        ## Pitches and POCS:
        **After acceptance / for planning and prioritization of cycle. Add as many as needed with the three dashes after each**

            Template:
                - POC title: [optional] Idea Name
                - Repo Link: [optional] What repo are you working on
                - Open questions: what questions do you have about this
                - Feedback: [optional] feedback from team during pitch process
                - Status: Accepted, Not Accepted
                - Notes: thoughts you have, steps or reminders
                    -Stories
                        -[ ]
                        -[ ]
                        -[ ]

        ---

        ## Outcome:
        **For end of cycle**
        Write down outstanding issues related to problem or explain how perfectly things have been resolved. This is a nice space for next steps and closing thoughts. 
        ` 
    )
}